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
for (const id of ["mainContent", "mathProblem", "solveMath", "copyMathSolution", "clearMathProblem", "mathHistory", "calculatorPreview", "calculatorPreviewStatus", "copyCalculatorResult", "lessonFilters", "referenceFilters", "codeEditor", "runCode", "calculatorAngleMode", "calculatorMemoryStatus"]) {
  assert.ok(ids.includes(id), "Required UI control is missing: #" + id);
}
assert.ok(js.includes("function solveAdvancedMath("), "Advanced math solver must exist");
assert.ok(html.includes('class="scientific-calculator"'), "Scientific calculator UI must be present");
assert.ok(html.includes('data-calc-insert="sin("'), "Scientific trig keys must be present");
assert.ok(js.includes("function insertCalculatorText("), "Calculator keys must insert at the cursor");
assert.ok(js.includes('calculatorAngleMode==="DEG"'), "Angle mode must affect trig calculations");
assert.ok(js.includes("function handleCalculatorAction("), "Calculator memory and editing actions must work");
assert.ok(js.includes("function solveMathProblem("), "Main math solver must exist");
assert.ok(js.includes("function renderMathSolution("), "Worked solution renderer must exist");
assert.ok(js.includes("function updateCalculatorPreview()"), "Scientific calculator must provide a live numeric preview");
assert.ok(js.includes("function evaluateCalculatorExpression("), "Calculator must have an offline-safe numeric expression evaluator");
assert.ok(js.includes("function evaluateCalculatorValue("), "Calculator must use a shared numeric evaluation path");
assert.ok(!js.includes("Numeric preview needs the maths library"), "Numeric preview must not fail solely because the optional CDN library is unavailable");
assert.ok(js.includes("function copyCalculatorResult()"), "Calculator result must be copyable");
assert.ok(js.includes("function renderMathHistory()"), "Math history renderer must exist");
assert.ok(js.includes('$("#mathProblem").addEventListener("keydown"'), "Math input keyboard shortcut must exist");
assert.ok(js.includes("const equationVariables="), "Equation solver must distinguish school-level from symbolic equations");
assert.ok(js.includes("const variableSource=raw.replace"), "Solve instructions must not be mistaken for equation variables");
assert.ok(js.includes('$$(".responsive-device-button").forEach'), "Responsive controls must use a collection selector");
assert.ok(js.includes('const existing=$$("#codeOutput .output-line");'), "Practice output must collect all console lines");
assert.ok(!js.includes('\n    $(".responsive-device-button").forEach'), "Single-element selector regression detected");
assert.ok(!js.includes('const existing=$("#codeOutput .output-line");'), "Single-element output regression detected");
const scriptTags = [...html.matchAll(/<script\b[^>]*>/gi)].map((match) => match[0]);
assert.ok(scriptTags.length >= 2, "Application scripts must be present");
assert.ok(scriptTags.every((tag) => /\bdefer\b/.test(tag)), "All application scripts must defer execution");
const scriptSources = [...html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)].map((match) => match[1]);
assert.ok(scriptSources.indexOf("./app.js") > scriptSources.indexOf("./vendor/nerdamer/Extra.js"), "Locally bundled math libraries must load before app.js");
assert.ok(html.includes('href="#mainContent">Skip to main content</a>'), "Keyboard users must have a skip link");
assert.ok(manifest.name && manifest.start_url && manifest.display, "PWA manifest must include app metadata");
assert.ok(!html.includes("cdnjs.cloudflare.com/ajax/libs/mathjs"), "Maths libraries must not depend on a third-party CDN");
assert.ok(!html.includes("cdn.jsdelivr.net/npm/nerdamer"), "Nerdamer must be self-hosted to avoid browser tracking-prevention warnings");
for (const path of ["vendor/nerdamer/nerdamer.core.js", "vendor/nerdamer/Algebra.js", "vendor/nerdamer/Calculus.js", "vendor/nerdamer/Solve.js", "vendor/nerdamer/Extra.js", "vendor/nerdamer/LICENSE.txt"]) {
  assert.ok(existsSync(resolve(root, path)), "Vendored maths dependency is missing: " + path);
}
assert.ok(!js.includes("event.preventDefault();\n    deferredInstallPrompt = event;"), "Install UI should not suppress the browser's native install prompt");

// Execute the actual offline-safe calculator parser against numerical edge cases.
const evaluatorSource = js.slice(js.indexOf("  function evaluateCalculatorExpression(source){"), js.indexOf("  function evaluateCalculatorValue(expression){"));
assert.ok(evaluatorSource.includes("function evaluateCalculatorExpression"), "Numeric evaluator source must be extractable for tests");
const getEvaluator = new Function("calculatorAngleMode", "calculatorAns", evaluatorSource + "; return evaluateCalculatorExpression;");
const evaluateDeg = getEvaluator("DEG", 42);
const closeTo = (actual, expected, epsilon = 1e-10) => assert.ok(Math.abs(actual - expected) <= epsilon, actual + " should be close to " + expected);
closeTo(evaluateDeg("2 + 3 * 4"), 14);
closeTo(evaluateDeg("-2^2"), -4);
closeTo(evaluateDeg("2^3^2"), 512);
closeTo(evaluateDeg("sin(30)"), 0.5);
closeTo(evaluateDeg("sqrt(81)"), 9);
closeTo(evaluateDeg("15%"), 0.15);
closeTo(evaluateDeg("15% of 240"), 36);
closeTo(evaluateDeg("200 * 15%"), 30);
closeTo(evaluateDeg("Ans + 1"), 43);
closeTo(evaluateDeg("tau / 2"), Math.PI);
assert.throws(() => evaluateDeg("1 / 0"), /Division by zero/);
assert.throws(() => evaluateDeg("sqrt(-1)"), /finite real result|real numeric result/);
assert.throws(() => evaluateDeg("tan(90)"), /undefined at 90/);
assert.throws(() => evaluateDeg("2 + alert(1)"), /Unknown function/);
const evaluateRad = getEvaluator("RAD", 0);
closeTo(evaluateRad("sin(pi / 2)"), 1);
assert.ok(js.includes("function fmtMath("), "Numeric formatting helper must exist");
assert.ok(js.includes("q=-0.5*"), "Quadratic solver should use a stable root calculation");
assert.ok(js.includes("function discountMath(") && js.includes("function gstMath("), "Everyday discount and GST calculators must exist");
assert.ok(html.includes('data-math-example="discount 1000, 20"') && html.includes('data-math-example="gst 1000, 18"'), "Everyday calculator examples must be discoverable");

console.log("Scriptly quality checks passed.");
console.log("Checked " + ids.length + " HTML IDs, " + buttons.length + " buttons, " + localReferences.length + " local asset references, PWA shell assets, CSS balance, math-solver controls, and critical interaction regressions.");
