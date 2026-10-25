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
const formatSource = js.slice(js.indexOf("  function fmtMath("), js.indexOf("  function arithmeticMath("));
const formatMath = new Function(formatSource + "; return fmtMath;")();
assert.equal(formatMath(1e-13), "1e-13", "Very small nonzero results must not be rounded to zero");
const arithmeticSource = js.slice(js.indexOf("  function arithmeticMath("), js.indexOf("  function linearMath("));
const arithmeticMath = new Function("fmtMath", arithmeticSource + "; return arithmeticMath;")(formatMath);
const arithmeticSteps = arithmeticMath("2 + 3 * 4");
assert.equal(arithmeticSteps.value, 14);
assert.deepEqual(arithmeticSteps.steps, [" Multiply: 3 × 4 = 12.", " Add: 2 + 12 = 14."], "Arithmetic must show the actual operation order and intermediate values");
const bracketSteps = arithmeticMath("(12 + 8) * 3");
assert.equal(bracketSteps.value, 60);
assert.ok(bracketSteps.steps.some((step) => step.includes("12 + 8 = 20")), "Parentheses must show their intermediate result");
assert.ok(bracketSteps.steps.some((step) => step.includes("20 × 3 = 60")), "Following operations must use the previous intermediate result");
assert.equal(arithmeticMath("2^3 + sqrt(16)").value, 12);
assert.ok(arithmeticMath("2^3 + sqrt(16)").steps.some((step) => step.includes("2 ^ 3 = 8")), "Powers must show their computed value");
assert.ok(arithmeticMath("2^3 + sqrt(16)").steps.some((step) => step.includes("sqrt(16) = 4")), "Functions must show their computed value");
assert.throws(() => arithmeticMath("1 / 0"), /Division by zero/);


 
assert.ok(html.includes('data-math-example="explain the Pythagorean theorem"'), "The solver should expose a one-click theorem example");
assert.ok(html.includes('data-math-example="explain the fundamental theorem of calculus"'), "The solver should expose a calculus theorem example");

const systemsSource = js.slice(js.indexOf("  function parseLinearEquation2("), js.indexOf("  function theoremMath("));
const systems = new Function(systemsSource + "; return { systemMath, matrixMath, inequalityMath };")();
assert.equal(systems.systemMath("system: 2x + y = 5; x - y = 1").answer, "x = 2; y = 1");
assert.equal(systems.systemMath("system: x+y+z=6; 2x-y+z=3; x+2y-z=2").answer, "x = 1; y = 2; z = 3");
assert.equal(systems.systemMath("system: x+y+z+w=10; x-y=0; z-w=2; x+2z=7").title, "4-variable linear system");
assert.throws(() => systems.systemMath("system: x+y=2; 2x+2y=4"), /unique solution/i);
assert.throws(() => systems.systemMath("system: x+y+z=6; 2x-y+z=3"), /same number of equations/i);

assert.equal(systems.matrixMath("determinant 1,2;3,4").answer, "det(A) = -2");
assert.equal(systems.inequalityMath("2x < 10").answer, "x < 5");
assert.equal(systems.inequalityMath("-2x < 10").answer, "x > -5");
assert.throws(() => systems.systemMath("system: x + y = 2; 2x + 2y = 4"), /unique solution/i);
assert.throws(() => systems.matrixMath("determinant 1,2;3"), /same number/i);
assert.equal(systems.matrixMath("matrix add: 1,2;3,4 | 5,6;7,8").answer, "A + B =\n[ 6, 8 ]\n[ 10, 12 ]");
assert.equal(systems.matrixMath("matrix multiply: 1,2,3;4,5,6 | 7,8;9,10;11,12").answer, "A × B =\n[ 58, 64 ]\n[ 139, 154 ]");
assert.match(systems.matrixMath("matrix inverse: 1,2;3,4").answer, /-2/);
assert.equal(systems.matrixMath("matrix transpose: 1,2,3;4,5,6").answer, "Aᵀ =\\n[ 1, 4 ]\\n[ 2, 5 ]\\n[ 3, 6 ]");
assert.equal(systems.matrixMath("matrix trace: 1,2,3;4,5,6;7,8,9").answer, "tr(A) = 15");
assert.throws(() => systems.matrixMath("matrix trace: 1,2;3,4;5,6"), /square matrix/i);

