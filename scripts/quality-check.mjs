import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (name) => readFileSync(resolve(root, name), "utf8");
const html = read("index.html");
const js = read("app.js");
const css = read("style.css");
const worker = read("service-worker.js");
const manifest = JSON.parse(read("manifest.json"));

assert.doesNotThrow(() => new Function(js), "app.js must parse as valid JavaScript");

const ids = [...html.matchAll(/\\bid=["']([^"']+)["']/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
assert.deepEqual([...new Set(duplicateIds)], [], "HTML IDs must be unique");

const buttons = [...html.matchAll(/<button\\b([^>]*)>/gi)];
const untypedButtons = buttons.filter((match) => !/\\btype\\s*=/.test(match[1]));
assert.equal(untypedButtons.length, 0, "Every button must declare its type");

const localReferences = [];
for (const match of html.matchAll(/<(?:script|link|img)\\b[^>]*?\\b(?:src|href)=["']([^"']+)["'][^>]*>/gi)) {
  const url = match[1];
  if (!url || /^(?:[a-z]+:|\\/\\/|#)/i.test(url)) continue;
  const pathname = decodeURIComponent(url.split(/[?#]/, 1)[0]);
  if (pathname) localReferences.push(pathname);
}
for (const pathname of localReferences) {
  assert.ok(existsSync(resolve(root, pathname)), `Local HTML asset is missing: ${pathname}`);
}

const shellMatch = worker.match(/const APP_SHELL = \\[([\\s\\S]*?)\\];/);
assert.ok(shellMatch, "Service worker must declare its app shell");
for (const match of shellMatch[1].matchAll(/["']([^"']+)["']/g)) {
  const pathname = match[1].replace(/^\\.\\//, "");
  if (pathname && pathname !== ".") assert.ok(existsSync(resolve(root, pathname)), `Service-worker asset is missing: ${pathname}`);
}

const cssWithoutComments = css.replace(/\\/\\*[\\s\\S]*?\\*\\//g, "").replace(/"(?:\\\\.|[^"\\\\])*"|'(?:\\\\.|[^'\\\\])*'/g, '""');
let braceBalance = 0;
for (const character of cssWithoutComments) {
  if (character === "{") braceBalance++;
  if (character === "}") braceBalance--;
  assert.ok(braceBalance >= 0, "CSS has an unexpected closing brace");
}
assert.equal(braceBalance, 0, "CSS braces must be balanced");

assert.ok(html.includes('id="mathProblem"'), "Math solver input must exist");
assert.ok(html.includes('id="copyMathSolution"'), "Math solution copy control must exist");
assert.ok(html.includes('id="clearMathProblem"'), "Math clear control must exist");
assert.ok(html.includes('id="mathHistory"'), "Math history area must exist");
assert.ok(js.includes("function renderMathHistory()"), "Math history renderer must exist");
assert.ok(js.includes('$$(".responsive-device-button").forEach'), "Responsive controls must use a collection selector");
assert.ok(js.includes('const existing=$$("#codeOutput .output-line");'), "Practice output must collect all console lines");
assert.ok(!js.includes('$(".responsive-device-button").forEach'), "Single-element selector regression detected");
assert.ok(!js.includes('const existing=$("#codeOutput .output-line");'), "Single-element output regression detected");
assert.ok(manifest.name && manifest.start_url && manifest.display, "PWA manifest must include app metadata");

console.log("Scriptly quality checks passed.");
console.log(`Checked ${ids.length} HTML IDs, ${buttons.length} buttons, ${localReferences.length} local asset references, PWA shell assets, CSS balance, and critical interaction regressions.`);
