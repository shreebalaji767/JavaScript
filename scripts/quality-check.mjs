import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (name) => readFileSync(resolve(root, name), "utf8");
const html = read("index.html");
const js = read("app.js");
const css = read("style.css");
const worker = read("service-worker.js");
const manifest = JSON.parse(read("manifest.json"));

assert.doesNotThrow(() => new Function(js), "app.js must parse as valid JavaScript");

// Validate real IDs and catch accidental duplicate IDs.
const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
assert.ok(ids.length > 50, "Expected a substantial UI, found only " + ids.length + " IDs");
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
assert.deepEqual([...new Set(duplicateIds)], [], "HTML IDs must be unique");

// Every button must have an explicit type, and broken quote-to-text transitions
// must not silently swallow labels into an opening tag.
const buttons = [...html.matchAll(/<button\b([^>]*)>/gi)];
assert.ok(buttons.length > 30, "Expected the interactive learning dashboard buttons");
const untypedButtons = buttons.filter((match) => !/\btype\s*=/.test(match[1]));
assert.equal(untypedButtons.length, 0, "Every button must declare its type");
const malformedControls = [...html.matchAll(/<[a-z][a-z0-9-]*\b[^>]*?=["'][^"']+["'][^\s>]/gi)];
assert.deepEqual(malformedControls.map((match) => match[0]), [], "HTML attributes must be separated from text and other attributes");

// Check local assets and all script/link/image references.
const localReferences = [];
for (const match of html.matchAll(/<(?:script|link|img)\b[^>]*?\b(?:src|href)=["']([^"']+)["'][^>]*>/gi)) {
  const url = match[1];
  if (!url || /^(?:[a-z]+:|\/\/|#)/i.test(url)) continue;
  const pathname = decodeURIComponent(url.split(/[?#]/, 1)[0]);
  if (pathname) localReferences.push(pathname);
}
for (const pathname of localReferences) {
  assert.ok(existsSync(resolve(root, pathname)), "Local HTML asset is missing: " + pathname);
}

const shellMatch = worker.match(/const APP_SHELL = \[([\s\S]*?)\];/);
assert.ok(shellMatch, "Service worker must declare its app shell");
for (const match of shellMatch[1].matchAll(/["']([^"']+)["']/g)) {
  const pathname = match[1].replace(/^\.\//, "");
  if (pathname && pathname !== ".") assert.ok(existsSync(resolve(root, pathname)), "Service-worker asset is missing: " + pathname);
}
assert.match(worker, /scriptly-shell-v\d+/, "Service-worker cache must be versioned");

// Balanced CSS braces, ignoring comments and quoted strings.
const cssWithoutComments = css
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, '""');
let braceBalance = 0;
for (const character of cssWithoutComments) {
  if (character === "{") braceBalance++;
  if (character === "}") braceBalance--;
  assert.ok(braceBalance >= 0, "CSS has an unexpected closing brace");
}
assert.equal(braceBalance, 0, "CSS braces must be balanced");

// Core interaction and math-solver regressions.
for (const id of ["mainContent", "mathProblem", "solveMath", "copyMathSolution", "clearMathProblem", "mathHistory", "lessonFilters", "referenceFilters", "codeEditor", "runCode"]) {
  assert.ok(ids.includes(id), "Required UI control is missing: #" + id);
}
assert.ok(js.includes("function solveAdvancedMath("), "Advanced math solver must exist");
assert.ok(js.includes("function solveMathProblem("), "Main math solver must exist");
assert.ok(js.includes("function renderMathSolution("), "Worked solution renderer must exist");
assert.ok(js.includes("function renderMathHistory()"), "Math history renderer must exist");
assert.ok(js.includes('$("#mathProblem").addEventListener("keydown"'), "Math input keyboard shortcut must exist");
assert.ok(js.includes("const equationVariables="), "Equation solver must distinguish school-level from symbolic equations");
assert.ok(js.includes("const variableSource=raw.replace"), "Solve instructions must not be mistaken for equation variables");
assert.ok(js.includes('$$(".responsive-device-button").forEach'), "Responsive controls must use a collection selector");
assert.ok(js.includes('const existing=$$("#codeOutput .output-line");'), "Practice output must collect all console lines");
assert.ok(!js.includes('$(".responsive-device-button").forEach'), "Single-element selector regression detected");
assert.ok(!js.includes('const existing=$("#codeOutput .output-line");'), "Single-element output regression detected");
const scriptTags = [...html.matchAll(/<script\b[^>]*>/gi)].map((match) => match[0]);
assert.ok(scriptTags.length >= 2, "Application scripts must be present");
assert.ok(scriptTags.every((tag) => /\bdefer\b/.test(tag)), "All application scripts must defer execution");
const scriptSources = [...html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)].map((match) => match[1]);
assert.ok(scriptSources.indexOf("./app.js") > scriptSources.indexOf("https://cdn.jsdelivr.net/npm/nerdamer@1.1.13/Extra.js"), "Math libraries must load before app.js");
assert.ok(html.includes('href="#mainContent">Skip to main content</a>'), "Keyboard users must have a skip link");
assert.ok(manifest.name && manifest.start_url && manifest.display, "PWA manifest must include app metadata");

console.log("Scriptly quality checks passed.");
console.log("Checked " + ids.length + " HTML IDs, " + buttons.length + " buttons, " + localReferences.length + " local asset references, PWA shell assets, CSS balance, math-solver controls, and critical interaction regressions.");