assert.throws(() => systems.matrixMath("matrix inverse: 1,2;2,4"), /singular/i);
assert.throws(() => systems.matrixMath("matrix multiply: 1,2 | 3,4"), /columns.*equal rows/i);


// The theorem assistant should explain supported named results with worked examples.
const theoremSource = js.slice(js.indexOf("  function theoremMath("), js.indexOf("  function solveMathProblem("));
const theoremMath = new Function(theoremSource + "; return theoremMath;")();
const pythagoreanTheorem = theoremMath("explain the Pythagorean theorem");
assert.equal(pythagoreanTheorem.title, "Theorem & formula assistant: Pythagorean theorem");
assert.ok(pythagoreanTheorem.steps.some((step) => step.includes("3² + 4² = 5²")), "Pythagorean explanation should include a checkable example");
assert.match(theoremMath("what is the quadratic formula").answer, /−b.*√/);
assert.ok(theoremMath("explain the triangle angle sum theorem").steps.length >= 3);
assert.ok(theoremMath("explain the power rule of differentiation").answer.includes("n xⁿ⁻¹"));
assert.equal(theoremMath("circle 5"), null, "Ordinary geometry calculations must not be captured as theorem explanations");
assert.equal(theoremMath("explain an unsupported theorem"), null, "Unknown theorem names must not receive fabricated explanations");

assert.ok(theoremMath("explain the binomial theorem").answer.includes("C(n,k)"));
assert.ok(theoremMath("explain the slope formula").steps.some((step) => step.includes("undefined slope")));
assert.ok(theoremMath("explain the distance formula").answer.includes("√"));
assert.ok(theoremMath("explain arithmetic progression").answer.includes("aₙ"));
assert.ok(theoremMath("explain geometric progression").answer.includes("r ≠ 1"));
assert.ok(theoremMath("explain the chain rule").answer.includes("f′(g(x))"));
assert.ok(theoremMath("explain the product rule").answer.includes("u′(x)v(x)"));
assert.ok(theoremMath("explain integration by parts").steps.some((step) => step.includes("eˣ(x − 1)")));


// Explicit geometry prompts must bypass symbolic expression evaluation.
const geometrySource = js.slice(js.indexOf("  function geometryMath("), js.indexOf("  function pythagoreanMath("));
const geometryMath = new Function("fmtMath", geometrySource + "; return geometryMath;")(formatMath);
const circle = geometryMath("circle 5");
assert.equal(circle.title, "Circle geometry");
assert.equal(circle.answer, "Area = 78.5398163397; circumference = 31.4159265359");
assert.ok(js.indexOf('if(mode==="auto"&&/') < js.indexOf("const advanced=solveAdvancedMath(original,mode,s);") && js.includes("return geometryMath(s);"), "Auto-routed geometry prompts must reach geometryMath before symbolic evaluation");

// Restoring a history item must synchronize the visible calculator preview and solver status.
assert.ok(js.includes('setCalculatorPreview(String(item.solution.answer),"RESTORED","valid")'), "Restoring history must update the calculator preview");
assert.ok(js.includes('$("#mathSolverStatus").textContent="RESTORED FROM HISTORY"'), "Restoring history must update the solver status");
assert.ok(js.includes('if(copyButton)copyButton.disabled=false;showToast("Previous calculation restored.")'), "Restored solutions must be available to copy");

// A one-variable equation must not be returned unchanged by symbolic expression evaluation.
assert.ok(js.includes('if(raw.includes("="))return null;'), "Equations must fall through to problem-type detection unless symbolic solving already handled them");
const linearSource = js.slice(js.indexOf("  function linearMath("), js.indexOf("  function gcdMath("));
const linearMath = new Function("fmtMath", linearSource + "; return linearMath;")(formatMath);
const linear = linearMath("2*x+3=11");
assert.equal(linear.answer, "x = 4", "Auto-routed linear equations must return the solved variable");
assert.ok(linear.steps.some((step) => step.includes("2x = 8")), "Linear equation steps must show the simplified equation");
assert.ok(linear.steps.some((step) => step.includes("8 ÷ 2 = 4")), "Linear equation steps must show the actual final division");

const quadraticSource = js.slice(js.indexOf("  function quadraticMath("), js.indexOf("  function statisticsMath("));
const quadraticMath = new Function("fmtMath", quadraticSource + "; return quadraticMath;")(formatMath);
assert.match(quadraticMath("x^2 - 100000000x + 1 = 0").answer, /1e-8/, "Quadratic solver must preserve a small root beside a large root");
const financeSource = js.slice(js.indexOf("  function discountMath("), js.indexOf("  function normalizeMathQuestion("));
const financeMath = new Function("fmtMath", financeSource + "; return { discountMath, gstMath };")(formatMath);
assert.equal(financeMath.discountMath("discount 1000, 20").answer, "Discount = 200; final price = 800");
assert.equal(financeMath.gstMath("gst 1000, 18").answer, "GST amount = 180; total including GST = 1180");
assert.throws(() => financeMath.discountMath("discount 100, 120"), /0% to 100%/);
assert.throws(() => financeMath.gstMath("gst -100, 18"), /non-negative/);

const solverHintStart = html.indexOf('class="solver-hint"');
const solverHintEnd = html.indexOf("</p>", solverHintStart);
const solverHint = html.slice(solverHintStart, solverHintEnd);
assert.ok(solverHint.includes("require an internet connection"), "Solver hint should explain the internet requirement");
assert.equal((solverHint.match(/Arbitrary word problems/g) || []).length, 1, "Solver limitations should not be duplicated");
assert.equal((solverHint.match(/internet connection/g) || []).length, 1, "Internet requirement should appear only once");

assert.ok(html.includes('id="codeExample"'), "Practice lab should expose the starter-example selector");
assert.ok(html.includes('id="copyCodeOutput"'), "Practice lab should expose copy-output control");
assert.ok(js.includes('$("#codeEditor").addEventListener("keydown"'), "Practice editor should support keyboard shortcuts");
assert.ok(js.includes('input.setRangeText("  ",start,end,"end")'), "Tab in the editor should insert indentation instead of changing focus");
assert.ok(js.includes('async function copyCodeOutput()'), "Practice lab should have a copy-output implementation");
for (const example of ["variables", "conditions", "loops", "arrays", "functions", "objects"]) {
  assert.ok(js.includes(example + ":"), "Missing practice starter example: " + example);
}

console.log("Scriptly quality checks passed.");
console.log("Checked " + ids.length + " HTML IDs, " + buttons.length + " buttons, " + localReferences.length + " local asset references, PWA shell assets, CSS balance, math-solver controls, and critical interaction regressions.");

assert.ok(html.includes('id="savedSnippets"'), "Practice lab should allow loading saved snippets");
assert.ok(html.includes('id="saveSnippet"'), "Practice lab should expose a save-snippet control");
assert.ok(js.includes('const SNIPPETS_KEY = "scriptly-practice-snippets-v1"'), "Saved snippets should use a dedicated storage key");
assert.ok(js.includes('function saveCurrentSnippet()'), "Practice lab should save named snippets");
assert.ok(js.includes('function restorePracticeDraft()'), "Practice lab should restore the editor draft");
assert.ok(js.includes('$("#codeEditor").addEventListener("input",persistPracticeDraft)'), "Editor changes should autosave the draft");
assert.ok(js.includes('function loadSavedSnippet(id)'), "Practice lab should load a saved snippet");

assert.ok(html.includes('id="deleteSnippet"'), "Practice Lab should expose a saved-snippet delete control");
assert.ok(html.includes('id="exportCode"'), "Practice Lab should expose a JavaScript export control");
assert.ok(html.includes('id="importCodeButton"') && html.includes('id="importCodeFile"'), "Practice Lab should expose a JavaScript import control");
assert.ok(js.includes('function deleteSavedSnippet()'), "Saved snippets should be deletable");
assert.ok(js.includes('function exportCurrentCode()'), "Current editor code should be exportable");
assert.ok(js.includes('async function importCodeFile(file)'), "JavaScript files should be importable");
assert.ok(js.includes('if(file.size>1024*1024)'), "Imported code files should have a size limit");
