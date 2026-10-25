(() => {
  "use strict";
  const lessons = [
    {id:1,unit:"Start here",title:"Welcome to JavaScript",icon:"✦",tone:"violet",duration:5,level:"Beginner",description:"What JavaScript does, where it runs, and how this course works.",intro:"JavaScript is a language that tells a computer what to do. It can make websites interactive, build apps, process data, and much more.",sections:[["What is JavaScript?","Think of a website like a house. HTML is the structure, CSS is the decoration, and JavaScript is the electricity and moving parts. It makes buttons respond, menus open, and content change."],["Where does it run?","JavaScript runs in web browsers and in other environments such as Node.js. You do not need to install anything to try the examples in this website."],["Your learning rule","Read a little, run the example, then change one thing. You learn programming by experimenting, not by memorising every word."]],code:'console.log("Hello, JavaScript!");',output:"Hello, JavaScript!",quiz:{q:"What is JavaScript mainly used for on a website?",options:["To add behaviour and interactivity","To physically build the computer","Only to choose font colours"],answer:0,why:"JavaScript adds behaviour: it can respond to clicks, calculate values, and update a page."}},
    {id:2,unit:"First steps",title:"Your first line of code",icon:"⌘",tone:"mint",duration:8,level:"Beginner",description:"Use console.log, comments, and learn what errors are telling you.",intro:"A program is a set of instructions. Start by asking JavaScript to display a message.",sections:[["Print a message","The function console.log() shows a value in the console. The text goes between quotation marks."],["Comments are notes","Write // before a comment. JavaScript ignores that note and does not run it."],["Errors are clues","A spelling mistake or missing bracket can cause an error. Read the message, check the line, and fix one thing at a time."]],code:'// My first JavaScript program\nconsole.log("I am learning!");\nconsole.log(10 + 5);',output:"I am learning!\n15",quiz:{q:"What does console.log(7) do?",options:["Saves 7 as a variable","Displays the value 7 in the console","Creates a website heading"],answer:1,why:"console.log displays a value so you can inspect what your code is doing."}},
    {id:3,unit:"Variables",title:"Store information",icon:"▣",tone:"violet",duration:9,level:"Beginner",description:"Learn let and const with easy everyday examples.",intro:"A variable is a named place to keep information so you can use it later.",sections:[["Use const by default","const keeps the variable binding from being reassigned. Use it when you do not plan to give the variable a different value."],["Use let when it changes","let is useful when you expect to assign a new value later, such as a score that increases."],["Choose clear names","Names like userName and totalPrice explain what a value means. JavaScript is case-sensitive: score and Score are different names."]],code:'const userName = "Mina";\nlet score = 0;\nscore = score + 1;\nconsole.log(userName);\nconsole.log(score);',output:"Mina\n1",quiz:{q:"Which keyword is best when a variable will be reassigned?",options:["const","let","print"],answer:1,why:"Use let when you plan to assign a new value to the variable."}},
    {id:4,unit:"Data types",title:"Different kinds of values",icon:"◈",tone:"blue",duration:10,level:"Beginner",description:"Understand strings, numbers, booleans, null, and undefined.",intro:"A value has a type. Knowing the type helps you predict what JavaScript will do with it.",sections:[["Strings and numbers","Text is usually written as a string inside quotes, such as \"hello\". Numbers like 42 and 3.5 do not need quotes."],["True or false","A boolean is either true or false. It is useful for questions such as whether someone is logged in."],["Missing values","undefined often means a value has not been assigned. null is commonly used to represent an intentionally empty value."]],code:'const city = "Delhi";\nconst temperature = 28;\nconst isSunny = true;\nconsole.log(typeof city);\nconsole.log(typeof temperature);\nconsole.log(isSunny);',output:"string\nnumber\ntrue",quiz:{q:'What type is the value "42"?',options:["number","string","boolean"],answer:1,why:'Quotes make "42" text, so it is a string. The unquoted value 42 is a number.'}},
    {id:5,unit:"Operators",title:"Make values work together",icon:"＋",tone:"orange",duration:9,level:"Beginner",description:"Calculate, compare, and combine values with operators.",intro:"Operators are symbols that tell JavaScript to do something with values.",sections:[["Math operators","Use + to add, - to subtract, * to multiply, and / to divide."],["Compare values","Use === to check strict equality and !== to check inequality. Comparisons produce true or false."],["Join text","The + operator can join strings. If one side is text, JavaScript may convert the other side to text too."]],code:'console.log(8 + 2);\nconsole.log(8 * 2);\nconsole.log(5 === 5);\nconsole.log("Hi, " + "there!");',output:"10\n16\ntrue\nHi, there!",quiz:{q:"What is the result of 10 > 3?",options:["false","true","13"],answer:1,why:"The greater-than operator checks whether the left value is larger. Ten is greater than three."}},
    {id:6,unit:"Decisions",title:"Make decisions with if",icon:"⑂",tone:"mint",duration:10,level:"Beginner",description:"Help your program choose what to do based on a condition.",intro:"An if statement lets your program choose between different paths, like a fork in a road.",sections:[["The if statement","JavaScript checks the condition in parentheses. If it is true, the code inside the braces runs."],["Add else","Use else for what should happen when the condition is false. Use else if to check another condition."],["Keep conditions readable","A condition is an expression that becomes true or false, such as age >= 18."]],code:'const age = 20;\nif (age >= 18) {\n  console.log("You are an adult.");\n} else {\n  console.log("You are under 18.");\n}',output:"You are an adult.",quiz:{q:"When does the code inside an if block run?",options:["Every time, no matter what","When its condition is true","Only when the page loads twice"],answer:1,why:"The if block runs only when its condition evaluates to true."}},
    {id:7,unit:"Loops",title:"Repeat without repeating yourself",icon:"⟳",tone:"violet",duration:11,level:"Beginner",description:"Use for and while loops to repeat instructions.",intro:"Loops let you repeat instructions. Instead of writing the same line ten times, you can ask JavaScript to repeat it.",sections:[["A for loop","A for loop usually has a starting point, a condition, and an update. The loop stops when its condition becomes false."],["Count carefully","If you start at zero and use i < 3, the loop runs with 0, 1, and 2. That is three times."],["Avoid endless loops","Make sure a while-loop condition can eventually become false, or it may keep running."]],code:'for (let i = 1; i <= 3; i++) {\n  console.log("Round " + i);\n}',output:"Round 1\nRound 2\nRound 3",quiz:{q:"How many times does for (let i = 0; i < 4; i++) run?",options:["3 times","4 times","5 times"],answer:1,why:"The values are 0, 1, 2, and 3: four runs total."}},
    {id:8,unit:"Functions",title:"Create reusable instructions",icon:"ƒ",tone:"pink",duration:12,level:"Beginner",description:"Write functions, pass arguments, and return results.",intro:"A function is a reusable set of instructions. Write it once, then call it whenever you need it.",sections:[["Declare a function","Use function followed by a name, parentheses, and a block of code."],["Parameters and arguments","Parameters are the named inputs in the function definition. Arguments are the actual values you pass when calling it."],["Return a result","return sends a value back to the caller. console.log displays something; return makes a result available for later code."]],code:'function greet(name) {\n  return "Hello, " + name + "!";\n}\nconst message = greet("Sam");\nconsole.log(message);',output:"Hello, Sam!",quiz:{q:"What does return do inside a function?",options:["Ends the browser","Sends a value back to the caller","Automatically makes a button"],answer:1,why:"return gives a result back to the code that called the function."}},
    {id:9,unit:"Arrays",title:"Keep lists of things",icon:"▤",tone:"blue",duration:12,level:"Beginner",description:"Create arrays and access, add, and remove items.",intro:"An array stores an ordered list of values in one variable.",sections:[["Create an array","Put values inside square brackets and separate them with commas."],["Indexes start at zero","The first item is at index 0, the second at index 1, and so on. Use array.length to find how many items there are."],["Useful methods","push adds an item to the end. pop removes the last item. These methods change the array."]],code:'const fruits = ["apple", "mango", "pear"];\nconsole.log(fruits[0]);\nfruits.push("grape");\nconsole.log(fruits.length);',output:"apple\n4",quiz:{q:"What is the index of the first array item?",options:["0","1","-1"],answer:0,why:"JavaScript arrays use zero-based indexing, so the first item is at index 0."}},
    {id:10,unit:"Objects",title:"Describe things with objects",icon:"◇",tone:"orange",duration:13,level:"Beginner",description:"Group related information into named properties.",intro:"An object groups related information into properties, like a profile with a name, age, and city.",sections:[["Create an object","Use curly braces and write key-value pairs separated by commas."],["Read a property","Use dot notation, such as person.name, to read a property."],["Update information","You can assign a new value to a property, such as person.city = \"Pune\"."]],code:'const person = {\n  name: "Asha",\n  city: "Pune"\n};\nconsole.log(person.name);\nconsole.log(person.city);',output:"Asha\nPune",quiz:{q:"How do you read the name property from person?",options:["person->name","person.name","person(name)"],answer:1,why:"Dot notation, person.name, reads the name property from the object."}},
    {id:11,unit:"Built-in tools",title:"Work with strings and numbers",icon:"Aa",tone:"mint",duration:12,level:"Beginner",description:"Use common methods to transform text and numbers.",intro:"JavaScript gives you built-in tools for everyday jobs such as changing text case or rounding a number.",sections:[["String methods","Use .toUpperCase() to make text uppercase and .includes() to check whether text contains another string."],["Number helpers","Math.round() rounds to the nearest whole number. Math.max() returns the largest of the values you pass."],["Methods do not all behave alike","Some methods return a new value; others change the original data. Check the method's documentation when unsure."]],code:'const message = "hello world";\nconsole.log(message.toUpperCase());\nconsole.log(message.includes("world"));\nconsole.log(Math.round(4.7));',output:"HELLO WORLD\ntrue\n5",quiz:{q:"What does 'hello'.toUpperCase() return?",options:["hello","HELLO","Hello"],answer:1,why:"toUpperCase returns a new string with its letters converted to uppercase."}},
    {id:12,unit:"Debugging",title:"Find and fix mistakes",icon:"⌕",tone:"pink",duration:10,level:"Beginner",description:"Read error messages and build a calm debugging habit.",intro:"Every programmer makes mistakes. Debugging is the process of finding out why something does not work and fixing it.",sections:[["Read the first useful clue","The error type and message often tell you what went wrong. The line number helps you find where to look."],["Check the basics","Look for misspelled names, unmatched brackets, missing quotes, and values that are not what you expected."],["Use small tests","Try console.log to inspect a variable. Change one thing at a time so you know what fixed the issue."]],code:'const total = 12;\nconst tax = 3;\nconsole.log(total + tax);\n// Expected total: 15',output:"15",quiz:{q:"What is a good first step when you see an error?",options:["Delete the whole program","Read the error message and check the indicated line","Assume the computer is broken"],answer:1,why:"Error messages provide clues. Start by reading them and checking the relevant line."}},
    {id:13,unit:"The browser",title:"Understand the page (DOM)",icon:"▧",tone:"blue",duration:14,level:"Beginner",description:"Learn how JavaScript can find and change page elements.",intro:"The DOM is the browser's structured representation of a web page. JavaScript can use it to find elements and change their content.",sections:[["Find an element","document.querySelector() finds the first element that matches a CSS selector."],["Change text","The textContent property sets or reads an element's text."],["Keep the parts separate","HTML gives the page structure, CSS controls its appearance, and JavaScript can update content and behaviour."]],code:'// In a browser page, you could write:\nconst heading = document.querySelector("h1");\n// heading.textContent = "Hello!";\nconsole.log("The DOM connects JS to the page.");',output:"The DOM connects JS to the page.",quiz:{q:"What does document.querySelector('h1') do?",options:["Finds the first h1 element","Creates a new JavaScript file","Changes every colour on the page"],answer:0,why:"querySelector finds the first element matching the supplied CSS selector."}},
    {id:14,unit:"Interaction",title:"Respond to events",icon:"↯",tone:"orange",duration:14,level:"Beginner",description:"Use event listeners to respond to clicks and input.",intro:"An event is something that happens, such as a click, a key press, or a form submission.",sections:[["Listen for a click","addEventListener('click', handler) tells the browser to run your handler when an element is clicked."],["Forms and input","Forms let people submit information. Read input values and validate them before using them."],["Keep your UI accessible","Use real buttons for actions and labels for form fields so people can use your page with different devices."]],code:'// Typical browser code:\nbutton.addEventListener("click", () => {\n  console.log("Button clicked!");\n});',output:"Example for a real browser button",quiz:{q:"What does addEventListener help your code do?",options:["Listen and respond to events","Install packages automatically","Save files to GitHub"],answer:0,why:"Event listeners run a function when an event such as a click happens."}},
    {id:15,unit:"Going deeper",title:"Scope, closures, and this",icon:"◎",tone:"violet",duration:16,level:"Intermediate",description:"Understand where variables exist and how functions remember data.",intro:"Once the basics feel familiar, these concepts explain many behaviours in real JavaScript code.",sections:[["Scope","Scope describes where a variable can be accessed. Variables declared inside a function are generally local to that function."],["Closures","A closure happens when a function remembers variables from the surrounding scope, even after that outer function has finished."],["The this keyword","The value of this depends on how a function is called. Arrow functions use this from their surrounding scope instead of creating their own this."]],code:'function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = makeCounter();\nconsole.log(next());\nconsole.log(next());',output:"1\n2",quiz:{q:"What does the returned function in this example remember?",options:["The count variable from makeCounter","Every variable on the internet","Only the last console message"],answer:0,why:"The closure keeps access to count from the surrounding makeCounter call."}},
    {id:16,unit:"Asynchronous JavaScript",title:"Promises and async/await",icon:"◷",tone:"mint",duration:17,level:"Intermediate",description:"Understand waiting, promises, and asynchronous work.",intro:"Some work takes time, such as requesting data from a server. JavaScript can keep the page responsive while that work happens.",sections:[["Promises","A Promise represents a result that may be available now, later, or fail. It can be pending, fulfilled, or rejected."],["async and await","An async function returns a promise. await pauses that function until a promise settles, without blocking the whole browser."],["Handle errors","Use try/catch around awaited work when you need to respond to failures."]],code:'async function showMessage() {\n  const message = await Promise.resolve("Ready!");\n  console.log(message);\n}\nshowMessage();',output:"Ready!",quiz:{q:"What does await do inside an async function?",options:["Waits for a promise to settle before continuing that function","Stops the entire internet","Turns a string into a number"],answer:0,why:"await pauses the async function until the promise settles, then gives you its result or throws its error."}},
    {id:17,unit:"Modern JavaScript",title:"Write cleaner modern code",icon:"✧",tone:"pink",duration:15,level:"Intermediate",description:"Use destructuring, spread syntax, modules, and optional chaining.",intro:"Modern JavaScript includes concise syntax that can make everyday code easier to read.",sections:[["Destructuring","Destructuring pulls values from arrays or properties from objects into variables."],["Spread syntax","The ... syntax can copy or combine arrays and objects. It is shallow, so nested objects are not deeply copied."],["Optional chaining","The ?. operator lets you safely access a property when an earlier value might be null or undefined."]],code:'const user = { name: "Lee", city: "Jaipur" };\nconst { name, city } = user;\nconst tags = ["learn", "build"];\nconsole.log(name, city);\nconsole.log([...tags, "share"]);',output:"Lee Jaipur\n[ 'learn', 'build', 'share' ]",quiz:{q:"What is optional chaining useful for?",options:["Accessing a property safely when a value may be missing","Making every variable constant","Automatically fixing syntax errors"],answer:0,why:"Optional chaining avoids an error when a value before ?. is null or undefined."}},
    {id:18,unit:"Build things",title:"Build your first mini projects",icon:"⚒",tone:"orange",duration:20,level:"Project",description:"Combine your skills into small, useful projects.",intro:"Projects turn separate concepts into a skill you can use. Start small and add features when the basics work.",sections:[["Project 1: quiz","Store questions in an array of objects, show one question, and check the selected answer."],["Project 2: text helper","Read text from an input, count its characters, and show a transformed version."],["Project 3: notes","Use a form to add notes and localStorage to keep them on this device. Never store sensitive information in localStorage."]],code:'const tasks = ["Learn variables", "Practise functions", "Build a project"];\ntasks.forEach((task, index) => {\n  console.log((index + 1) + ". " + task);\n});',output:"1. Learn variables\n2. Practise functions\n3. Build a project",quiz:{q:"What is a good way to learn from a small project?",options:["Copy it and never change it","Build a working small version, then add one feature at a time","Wait until you memorise all JavaScript"],answer:1,why:"A small working project gives you feedback. Add one feature at a time so each step is understandable."}},
    {"id":19,"unit":"Math for JavaScript","title":"Numbers, arithmetic & order of operations","icon":"🧮","tone":"mint","duration":20,"level":"Math foundation","description":"Use +, −, ×, ÷, remainder, and parentheses without confusing the calculator goblin.","intro":"You do not need to become a mathematician before learning JavaScript. Start with ordinary arithmetic, learn how JavaScript represents it, and practise reading expressions carefully.","sections":[["The four horsemen of arithmetic","JavaScript uses + for addition, - for subtraction, * for multiplication, and / for division. The multiplication symbol is * because x is already a useful variable name."],["Parentheses control the queue","JavaScript follows operator precedence: multiplication and division happen before addition and subtraction. Use parentheses when you want to make the intended order obvious."],["Remainder is what is left over","The % operator gives the remainder after division. It is useful for checking even and odd numbers: n % 2 === 0 means n is even."],["Turn a word-number into a number","The text \"12\" is not the same kind of value as the number 12. Convert form input with Number() before doing arithmetic, and validate it."]],"code":"console.log(2 + 3 * 4);\\nconsole.log((2 + 3) * 4);\\nconsole.log(17 % 5);\\nconsole.log(Number(\"12\") + 3);","output":"14\n20\n2\n15","quiz":{"q":"What is 2 + 3 * 4 in JavaScript?","options":["20, left to right no matter what","14, multiplication happens first","24, because JavaScript is haunted"],"answer":1,"why":"Multiplication has higher precedence than addition. Parentheses can make a different order explicit."}},
    {"id":20,"unit":"Math for JavaScript","title":"Negative numbers & the number line","icon":"↔","tone":"violet","duration":18,"level":"Math foundation","description":"Understand negatives, distance from zero, and why -5 is smaller than -2.","intro":"Imagine a lift: floors above ground are positive, basement floors are negative. JavaScript can calculate with both; the tricky part is remembering their order.","sections":[["Numbers left and right","On a number line, values increase as you move right. So -2 is greater than -5 because -2 sits farther to the right."],["Absolute value is distance","Math.abs(-7) gives 7: the distance from zero, ignoring direction. This is useful for differences and measuring how far apart values are."],["Signs in multiplication","A positive times a negative gives a negative; two negatives multiplied give a positive. Try examples in the console rather than trusting a memory spell."]],"code":"console.log(-2 > -5);\\nconsole.log(Math.abs(-7));\\nconsole.log(-3 * 4);\\nconsole.log(-3 * -4);","output":"true\n7\n-12\n12","quiz":{"q":"Which number is greater?","options":["-8","-3","They are equal"],"answer":1,"why":"-3 is farther right on the number line than -8, so it is greater."}},
    {"id":21,"unit":"Math for JavaScript","title":"Fractions, decimals & percentages","icon":"🥧","tone":"orange","duration":25,"level":"Math foundation","description":"Teach a pie chart goblin to calculate discounts, tax, tips, and percentage change.","intro":"Fractions, decimals, and percentages are three outfits worn by the same quantity. 1/2 = 0.5 = 50%. This matters constantly in prices, progress bars, statistics, and UI layouts.","sections":[["A fraction means parts of a whole","3/4 means three parts when the whole is split into four equal parts. In decimal form, 3 / 4 is 0.75."],["Percent means out of one hundred","To turn a percentage into a multiplier, divide by 100. A 15% discount is price * 0.15; the final price is price * (1 - 0.15)."],["Percentage change","Change percentage = (new value - old value) / old value * 100. If the old value is zero, that formula divides by zero, so handle that case separately."],["JavaScript money warning","Binary floating-point cannot represent every decimal fraction exactly. For real money calculations, consider storing integer minor units such as paise or cents, then format the result."]],"code":"const price = 800;\\nconst discount = 15 / 100;\\nconsole.log(price * discount);\\nconsole.log(price * (1 - discount));\\nconsole.log(3 / 4 * 100);","output":"120\n680\n75","quiz":{"q":"What is the final price after a 20% discount on 500?","options":["100","400","480"],"answer":1,"why":"The discount is 500 × 0.20 = 100. Final price = 500 − 100 = 400."}},
    {"id":22,"unit":"Math for JavaScript","title":"Ratios, proportions & unit conversion","icon":"⚖️","tone":"mint","duration":22,"level":"Math foundation","description":"Scale recipes, convert units, and stop mixing up 'per one' with 'per hundred'.","intro":"Ratios compare quantities. Proportions say two ratios are equal. This is the maths behind scaling recipes, responsive layouts, rates, and many everyday calculations.","sections":[["Ratios compare quantities","A ratio of 2 to 3 means for every two of one thing there are three of another. In code, store the quantities explicitly so you know what each number represents."],["Scale using a multiplier","If a recipe serves 4 and you need 10 servings, the scale factor is 10 / 4 = 2.5. Multiply every ingredient by 2.5."],["Rates and unit conversions","Speed is distance divided by time. If a value is per hour and you need per minute, divide by 60. Always write down the starting and target units."]],"code":"const originalServings = 4;\\nconst wantedServings = 10;\\nconst scale = wantedServings / originalServings;\\nconsole.log(scale);\\nconsole.log(200 * scale); // grams of flour","output":"2.5\n500","quiz":{"q":"A recipe serves 4. To make 8 servings, what multiplier do you use?","options":["0.5","2","4"],"answer":1,"why":"8 divided by 4 is 2, so double every ingredient."}},
    {"id":23,"unit":"Math for JavaScript","title":"Algebra: letters are just numbers wearing disguises","icon":"x²","tone":"violet","duration":25,"level":"Math foundation","description":"Understand variables, expressions, equations, and rearranging simple formulas.","intro":"In algebra, x is a placeholder for a value you may not know yet. In JavaScript, variables store values too—but a JavaScript variable assignment is not the same thing as a mathematical equation.","sections":[["Expressions and equations","3 * x + 2 is an expression. 3 * x + 2 = 11 is an equation asking which x makes both sides equal."],["Solve the equation","If 3x + 2 = 11, subtract 2 from both sides to get 3x = 9, then divide by 3: x = 3. Think of both sides as a balanced seesaw."],["Algebra helps you read code","A formula like total = price * quantity is algebra turned into instructions. You can isolate a missing value by rearranging the formula."],["Important difference: = versus ===","In JavaScript, x = 3 assigns 3 to x. x === 3 checks whether x currently equals 3. JavaScript does not use = to state a symbolic equation."]],"code":"const x = 3;\\nconsole.log(3 * x + 2);\\nconst price = 12;\\nconst quantity = 4;\\nconsole.log(price * quantity);","output":"11\n48","quiz":{"q":"If 3x + 2 = 11, what is x?","options":["2","3","9"],"answer":1,"why":"Subtract 2 to get 3x = 9, then divide by 3 to get x = 3."}},
    {"id":24,"unit":"Math for JavaScript","title":"Functions, inputs & graphs","icon":"📈","tone":"mint","duration":25,"level":"Math foundation","description":"See a mathematical function as a machine and connect it to JavaScript functions.","intro":"A mathematical function takes an input and produces an output according to a rule. JavaScript functions often do the same thing, making this one of the most useful bridges between maths and coding.","sections":[["Input goes in, output comes out","For f(x) = 2x + 1, input 3 gives output 7. The function rule is the machine; x is the input."],["Translate the rule into JavaScript","Write a function that accepts x and returns 2 * x + 1. Call it with different values to explore the pattern."],["Graphs show the pattern","A graph plots inputs horizontally and outputs vertically. You do not need advanced graphing to code, but coordinates and patterns help with animations, charts, and game movement."]],"code":"function f(x) {\\n  return 2 * x + 1;\\n}\\nconsole.log(f(0));\\nconsole.log(f(3));\\nconsole.log(f(-2));","output":"1\n7\n-3","quiz":{"q":"For f(x) = 2x + 1, what is f(4)?","options":["8","9","10"],"answer":1,"why":"Replace x with 4: 2 × 4 + 1 = 9."}},
    {"id":25,"unit":"Math for JavaScript","title":"Powers, roots & scientific notation","icon":"🔬","tone":"orange","duration":22,"level":"Useful foundation","description":"Handle squares, square roots, huge values, tiny values, and Math methods.","intro":"Powers are repeated multiplication. Roots reverse certain powers. Scientific notation keeps very large or tiny numbers readable—useful for graphics, scientific data, and numerical computing.","sections":[["Powers and roots","2 to the power of 3 is 2 × 2 × 2 = 8. JavaScript uses ** for exponentiation and Math.sqrt() for a square root."],["Scientific notation","1e6 means 1 × 10⁶, or one million. 1e-3 means 0.001. This is a compact way to write scale."],["Use Math instead of reinventing it","Math.round rounds, Math.floor rounds down, Math.ceil rounds up, and Math.max finds the largest supplied value. Learn the behaviour of each one."]],"code":"console.log(2 ** 3);\\nconsole.log(Math.sqrt(81));\\nconsole.log(1e6);\\nconsole.log(Math.ceil(4.2));\\nconsole.log(Math.max(4, 9, 2));","output":"8\n9\n1000000\n5\n9","quiz":{"q":"Which JavaScript expression calculates 5 squared?","options":["5 ^ 2","5 ** 2","5 * * 2"],"answer":1,"why":"The ** operator performs exponentiation. In JavaScript, ^ is bitwise XOR, not a power operator."}},
    {"id":26,"unit":"Math for JavaScript","title":"Logic, sets & truth tables","icon":"🧩","tone":"violet","duration":25,"level":"Useful foundation","description":"Make boolean logic less spooky: AND, OR, NOT, membership, and De Morgan's laws.","intro":"Programming conditions are a practical form of logic. You do not need formal mathematical logic to start, but understanding true/false combinations makes complex conditions much easier to debug.","sections":[["AND, OR, NOT","&& means both conditions must pass; || means at least one can pass; ! flips a boolean. These are the everyday tools behind validation and permissions."],["Truth tables","List all possible true/false inputs and the output. For A && B, the result is true only when both A and B are true."],["Sets and membership","A set is a collection of distinct values. JavaScript has Set, useful for unique items and checking membership with has()."],["De Morgan's laws","!(A && B) is equivalent to (!A || !B). Translating a complicated condition into its opposite can simplify validation."]],"code":"const age = 20;\\nconst hasTicket = true;\\nconsole.log(age >= 18 && hasTicket);\\nconsole.log(!(age < 18 || !hasTicket));\\nconst tags = new Set([\"math\", \"code\", \"math\"]);\\nconsole.log(tags.size, tags.has(\"code\"));","output":"true\ntrue\n2 true","quiz":{"q":"When is A && B true?","options":["When either A or B is true","Only when both A and B are true","Only when both are false"],"answer":1,"why":"AND requires both conditions to be true."}},
    {"id":27,"unit":"Math for JavaScript","title":"Binary, hexadecimal & bitwise maths","icon":"01","tone":"mint","duration":25,"level":"Specialist foundation","description":"Meet base 2, base 16, binary masks, and the bits hiding under ordinary numbers.","intro":"Most JavaScript learners can build websites without bitwise operators. But binary and hexadecimal help explain computer representation, colours, low-level data, and why bitwise operators behave differently from normal arithmetic.","sections":[["Number bases","Decimal uses digits 0–9. Binary uses 0 and 1. Hexadecimal uses 0–9 and A–F. The value 10 in decimal is 1010 in binary and A in hexadecimal."],["Convert and inspect","Number.toString(2) shows a number in binary. parseInt(text, 2) reads a binary string as a number."],["Bitwise operators","& compares bits using AND, | uses OR, and ^ uses XOR. These are not the same as && and ||, which operate on truthy/falsy values."],["When to learn this","Useful for flags, bit masks, colour formats, protocols, and specialist performance work. It is not a prerequisite for ordinary web development."]],"code":"console.log((10).toString(2));\\nconsole.log(parseInt(\"1010\", 2));\\nconsole.log(5 & 3);\\nconsole.log(5 | 3);","output":"1010\n10\n1\n7","quiz":{"q":"What does (10).toString(2) do?","options":["Converts 10 to binary text","Squares 10","Converts 10 to a string containing two zeroes"],"answer":0,"why":"The radix argument 2 asks JavaScript to represent the number in base 2."}},
    {"id":28,"unit":"Math for JavaScript","title":"Statistics & probability","icon":"🎲","tone":"orange","duration":25,"level":"Useful for data","description":"Calculate averages, median, spread, and simple probabilities without trusting a suspicious dice goblin.","intro":"Statistics helps you summarise data and understand uncertainty. It is especially useful for dashboards, analytics, simulations, experiments, and machine-learning-adjacent work.","sections":[["Mean and median","The mean is the sum divided by the count. The median is the middle value after sorting. One extreme value can pull the mean around more than the median."],["Range and spread","Range is maximum minus minimum. Variance and standard deviation describe spread in more detail; learn those when analysing real datasets."],["Probability","For equally likely outcomes, probability = favourable outcomes / total outcomes. A fair six-sided die has a 1/6 chance of rolling a 6."],["Be careful with samples","Small samples can be misleading. Randomness can produce streaks; ten coin flips are not guaranteed to contain exactly five heads."]],"code":"const scores = [60, 70, 80, 90, 100];\\nconst mean = scores.reduce((sum, n) => sum + n, 0) / scores.length;\\nconst range = Math.max(...scores) - Math.min(...scores);\\nconsole.log(mean);\\nconsole.log(range);\\nconsole.log(1 / 6);","output":"80\n40\n0.16666666666666666","quiz":{"q":"A fair six-sided die is rolled. What is the probability of rolling a 6?","options":["1/2","1/6","6/6"],"answer":1,"why":"One face is a 6 out of six equally likely faces, so the probability is 1/6."}},
    {"id":29,"unit":"Math for JavaScript","title":"Coordinates, geometry & trigonometry","icon":"📐","tone":"violet","duration":30,"level":"Useful for visuals","description":"Move sprites, draw circles, calculate distance, and understand sine and cosine.","intro":"For ordinary websites, you can often avoid advanced geometry. But coordinates and trigonometry are powerful for games, canvas, animation, maps, and visualisations.","sections":[["Coordinates locate a point","A point (x, y) gives horizontal and vertical position. In many browser canvases, x increases to the right and y increases downward."],["Distance between two points","Pythagoras gives the distance: square root of ((x2 - x1)² + (y2 - y1)²). JavaScript can calculate this with Math.sqrt or Math.hypot."],["Angles and circles","Sine and cosine help turn an angle into horizontal and vertical movement. JavaScript's Math.sin() and Math.cos() expect radians, not degrees."],["Convert degrees to radians","Radians = degrees × Math.PI / 180. This conversion is a classic source of bugs."]],"code":"const dx = 3 - 0;\\nconst dy = 4 - 0;\\nconsole.log(Math.hypot(dx, dy));\\nconst radians = 90 * Math.PI / 180;\\nconsole.log(Math.round(Math.sin(radians)));","output":"5\n1","quiz":{"q":"What unit does Math.sin() expect?","options":["Degrees","Radians","Centimetres"],"answer":1,"why":"JavaScript trigonometric functions use radians. Convert degrees with degrees * Math.PI / 180."}},
    {"id":30,"unit":"Math for JavaScript","title":"Floating-point weirdness & precision","icon":"🫠","tone":"orange","duration":25,"level":"Essential to understand","description":"Why 0.1 + 0.2 is not exactly 0.3, and how to compare numbers safely.","intro":"Computers store many decimal fractions using binary floating-point. Some values cannot be represented exactly, so tiny rounding errors appear. This is normal—not proof your computer has joined a cult.","sections":[["Why the famous result happens","0.1 + 0.2 can produce 0.30000000000000004 because those decimal fractions have repeating binary representations."],["Compare with a tolerance","For many numerical tasks, compare the absolute difference against a small tolerance instead of requiring exact equality. Choose a tolerance appropriate to the scale and problem."],["Round for display, not magic","toFixed() returns a string formatted to a chosen number of decimal places. It is useful for display, but does not make the underlying number exact."],["Money needs extra care","For financial values, integer minor units or a well-tested decimal arithmetic library are usually safer than repeated floating-point calculations."]],"code":"console.log(0.1 + 0.2);\\nconsole.log(Math.abs((0.1 + 0.2) - 0.3) < 1e-10);\\nconsole.log((19.99).toFixed(1));","output":"0.30000000000000004\ntrue\n20.0","quiz":{"q":"Why can 0.1 + 0.2 differ slightly from 0.3?","options":["JavaScript randomly changes numbers","Binary floating-point cannot represent every decimal fraction exactly","The + operator only works on integers"],"answer":1,"why":"Floating-point values have finite precision. Some decimal fractions are approximations when stored in binary."}},

{"id":31,"unit":"Maths from Zero","title":"Place value: what numbers are made of","icon":"🔢","tone":"mint","duration":20,"level":"Maths foundation","description":"Understand digits, place value, expanded form, and comparing whole numbers.","intro":"A number is not a pile of random digits. Each digit rents a different-sized apartment. In 4,582, the 4 lives in the thousands apartment, the 5 in hundreds, the 8 in tens, and the 2 in ones.","sections":[["Place changes value","In base ten, each place is ten times the place to its right: ones, tens, hundreds, thousands. The digit 6 means 6, 60, or 600 depending on its place."],["Expanded form","4,582 = 4,000 + 500 + 80 + 2. Expanded form shows the value contributed by each digit."],["Compare from the left","To compare 4,582 and 4,528, compare thousands, then hundreds, then tens. They match until 8 tens beats 2 tens."],["Zero is a placeholder","In 4,052, zero says there are no hundreds. It keeps the other digits in their correct seats."]],"code":"console.log(4 * 1000 + 5 * 100 + 8 * 10 + 2);\\nconsole.log(4582 > 4528);","output":"4582\ntrue","quiz":{"q":"In 3,746, what is the value of 7?","options":["7","70","700"],"answer":2,"why":"The 7 is in the hundreds place, so its value is 700."}},
{"id":32,"unit":"Maths from Zero","title":"Addition and subtraction without panic","icon":"➕","tone":"mint","duration":20,"level":"Maths foundation","description":"Build number sense, regrouping, checking answers, and negative changes.","intro":"Addition joins quantities; subtraction finds the difference or what remains. Regrouping is just trading ten tiny coins for one bigger coin.","sections":[["Addition combines","27 + 15 = 20 + 10 + 7 + 5 = 42. Combine tens with tens and ones with ones."],["Regrouping","For 28 + 17, the ones make 15: exchange ten ones for one ten, leaving 5 ones and carrying 1 ten."],["Subtraction","52 − 28 can be found by regrouping one ten as ten ones, or by counting the distance from 28 up to 52."],["Check with the inverse","If 52 − 28 = 24, check 24 + 28 = 52. Addition undoes subtraction."]],"code":"console.log(28 + 17);\\nconsole.log(52 - 28);\\nconsole.log((52 - 28) + 28);","output":"45\n24\n52","quiz":{"q":"How can you check 63 − 19 = 44?","options":["44 + 19 = 63","44 × 19 = 63","63 + 19 = 44"],"answer":0,"why":"Add the subtracted amount back to the answer to recover the starting number."}},
{"id":33,"unit":"Maths from Zero","title":"Multiplication and division: equal groups","icon":"✖️","tone":"mint","duration":20,"level":"Maths foundation","description":"Understand multiplication, division, remainders, and inverse operations.","intro":"Multiplication is equal groups; division shares or measures groups. Four dragon nests with three eggs each contain twelve eggs. The dragons are delighted.","sections":[["Multiplication","4 × 3 means four groups of three, for a total of 12."],["Division","12 ÷ 3 asks how many are in each of three equal groups, or how many groups of three fit into twelve."],["Remainders","14 ÷ 4 makes three full groups (12) with 2 left over."],["Inverse operations","If 4 × 3 = 12, then 12 ÷ 3 = 4. Division by zero is not defined."]],"code":"console.log(4 * 3);\\nconsole.log(12 / 3);\\nconsole.log(14 % 4);","output":"12\n4\n2","quiz":{"q":"14 objects are packed into groups of 4. How many remain?","options":["1","2","3"],"answer":1,"why":"Three groups use 12 objects, leaving 2."}},
{"id":34,"unit":"Maths from Zero","title":"Factors, multiples, primes and divisibility","icon":"🧩","tone":"mint","duration":20,"level":"Maths foundation","description":"Find factor pairs, multiples, prime numbers, and common factors.","intro":"Factors are numbers that divide another number exactly. Multiples are the numbers you get by counting in jumps. Prime numbers have exactly two positive factors.","sections":[["Factors","The factors of 12 are 1, 2, 3, 4, 6 and 12 because each divides it without a remainder."],["Multiples","Multiples of 5 include 5, 10, 15, 20. The list never ends."],["Prime or composite","7 is prime; 12 is composite. The number 1 is neither prime nor composite."],["Common factors","The greatest common factor of 12 and 18 is 6, which helps simplify 12/18 to 2/3."]],"code":"console.log(12 % 3 === 0);\\nconsole.log(12 % 5 === 0);","output":"true\nfalse","quiz":{"q":"Which number is prime?","options":["9","11","15"],"answer":1,"why":"11 has only two positive factors: 1 and 11."}},
{"id":35,"unit":"Maths from Zero","title":"Fractions: parts of a whole","icon":"🍕","tone":"mint","duration":20,"level":"Maths foundation","description":"Understand equivalent fractions, simplifying, comparing, and fraction operations.","intro":"A fraction is division wearing a disguise. In 3/4, the bottom says the whole is split into four equal parts; the top says we have three.","sections":[["Numerator and denominator","The numerator is the top number; the denominator counts equal parts in one whole and cannot be zero."],["Equivalent fractions","1/2 = 2/4 = 3/6. Multiply or divide top and bottom by the same nonzero number to keep the value."],["Add and subtract","With matching denominators, 2/7 + 3/7 = 5/7. With different denominators, first find a common denominator."],["Multiply and divide","Multiply top by top and bottom by bottom. To divide by a fraction, multiply by its reciprocal."]],"code":"console.log(2 / 7 + 3 / 7);\\nconsole.log((1 / 2) / (1 / 4));\\nconsole.log(3 / 4 === 6 / 8);","output":"0.7142857142857142\n2\ntrue","quiz":{"q":"What is 2/7 + 3/7?","options":["5/14","5/7","6/7"],"answer":1,"why":"The denominators match, so add the numerators and keep the denominator."}},
{"id":36,"unit":"Maths from Zero","title":"Decimals, rounding and estimation","icon":"🔍","tone":"mint","duration":20,"level":"Maths foundation","description":"Connect decimals to place value, round sensibly, and estimate before calculating.","intro":"Decimals are fractions written in base ten. The first digit after the decimal point is tenths, then hundredths, then thousandths. Estimation is your maths smoke alarm.","sections":[["Decimal place value","In 3.47, 4 means four tenths and 7 means seven hundredths: 3 + 0.4 + 0.07."],["Line up decimals","When adding or subtracting by hand, line up decimal points so tenths match tenths."],["Rounding","To round 4.68 to one decimal place, inspect the hundredths digit (8). It rounds 4.6 up to 4.7."],["Estimate first","19.8 × 5.1 is roughly 20 × 5 = 100. An answer near 1,000 signals a misplaced-decimal disaster."]],"code":"console.log(3 + 0.4 + 0.07);\\nconsole.log(Math.round(4.68 * 10) / 10);","output":"3.47\n4.7","quiz":{"q":"Round 7.36 to one decimal place.","options":["7.3","7.4","7.36"],"answer":1,"why":"The hundredths digit is 6, so the tenths digit rounds up."}},
{"id":37,"unit":"Maths from Zero","title":"Percentages in real life","icon":"💯","tone":"mint","duration":20,"level":"Maths foundation","description":"Calculate discounts, increases, decreases, and percentage change.","intro":"Percent means per hundred. 25% is 25 out of every 100, or one quarter. A discount shrinks a price; a percentage increase grows it.","sections":[["Percentage of an amount","Convert percent to a decimal by dividing by 100, then multiply. 15% of 200 = 0.15 × 200 = 30."],["Discount","A 20% discount on 500 is 100, so the sale price is 500 − 100 = 400."],["Percentage increase","A 10% increase makes the new amount 110% of the original: multiply by 1.10."],["Percentage change","Change ÷ original × 100%. From 80 to 100 is 20/80 × 100% = 25%."]],"code":"console.log(0.15 * 200);\\nconsole.log(500 - 0.20 * 500);\\nconsole.log((100 - 80) / 80 * 100);","output":"30\n400\n25","quiz":{"q":"A price rises from 80 to 100. What is the percentage increase?","options":["20%","25%","80%"],"answer":1,"why":"The change is 20; divide by the original 80 and multiply by 100%."}},
{"id":38,"unit":"Maths from Zero","title":"Ratios, rates and unit conversions","icon":"⚖️","tone":"mint","duration":20,"level":"Maths foundation","description":"Compare quantities, calculate unit rates, and convert common units.","intro":"A ratio compares quantities. A rate compares quantities with different units, like kilometres per hour or rupees per kilogram.","sections":[["Ratios","2:3 means two parts compared with three parts. It does not automatically mean two items plus three items."],["Unit rate","If ₹300 buys 5 notebooks, each costs ₹300 ÷ 5 = ₹60."],["Proportions","If 2 pens cost ₹30, then 6 cost ₹90 if the price per pen stays constant."],["Convert units","1 metre = 100 centimetres, so 2.5 metres = 250 centimetres. Track units so you multiply in the correct direction."]],"code":"console.log(300 / 5);\\nconsole.log(30 * (6 / 2));\\nconsole.log(2.5 * 100);","output":"60\n90\n250","quiz":{"q":"If 4 kg costs ₹200 at a constant rate, what does 1 kg cost?","options":["₹25","₹50","₹800"],"answer":1,"why":"Divide the total cost by the number of kilograms: 200 ÷ 4 = 50."}},
{"id":39,"unit":"Maths from Zero","title":"Algebra: terms, expressions and like terms","icon":"🔤","tone":"mint","duration":20,"level":"Maths foundation","description":"Translate words into symbols, simplify expressions, and substitute values.","intro":"Algebra is arithmetic with mystery boxes. A letter stands for a value; it is a label, not a spell.","sections":[["Variables and coefficients","In 5x, x is the variable and 5 is the coefficient. 5x means 5 multiplied by x."],["Expression or equation","3x + 2 is an expression. It does not make a claim about equality until an equals sign appears."],["Like terms","3x + 2x = 5x. But 3x + 2y cannot become 5xy because x and y count different things."],["Substitution","If x = 4, then 3x + 2 = 3 × 4 + 2 = 14. Replace the letter, then calculate."]],"code":"const x = 4;\\nconsole.log(3 * x + 2);\\nconsole.log(3 * x + 2 * x);","output":"14\n20","quiz":{"q":"Simplify 3x + 2x.","options":["5x","5x²","6x"],"answer":0,"why":"Add the coefficients 3 + 2 and keep x."}},
{"id":40,"unit":"Maths from Zero","title":"Equations and inequalities","icon":"🧮","tone":"mint","duration":20,"level":"Maths foundation","description":"Solve one-step and multi-step equations and understand inequality signs.","intro":"An equation says two expressions have equal value. Imagine a balanced seesaw: whatever you do to one side, do to the other.","sections":[["Undo operations","For x + 5 = 12, subtract 5 from both sides to get x = 7."],["Two steps","For 2x + 3 = 11, subtract 3 to get 2x = 8, then divide by 2: x = 4."],["Check the answer","Substitute x = 4 into 2x + 3 = 11. The left side becomes 11, so it checks."],["Inequalities","x > 3 means greater than 3. Multiply or divide an inequality by a negative number and the sign reverses."]],"code":"const x = 4;\\nconsole.log(2 * x + 3 === 11);\\nconsole.log(x > 3);","output":"true\ntrue","quiz":{"q":"Solve 3x = 21.","options":["x = 7","x = 18","x = 63"],"answer":0,"why":"Divide both sides by 3: x = 21 ÷ 3 = 7."}},
{"id":41,"unit":"Maths from Zero","title":"Geometry: perimeter, area and volume","icon":"📐","tone":"mint","duration":20,"level":"Maths foundation","description":"Measure boundaries, surfaces and 3D space with the right formulas.","intro":"Perimeter walks around the outside, area covers the flat inside, and volume fills a 3D object. Mixing them up is like measuring a pool with a fence ruler.","sections":[["Perimeter","Rectangle perimeter = 2 × (length + width). It is a distance, measured in cm or m."],["Area","Rectangle area = length × width, measured in square units. A 5 cm by 3 cm rectangle has area 15 cm²."],["Triangles and circles","Triangle area = base × height ÷ 2. Circle area = πr², where r is the radius."],["Volume","Rectangular box volume = length × width × height, measured in cubic units such as cm³."]],"code":"const length = 5, width = 3, height = 2;\\nconsole.log(2 * (length + width));\\nconsole.log(length * width);\\nconsole.log(length * width * height);","output":"16\n15\n30","quiz":{"q":"A rectangle is 5 cm long and 3 cm wide. What is its area?","options":["16 cm","15 cm²","30 cm³"],"answer":1,"why":"Area is length × width = 5 × 3 = 15 square centimetres."}},
{"id":42,"unit":"Maths from Zero","title":"Word problems and estimation strategy","icon":"🧠","tone":"mint","duration":20,"level":"Maths foundation","description":"Turn real-world stories into maths, choose operations, estimate, and check.","intro":"Word problems are stories wearing a maths costume. Do not grab numbers and randomly multiply them: find what is known, what is asked, and how the quantities relate.","sections":[["Find the question","Identify what is being asked and write the unknown with a unit, such as total cost in rupees."],["Choose the relationship","Equal groups suggest multiplication; sharing suggests division; comparing may need subtraction. Context matters more than keywords."],["Estimate first","Three items at about ₹50 each should total around ₹150. A result of ₹15,000 is a warning siren."],["Check the story","Include units and ask whether the answer makes sense in the original situation."]],"code":"const total = 50 * 3;\\nconsole.log(\"Estimated total: ₹\" + total);\\nconsole.log(total >= 100 && total <= 200);","output":"Estimated total: ₹150\ntrue","quiz":{"q":"Three tickets cost ₹40 each. Which calculation finds the total?","options":["40 + 3","40 × 3","40 ÷ 3"],"answer":1,"why":"Three equal tickets at ₹40 each means 3 groups of 40: ₹120."}},
    {"id":43,"unit":"Advanced JavaScript","title":"Advanced functions and callbacks","icon":"⚙️","tone":"violet","duration":20,"level":"Advanced","description":"Pass functions around and use map, filter, and reduce.","intro":"A callback is a tiny employee handed a job and a whistle.","sections":[["The big idea","Functions are values; map transforms items, filter selects items, and reduce combines them."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const n=[1,2,3];\nconsole.log(n.map(x=>x*2));\nconsole.log(n.filter(x=>x>1));","output":"[2,4,6]\n[2,3]","quiz":{"q":"What does filter return?","options":["A new array of matching items","Always a number","A CSS rule"],"answer":0,"why":"filter returns a new array containing items that pass the test."}},
    {"id":44,"unit":"Advanced JavaScript","title":"Recursion and call stacks","icon":"⚙️","tone":"violet","duration":20,"level":"Advanced","description":"Use base cases and recursive steps; understand stack limits.","intro":"Recursion is a Russian doll of instructions: eventually reach the smallest doll.","sections":[["The big idea","A base case stops further calls; each recursive step must move closer to it."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"function count(n){if(n<=0)return;console.log(n);count(n-1);}\ncount(3);","output":"3\n2\n1","quiz":{"q":"What stops recursion?","options":["A base case","A longer name","console.log"],"answer":0,"why":"The base case stops additional calls."}},
    {"id":45,"unit":"Advanced JavaScript","title":"Prototypes and prototype chain","icon":"⚙️","tone":"violet","duration":20,"level":"Advanced","description":"Understand inherited properties and shared object behaviour.","intro":"An object checks its backpack, then the family cupboard: its prototype chain.","sections":[["The big idea","Own properties live on the object; missing properties are searched for up the prototype chain."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const parent={speak(){return \"hello\";}};\nconst child=Object.create(parent);\nconsole.log(child.speak());","output":"hello","quiz":{"q":"Where is speak found?","options":["The prototype chain","CSS","String conversion"],"answer":0,"why":"The method is inherited from the prototype."}},
    {"id":46,"unit":"Advanced JavaScript","title":"Classes, inheritance and composition","icon":"⚙️","tone":"violet","duration":20,"level":"Advanced","description":"Use constructors, methods, extends, super, and composition thoughtfully.","intro":"A class is a recipe; an instance is the cake. Composition is choosing toppings.","sections":[["The big idea","constructor initializes an instance; extends creates a subclass; super calls parent behaviour."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"class Pet{constructor(n){this.name=n;} speak(){return this.name;}}\nconsole.log(new Pet(\"Mochi\").speak());","output":"Mochi","quiz":{"q":"What does extends establish?","options":["Inheritance","A network connection","A CSS selector"],"answer":0,"why":"extends defines a subclass relationship."}},
    {"id":47,"unit":"Advanced JavaScript","title":"Iterators and generators","icon":"⚙️","tone":"violet","duration":20,"level":"Advanced","description":"Understand iterables, for...of, function*, and yield.","intro":"An iterator is a snack dispenser: one snack at a time.","sections":[["The big idea","Iterables let for...of request values one by one; generators pause at yield and resume later."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"function* tickets(){yield 101;yield 102;}\nconsole.log([...tickets()]);","output":"[101,102]","quiz":{"q":"What does yield do?","options":["Produces a value and pauses the generator","Deletes a function","Parses JSON"],"answer":0,"why":"yield produces a value and pauses generator execution."}},
    {"id":48,"unit":"Advanced JavaScript","title":"Modules and package boundaries","icon":"⚙️","tone":"violet","duration":20,"level":"Advanced","description":"Organize code with import/export and make dependencies explicit.","intro":"Modules are labelled lunchboxes; each file shares only what it exports.","sections":[["The big idea","Named exports are imported using the exported identifier; modules divide large programs into files."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"// math.js: export const double=n=>n*2;\n// app.js: import {double} from \"./math.js\";\nconsole.log(\"Modules separate code\");","output":"Modules separate code","quiz":{"q":"What must a named import match?","options":["The exported name","A CSS colour","Screen width"],"answer":0,"why":"Named imports use the exported identifier."}},
    {"id":49,"unit":"Advanced JavaScript","title":"Regular expressions","icon":"⚙️","tone":"violet","duration":20,"level":"Advanced","description":"Search text with patterns, character classes, groups, and flags.","intro":"A regex is a tiny text detective hunting for clues.","sections":[["The big idea","\\d matches digits; + means one or more; flags such as i make matching case-insensitive."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"console.log(\"Order #482\".match(/\\\\d+/)[0]);\nconsole.log(/^order/i.test(\"Order\"));","output":"482\ntrue","quiz":{"q":"What does \\\\d+ match?","options":["One or more digits","Only spaces","A comma"],"answer":0,"why":"\\\\d matches digits and + means one or more."}},
    {"id":50,"unit":"Advanced JavaScript","title":"Map, Set and weak collections","icon":"⚙️","tone":"violet","duration":20,"level":"Advanced","description":"Choose collections for lookup, uniqueness, and object-associated metadata.","intro":"Map is a key-anything dictionary; Set is a bouncer against duplicate guests.","sections":[["The big idea","Map stores key-value pairs with keys of many types; Set stores unique values."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const ids=new Set([2,2,3]);\nconsole.log(ids.size);","output":"2","quiz":{"q":"What does Set guarantee?","options":["Values are unique","Entries are sorted","Keys are strings"],"answer":0,"why":"A Set stores each value at most once."}},
    {"id":51,"unit":"Advanced JavaScript","title":"The event loop and task queues","icon":"⚙️","tone":"violet","duration":20,"level":"Advanced","description":"Understand the call stack, timers, promise microtasks, and async output order.","intro":"The JavaScript chef checks the urgent promise tray before the regular timer queue.","sections":[["The big idea","Synchronous code runs on the call stack; promise reactions are microtasks and timers schedule tasks."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"console.log(\"A\");\nsetTimeout(()=>console.log(\"timer\"),0);\nPromise.resolve().then(()=>console.log(\"promise\"));\nconsole.log(\"B\");","output":"A\nB\npromise\ntimer","quiz":{"q":"Which callback runs first?","options":["The promise reaction","The timer callback","Timers always run first"],"answer":0,"why":"Promise reactions run before the next timer task."}},
    {"id":52,"unit":"Advanced JavaScript","title":"Fetch, HTTP and API failures","icon":"⚙️","tone":"violet","duration":20,"level":"Advanced","description":"Request remote data, check response.ok, parse JSON, and handle failures.","intro":"A courier can deliver an HTTP error envelope; receiving it does not mean the request succeeded.","sections":[["The big idea","fetch returns a Response; HTTP 404/500 do not normally reject the promise, so check response.ok."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"async function demo(){const r={ok:true,json:async()=>({ready:true})};if(!r.ok)throw Error();console.log((await r.json()).ready);}\ndemo();","output":"true","quiz":{"q":"Does fetch automatically reject on HTTP 404?","options":["Usually no; check response.ok","Always","Only in Node"],"answer":0,"why":"fetch normally resolves with a Response for HTTP errors."}},
    {"id":53,"unit":"Advanced JavaScript","title":"Browser storage and web security","icon":"⚙️","tone":"violet","duration":20,"level":"Advanced","description":"Persist non-sensitive data and display user input safely.","intro":"Browser storage is a drawer, not a vault; treat user input as data, not instructions.","sections":[["The big idea","localStorage stores strings; JSON can serialize ordinary data. Use textContent for untrusted text."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const saved=JSON.stringify({theme:\"dark\"});\nconsole.log(JSON.parse(saved).theme);\nconsole.log(\"Use textContent for user text\");","output":"dark\nUse textContent for user text","quiz":{"q":"What does localStorage store?","options":["Strings","Functions directly","DOM elements"],"answer":0,"why":"localStorage stores strings; never put secrets or sensitive data there."}},
    {"id":54,"unit":"Advanced JavaScript","title":"Testing, Node.js and performance","icon":"⚙️","tone":"violet","duration":20,"level":"Advanced","description":"Test edge cases, understand Node.js/npm, and measure before optimizing.","intro":"Testing is a fire drill; optimization is not replacing every spoon with a rocket.","sections":[["The big idea","Assertions check expected behaviour; Node.js runs JS outside browsers; profiling finds real bottlenecks."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"function add(a,b){return a+b;}\nconsole.log(add(2,3)===5);\nconsole.log(\"Measure before optimizing\");","output":"true\nMeasure before optimizing","quiz":{"q":"What should happen before optimizing?","options":["Measure a realistic workload","Rewrite everything","Guess"],"answer":0,"why":"Profiling helps identify real bottlenecks."}},
    {"id":55,"unit":"Advanced Maths","title":"Exponents, roots and logarithms","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Understand powers, roots, scientific notation, and logarithms.","intro":"An exponent counts multiplication invitations; a logarithm asks how many produced the number.","sections":[["The big idea","2³=8 and √49=7; log₂(8)=3 because 2³=8."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"console.log(2**3);\nconsole.log(Math.sqrt(49));\nconsole.log(Math.log2(8));","output":"8\n7\n3","quiz":{"q":"What is log₂(16)?","options":["2","4","8"],"answer":1,"why":"2⁴=16, so the logarithm is 4."}},
    {"id":56,"unit":"Advanced Maths","title":"Sequences and series","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Recognize arithmetic and geometric sequences and sum their terms.","intro":"A sequence is a conga line following a rule; a series adds the dancers.","sections":[["The big idea","Arithmetic sequences add a fixed difference; geometric sequences multiply by a fixed ratio."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const s=Array.from({length:5},(_,i)=>3+i*4);\nconsole.log(s);\nconsole.log(s.reduce((a,b)=>a+b,0));","output":"[3,7,11,15,19]\n55","quiz":{"q":"Common difference in 5,8,11,14?","options":["2","3","5"],"answer":1,"why":"Each term increases by 3."}},
    {"id":57,"unit":"Advanced Maths","title":"Functions, graphs and transformations","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Understand inputs, outputs, coordinates, slope, and graph shifts.","intro":"A function is a vending machine; its graph is the trail of outputs.","sections":[["The big idea","For f(x)=2x+1, f(3)=7; slope is change in y divided by change in x."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"function f(x){return 2*x+1;}\nconsole.log(f(3));\nconsole.log(f(4));","output":"7\n9","quiz":{"q":"For y=2x+1, what is y when x=4?","options":["6","8","9"],"answer":2,"why":"2×4+1=9."}},
    {"id":58,"unit":"Advanced Maths","title":"Systems of linear equations","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Solve simultaneous equations using substitution and elimination.","intro":"Two equations are two security guards; the answer must satisfy both.","sections":[["The big idea","A solution makes every equation true; substitution replaces a variable, elimination combines equations."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const x=3,y=2;\nconsole.log(2*x+y===8);\nconsole.log(x-y===1);","output":"true\ntrue","quiz":{"q":"A solution must…","options":["Satisfy every equation","Satisfy one only","Always be zero"],"answer":0,"why":"The same values must make all equations true."}},
    {"id":59,"unit":"Advanced Maths","title":"Polynomials and factoring","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Combine like terms and factor common patterns.","intro":"A polynomial is a maths sandwich; factoring reveals shared ingredients.","sections":[["The big idea","The degree is the highest exponent; 6x+9=3(2x+3), reversing distribution."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const x=4;\nconsole.log(3*x*x+2*x-5);\nconsole.log(3*(2*x+3));","output":"51\n33","quiz":{"q":"Factor 6x+9.","options":["3(2x+3)","6(x+9)","3(6x+9)"],"answer":0,"why":"Both terms share a factor of 3."}},
    {"id":60,"unit":"Advanced Maths","title":"Quadratic equations and parabolas","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Solve quadratics and interpret discriminants and roots.","intro":"A quadratic is a bowl-shaped curve that can cross the floor zero, one, or two times.","sections":[["The big idea","Standard form is ax²+bx+c=0; the discriminant b²−4ac classifies real roots."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const a=1,b=-5,c=6;\nconsole.log(b*b-4*a*c);\nconsole.log((5-1)/2,(5+1)/2);","output":"1\n2 3","quiz":{"q":"Discriminant of x²−5x+6=0?","options":["1","5","25"],"answer":0,"why":"25−24=1."}},
    {"id":61,"unit":"Advanced Maths","title":"Inequalities and absolute value","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Solve ranges and understand absolute value as distance.","intro":"Absolute value is distance from zero; distance cannot be negative.","sections":[["The big idea","x<4 excludes 4; multiplying an inequality by a negative reverses its sign."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"console.log(Math.abs(-7));\nconsole.log(-3*2 > -3*4);","output":"7\ntrue","quiz":{"q":"What is |−12|?","options":["−12","0","12"],"answer":2,"why":"Absolute value is distance from zero."}},
    {"id":62,"unit":"Advanced Maths","title":"Coordinate geometry and distance","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Use slope, midpoint, and distance to describe points and lines.","intro":"The distance formula is Pythagoras wearing a coordinate-grid costume.","sections":[["The big idea","Distance is √((x₂−x₁)²+(y₂−y₁)²); slope is rise divided by run."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const dx=3,dy=4;\nconsole.log(Math.sqrt(dx*dx+dy*dy));","output":"5","quiz":{"q":"Distance between (0,0) and (3,4)?","options":["5","7","12"],"answer":0,"why":"√(9+16)=5."}},
    {"id":63,"unit":"Advanced Maths","title":"Vectors and magnitude","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Represent direction and size; add vectors and calculate dot products.","intro":"A vector is an arrow with direction and strength.","sections":[["The big idea","Add matching components; magnitude is √(x²+y²); dot products describe alignment."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const a=[1,2],b=[3,4];\nconsole.log(a.map((v,i)=>v+b[i]));\nconsole.log(a[0]*b[0]+a[1]*b[1]);","output":"[4,6]\n11","quiz":{"q":"Magnitude of (3,4)?","options":["4","5","7"],"answer":1,"why":"√(9+16)=5."}},
    {"id":64,"unit":"Advanced Maths","title":"Matrices and linear transformations","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Understand matrix dimensions, multiplication, and determinants.","intro":"A matrix is a spreadsheet with mathematical manners; it can transform coordinates.","sections":[["The big idea","A 2×3 matrix has 2 rows and 3 columns; a 2×2 determinant is ad−bc."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const A=[[1,2],[3,4]];\nconsole.log(A[0][0]*A[1][1]-A[0][1]*A[1][0]);","output":"-2","quiz":{"q":"Determinant of [[1,2],[3,4]]?","options":["2","−2","10"],"answer":1,"why":"1×4−2×3=−2."}},
    {"id":65,"unit":"Advanced Maths","title":"Permutations and combinations","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Count outcomes and distinguish arrangements from selections.","intro":"Permutations arrange a parade; combinations choose guests when seat order does not matter.","sections":[["The big idea","n! multiplies positive integers down to 1; combinations count unordered selections."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"function fact(n){let r=1;for(let i=2;i<=n;i++)r*=i;return r;}\nconsole.log(fact(5)/(fact(2)*fact(3)));","output":"10","quiz":{"q":"When do combinations apply?","options":["When order does not matter","When every order differs","Only for zero"],"answer":0,"why":"Combinations count selections where reordering is not a new outcome."}},
    {"id":66,"unit":"Advanced Maths","title":"Conditional probability and Bayes' rule","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Update probability with evidence and distinguish P(A|B) from P(B|A).","intro":"Conditional probability asks how odds change after you learn the goblin entered the kitchen.","sections":[["The big idea","P(A|B)=P(A and B)/P(B); Bayes' rule uses prior probabilities and evidence."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"console.log(2/5);\nconsole.log(\"Conditioning depends on the given event\");","output":"0.4\nConditioning depends on the given event","quiz":{"q":"P(A|B) means…","options":["Probability of A given B","Probability of B given A always","A times B"],"answer":0,"why":"The condition after the bar is the information already known."}},
    {"id":67,"unit":"Advanced Maths","title":"Statistics and distributions","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Summarize centre and spread with mean, median, and standard deviation.","intro":"Mean is the class average; median is the person in the middle.","sections":[["The big idea","Mean is sum/count; outliers can pull the mean more than the median."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const v=[2,4,4,10];\nconsole.log(v.reduce((s,x)=>s+x,0)/v.length);\nconsole.log((v[1]+v[2])/2);","output":"5\n4","quiz":{"q":"Which measure is less affected by an extreme outlier?","options":["Median","Mean","Maximum"],"answer":0,"why":"Median is less sensitive to extreme values."}},
    {"id":68,"unit":"Advanced Maths","title":"Limits and continuity","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Understand nearby behaviour and when a function is continuous.","intro":"A limit asks what value you approach while sneaking toward a door.","sections":[["The big idea","A function's value can differ from its limit or be undefined; continuity requires value and limit to match."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"function f(x){return (x*x-1)/(x-1);}\nconsole.log(f(2));\nconsole.log(\"For x≠1 it simplifies to x+1\");","output":"3\nFor x≠1 it simplifies to x+1","quiz":{"q":"Limit of (x²−1)/(x−1) as x→1?","options":["0","1","2"],"answer":2,"why":"Factor to x+1 for x≠1; it approaches 2."}},
    {"id":69,"unit":"Advanced Maths","title":"Derivatives and rates of change","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Interpret derivatives as slopes and instantaneous rates; use the power rule.","intro":"A derivative is a speedometer for change at one exact input.","sections":[["The big idea","The derivative is a limit of average rates; derivative of xⁿ is n·xⁿ⁻¹."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"function derivative(x){return 2*x;}\nconsole.log(derivative(3));","output":"6","quiz":{"q":"Derivative of x²?","options":["x","2x","2"],"answer":1,"why":"The power rule gives 2x."}},
    {"id":70,"unit":"Advanced Maths","title":"Integrals and accumulated change","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Understand integration as accumulation, area, and antiderivatives.","intro":"A definite integral totals tiny slices like counting crumbs to measure a cake.","sections":[["The big idea","An antiderivative of 2x is x²+C; integrals can represent signed area and accumulated change."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"console.log(\"An antiderivative of 2x is x² + C\");\nconsole.log(\"Integrals measure accumulation\");","output":"An antiderivative of 2x is x² + C\nIntegrals measure accumulation","quiz":{"q":"An antiderivative of 2x is…","options":["2x²","x²+C","x+C"],"answer":1,"why":"Differentiating x²+C gives 2x."}},
    {"id":71,"unit":"Advanced Maths","title":"Trigonometry, radians and identities","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Use sine, cosine, radians, the unit circle, and common identities.","intro":"Trigonometry is a triangle detective that also works on waves and rotations.","sections":[["The big idea","A full turn is 2π radians; sin²θ+cos²θ=1; JavaScript trig functions use radians."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"console.log(Math.sin(Math.PI/2));\nconsole.log(Math.cos(0));","output":"1\n1","quiz":{"q":"What angle unit does Math.sin use?","options":["Degrees","Radians","Percent"],"answer":1,"why":"JavaScript's trig functions expect radians."}},
    {"id":72,"unit":"Advanced Maths","title":"Complex numbers","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Understand i²=−1 and the structure of a+bi.","intro":"Complex numbers let equations such as x²+1=0 have solutions.","sections":[["The big idea","i²=−1; complex numbers have real and imaginary parts and appear in waves and circuits."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const a={re:2,im:3},b={re:1,im:-4};\nconsole.log(a.re+b.re,a.im+b.im);\nconsole.log(\"i² = -1\");","output":"3 -1\ni² = -1","quiz":{"q":"What is i²?","options":["1","−1","i"],"answer":1,"why":"The imaginary unit is defined by i²=−1."}},
    {"id":73,"unit":"Advanced Maths","title":"Discrete maths and graph theory","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Reason about logic, sets, nodes, edges, and paths.","intro":"Graph theory is a map: cities are nodes and roads are edges.","sections":[["The big idea","Sets support union and intersection; graphs contain vertices and edges."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const g=new Map([[\"A\",[\"B\",\"C\"]]]);\nconsole.log(g.get(\"A\").length);\nconsole.log(new Set([1,1,2]).size);","output":"2\n2","quiz":{"q":"What is an edge in a graph?","options":["A connection between vertices","A percentage","A number line"],"answer":0,"why":"An edge represents a connection between vertices."}},
    {"id":74,"unit":"Advanced Maths","title":"Numerical methods and approximation","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Estimate roots and understand rounding error and justified precision.","intro":"Numerical methods are careful guessers improving estimates with repeatable steps.","sections":[["The big idea","Bisection repeatedly halves an interval that brackets a root."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"let lo=1,hi=2;for(let i=0;i<5;i++){const m=(lo+hi)/2;if(m*m<2)lo=m;else hi=m;}\nconsole.log((lo+hi)/2);","output":"1.40625","quiz":{"q":"What does bisection do?","options":["Halves an interval containing a root","Squares every value","Always gives exact decimals"],"answer":0,"why":"Bisection repeatedly halves the interval to improve the estimate."}},
    {"id":75,"unit":"Advanced Maths","title":"Financial maths: interest and growth","icon":"∑","tone":"mint","duration":20,"level":"Advanced maths","description":"Calculate simple and compound interest and understand inflation.","intro":"Compound interest is a snowball: later growth builds on earlier growth.","sections":[["The big idea","Simple interest is P×r×t; compound growth multiplies the starting amount by a growth factor each period."],["Try it","Run the example, predict its output first, then change one value and explain what changed."],["Common trap","Check assumptions, edge cases, and what the result actually means rather than memorising the output."]],"code":"const p=1000,r=0.05;\nconsole.log(p*(1+r));\nconsole.log(p*(1+r)**2);","output":"1050\n1102.5","quiz":{"q":"₹1,000 after two years at 5% compound growth?","options":["₹1,100","₹1,102.50","₹1,250"],"answer":1,"why":"1000×1.05²=1102.50."}}
  ];
  const modules = [
    {title:"Get comfortable",range:[1,4],icon:"✦",desc:"Meet JavaScript, print messages, store values, and understand types."},
    {title:"Learn to think in code",range:[5,8],icon:"⌘",desc:"Make decisions, repeat actions, and organise reusable instructions."},
    {title:"Work with real data",range:[9,12],icon:"◈",desc:"Use lists, objects, built-in tools, and a reliable debugging process."},
    {title:"Build for the browser",range:[13,14],icon:"▧",desc:"Connect JavaScript to page elements and respond to user actions."},
    {title:"Level up",range:[15,17],icon:"✧",desc:"Explore deeper language concepts, async work, and modern syntax."},
    {title:"Make something real",range:[18,18],icon:"⚒",desc:"Use what you know to create small projects of your own."},
    {title:"Maths from Zero",range:[31,42],icon:"∑",desc:"Build number sense, arithmetic, fractions, decimals, percentages, ratios, algebra, equations, geometry, and word-problem skills from scratch."},
    {title:"Maths for JavaScript",range:[19,30],icon:"∑",desc:"Apply arithmetic, functions, logic, binary, statistics, geometry, and numerical precision to programming."},
    {title:"Advanced JavaScript",range:[43,54],icon:"⚙️",desc:"Study callbacks, recursion, prototypes, classes, generators, modules, regex, collections, the event loop, APIs, storage, security, testing, Node.js and performance."},
    {title:"Advanced Maths",range:[55,75],icon:"∑",desc:"Explore logarithms, sequences, advanced algebra, vectors, matrices, probability, statistics, calculus, trigonometry, complex numbers, graph theory, numerical methods and finance."}
  ];
  const projects = [{"id":1,"title":"The Goblin Tip Calculator","level":"Tiny chaos","time":"25–40 min","emoji":"👺","pitch":"A goblin runs a restaurant and is terrible at maths. Make a calculator that splits a bill and tip without starting a food fight.","goal":"Practise values, numbers, functions, and input validation.","concepts":["const and let","Number conversion","Functions","if / else","NaN and validation"],"checkpoints":[["Make the bill goblin speak","Create bill, tipPercent, and people variables. Print them."],["Calculate the tip","Write calculateTip(bill, tipPercent) and return the tip amount."],["Split the damage","Write perPersonTotal(bill, tipPercent, people). Include the bill and tip, divided by people."],["Stop nonsense inputs","If people is zero or negative, show a helpful message instead of dividing by zero."],["Add a tiny test suite","Try a $100 bill, 10% tip, and 2 people. Predict the answer before running it."]],"analogy":"A function is a vending machine: put inputs in, it does a job, and return hands you the snack. If you put zero people into a bill splitter, the machine starts screaming.","starter":"function calculateTip(bill, tipPercent) {\\n  // TODO: turn the percentage into a decimal\\n  // TODO: multiply it by the bill\\n}\\n\\nconsole.log(calculateTip(100, 10));","hint":"Ten percent means 10 divided by 100. A function that calculates something should usually return the result instead of only printing it.","done":"You can calculate a tip, split a total, reject impossible inputs, and explain why the answer is correct."},{"id":2,"title":"The Suspicious Snack Inventory","level":"Beginner","time":"45–60 min","emoji":"🍕","pitch":"Your snack cupboard is a tiny chaotic warehouse. Track snacks, quantities, prices, and the one gremlin who keeps eating all the biscuits.","goal":"Model data with arrays and objects, then update it safely.","concepts":["Arrays","Objects","Loops","Array methods","Find and filter"],"checkpoints":[["Create snack records","Make an array of snack objects. Each snack has name, quantity, and price."],["Print the stock report","Loop through the snacks and print a readable line for each one."],["Find a snack","Write findSnack(name) that returns the matching object."],["Restock and consume","Write functions that add stock or reduce stock without allowing negative quantities."],["Calculate cupboard value","Add quantity × price for every snack and report the total inventory value."]],"analogy":"An array is a row of labelled lunchboxes. An object is one lunchbox with compartments: name, quantity, and price. The gremlin is a bug report wearing a tiny hat.","starter":"const snacks = [\\n  { name: \"Biscuits\", quantity: 4, price: 20 },\\n  { name: \"Mangoes\", quantity: 3, price: 15 }\\n];\\n\\n// TODO: print each snack and its quantity","hint":"Use for...of to visit each snack. Use find() to locate one item. Remember that changing a property like snack.quantity changes the object.","done":"You can represent real things as objects, keep them in arrays, search them, update them, and calculate totals."},{"id":3,"title":"Password Bouncer 3000","level":"Beginner","time":"45–75 min","emoji":"🕵️","pitch":"A nightclub bouncer made of JavaScript checks passwords. It is strict about length, but not so strict that it rejects the word 'banana' for being emotionally unavailable.","goal":"Practise strings, conditions, boolean logic, and validation.","concepts":["Strings","length","includes","Conditions","Boolean logic"],"checkpoints":[["Inspect a password","Write a function that accepts a password and reports its length."],["Set the club rules","Require a minimum length and at least one number."],["Explain the rejection","Return a clear list of reasons the password fails."],["Test edge cases","Try an empty string, a short password, a long password, and one that meets the rules."],["Separate checking from displaying","One function checks the password; another prints the result."]],"analogy":"A condition is a bouncer asking questions. && means every rule must be satisfied. || means at least one rule can pass. The bouncer has a clipboard and zero chill.","starter":"function checkPassword(password) {\\n  // TODO: check password.length\\n  // TODO: check whether it includes a number\\n  // TODO: return a useful result\\n}\\n\\nconsole.log(checkPassword(\"banana\"));","hint":"A string has a .length property. For a simple number check, loop through the characters and use Number.isNaN(Number(character)) carefully.","done":"You can build readable validation rules, combine conditions, and test both valid and invalid inputs."},{"id":4,"title":"The Array Sorting Circus","level":"Beginner+","time":"60–90 min","emoji":"🎪","pitch":"Twenty-five chaotic circus performers arrive as data. Sort them by score, find the champion, filter the clowns, and avoid accidentally rearranging the original list.","goal":"Get fluent with map, filter, find, reduce, sorting, and callbacks.","concepts":["Callbacks","map","filter","find","reduce","sort"],"checkpoints":[["Make the cast","Create an array of objects with names, acts, and scores."],["Transform the cast list","Use map() to create a list of performer names."],["Choose who qualifies","Use filter() to keep performers above a score threshold."],["Find the champion","Use reduce() or sort() to identify the highest score. Explain your choice."],["Protect the original","Copy the array before sorting it and explain why sort() mutates the array."]],"analogy":"map gives every performer a costume change. filter checks tickets at the door. reduce throws the entire circus into a blender and returns one summary. No actual clowns were harmed.","starter":"const performers = [\\n  { name: \"Bobo\", score: 82 },\\n  { name: \"Laser Duck\", score: 97 },\\n  { name: \"Professor Cheese\", score: 91 }\\n];\\n\\n// TODO: use map() to get names\\n// TODO: use filter() to keep scores above 90","hint":"Callbacks are functions handed to another function. Read the callback parameter as 'the current item' while learning these methods.","done":"You can choose between map, filter, find, reduce, and sort based on the job instead of randomly summoning methods."},{"id":5,"title":"DOM: The Website Puppet Theatre","level":"Intermediate","time":"75–120 min","emoji":"🎭","pitch":"Your webpage is a theatre. HTML elements are puppets, the DOM is the stage manager, and JavaScript is the gremlin yanking the strings when people click buttons.","goal":"Connect JavaScript to browser elements and events.","concepts":["querySelector","textContent","addEventListener","Forms","DOM updates"],"checkpoints":[["Select a puppet","Use querySelector() to find a button and a message element."],["Change the scene","Set textContent when the button is clicked."],["Read audience input","Take text from an input and show a personalised greeting."],["Build a counter","Add +1, -1, and reset buttons. Keep the count in a variable."],["Handle empty input","Show a helpful message if the visitor submits nothing but whitespace."]],"analogy":"The DOM is a family tree of page elements. querySelector is you yelling 'WHERE IS THE BLUE BUTTON?' and the browser handing you the first matching element.","starter":"const button = document.querySelector(\"#myButton\");\\nconst message = document.querySelector(\"#message\");\\n\\nbutton.addEventListener(\"click\", () => {\\n  // TODO: change message.textContent\\n});","hint":"The HTML must contain elements with matching IDs. addEventListener('click', callback) means 'run this function when someone clicks'.","done":"You can select elements, listen for events, read input, update the page, and validate user actions."},{"id":6,"title":"To-Do App for a Very Lazy Dragon","level":"Intermediate","time":"2–3 hours","emoji":"🐉","pitch":"A dragon has 400 chores but only wants to hoard gold. Build a task app that adds, completes, deletes, and filters chores.","goal":"Combine DOM events, arrays of objects, rendering, and localStorage.","concepts":["Arrays of objects","DOM rendering","Events","localStorage","State"],"checkpoints":[["Model a chore","Represent each task as an object with id, text, and completed."],["Add chores","Read the input and add a new task to the array."],["Render the list","Create the visible list from the current array state."],["Complete and delete","Use task IDs to update or remove the correct task."],["Remember across refreshes","Save tasks in localStorage and load them when the page starts."],["Add filters","Show all, active, and completed tasks without destroying the full list."]],"analogy":"State is the dragon's official hoard ledger. The DOM is the display case. Change the ledger, then redraw the display case. Don't let each button secretly invent its own ledger.","starter":"const tasks = [];\\n\\nfunction addTask(text) {\\n  // TODO: create a task object\\n  // TODO: add it to tasks\\n}\\n\\nfunction renderTasks() {\\n  // TODO: display tasks in the page\\n}","hint":"Keep one source of truth: the tasks array. When it changes, call renderTasks(). Use JSON.stringify to save and JSON.parse to load localStorage data.","done":"You can build a complete CRUD-style app with one source of truth, rendering, filters, and browser persistence."},{"id":7,"title":"Async Pizza Delivery Simulator","level":"Intermediate+","time":"2–3 hours","emoji":"🍕","pitch":"The pizza arrives after a delay, sometimes succeeds, and sometimes the delivery goblin gets lost. Learn asynchronous JavaScript without blaming the oven.","goal":"Understand callbacks, promises, async/await, errors, and loading states.","concepts":["setTimeout","Promises","async/await","try/catch","Loading and error states"],"checkpoints":[["Simulate the delivery","Return a Promise that resolves after a delay."],["Add failure","Reject some deliveries and handle the rejection."],["Await the pizza","Use async/await to write the flow in a readable order."],["Show loading and final status","Display 'cooking…', then success or a helpful error."],["Prevent double orders","Disable the order button while a delivery is in progress."]],"analogy":"await is not a time machine. It says 'pause this async function until the pizza promise settles; let the rest of the kitchen keep working'.","starter":"function deliverPizza() {\\n  return new Promise((resolve) => {\\n    setTimeout(() => resolve(\"Pizza arrived!\"), 1000);\\n  });\\n}\\n\\nasync function orderPizza() {\\n  // TODO: await deliverPizza()\\n  // TODO: handle errors with try/catch\\n}","hint":"A Promise represents a result that may arrive later. await only works inside an async function (or supported top-level module contexts).","done":"You can explain pending/fulfilled/rejected promises and handle loading, success, and failure states."},{"id":8,"title":"The Mini Portfolio Boss Fight","level":"Portfolio build","time":"4–6 hours","emoji":"🧙","pitch":"Build a polished portfolio that introduces you, shows your projects, filters them, and survives a refresh. The final boss is explaining your own code without saying 'I found it on the internet'.","goal":"Combine core JavaScript with DOM, responsive UI behaviour, storage, and debugging.","concepts":["Data-driven rendering","Filtering","Events","localStorage","Refactoring","Accessibility"],"checkpoints":[["Plan before coding","Sketch sections and write down the data each section needs."],["Build a project data array","Store title, description, tags, and links in objects."],["Render project cards","Generate cards from data instead of hand-writing duplicates."],["Add working filters","Filter projects by tag and show a friendly empty state."],["Save a theme preference","Store dark/light theme in localStorage and restore it on load."],["Polish and audit","Test mobile widths, keyboard use, empty data, broken links, and console errors."],["Explain the architecture","Describe how data, functions, events, and DOM rendering connect."]],"analogy":"A portfolio is a restaurant menu powered by data. The array is the kitchen's recipe list; rendering plates the dishes; filters are a very tiny, very dramatic maître d'.","starter":"const projects = [\\n  { title: \"Snack Tracker\", tags: [\"beginner\", \"arrays\"] },\\n  { title: \"To-Do Dragon\", tags: [\"dom\", \"storage\"] }\\n];\\n\\nfunction renderProjects(items) {\\n  // TODO: turn each project into a card\\n}\\n\\nfunction filterProjects(tag) {\\n  // TODO: return only matching projects\\n}","hint":"Build the smallest working version first. Separate data, rendering, and event handling. Refactor only after the basic behaviour works.","done":"You have a deployable portfolio, can explain the code, and have a repeatable workflow for building small apps."}];
  const theoryNotes = {"1":["JavaScript is the extremely literal intern who runs the amusement park","You give it instructions in a language it understands. It follows the rules exactly—even if your instruction is a spectacularly bad idea.","JavaScript is a programming language: values + instructions + rules. The browser can run it without installing a separate tool.","Expecting the computer to guess what you meant. Computers are powerful, not psychic."],"2":["console.log is a megaphone, not a storage cupboard","It shouts a value into the console so you can inspect it. It does not automatically save that value for later.","A program can calculate silently. Logging is a debugging tool that lets you observe what happened.","Thinking console.log changes the value or returns it from a function. Displaying and returning are different jobs."],"3":["Variables are labelled lunchboxes; const is a sticker you cannot rename","The label points to a value. let lets you point that label at a different value later; const stops reassignment.","Variables give names to values so you can reuse information and make code readable.","Using const does not freeze an object or array. It prevents reassignment of the variable binding."],"4":["Types are different species at a zoo. Do not feed them the same operation blindly","The text '42' and the number 42 look similar to a human, but JavaScript treats them differently. One is text; one is a number.","Types influence which operations make sense and what result an expression produces.","Putting numbers inside quotes and then wondering why maths acts weird."],"5":["Operators are tiny kitchen appliances: each symbol has a job","+ can add numbers or join strings. === compares without the loose conversions of ==. The symbol is small; the consequences can be loud.","An expression combines values and operators to produce a new value, often a number or boolean.","Using = to compare. A single = assigns a value; === asks whether values are strictly equal."],"6":["if/else is a goblin at a fork in the road with a yes/no clipboard","If the condition is true, go down one path. Otherwise, take the else path. It does not run both just because it feels social.","Conditions evaluate to booleans. Branches let programs react differently to different inputs.","Using = inside a condition when you meant to compare values, or forgetting that false conditions skip the block."],"7":["A loop is a washing machine for instructions—check the door before leaving it on forever","The loop repeats while its condition allows it. Update the counter or change the condition so it can eventually stop.","Loops automate repetition. A loop needs a starting state, a continuation condition, and a way to make progress.","Off-by-one errors and infinite loops. Trace the counter for the first few passes."],"8":["A function is a vending machine with inputs, a job, and maybe a snack coming out","Call it with arguments. Parameters receive those values. return sends a result back; console.log merely shows one.","Functions package reusable behaviour and help separate a problem into smaller pieces.","Confusing a parameter with an argument, or expecting a function to run before it is called."],"9":["An array is a row of numbered drawers, but the first drawer is numbered zero because JavaScript is a little weird","Use an index to get an item. push adds to the end, and length tells you how many items are there.","Arrays are ordered collections. Zero-based indexing means the first valid index is 0 and the last is length - 1.","Trying to read array[ length ] for the final item. That index is one past the end."],"10":["An object is a backpack with named pockets","Instead of remembering that slot 0 means name and slot 1 means city, use person.name and person.city. Names make data easier to understand.","Objects group related properties into one value and are useful for modelling people, products, tasks, and more.","Confusing property access with a function call, or assuming a missing property will magically exist."],"11":["Built-in methods are tools already in the JavaScript toolbox","You do not need to invent a hammer. Learn what a method receives, what it returns, and whether it changes the original value.","Methods are functions associated with values or objects. Read the method name, input, output, and mutation behaviour.","Assuming every method changes the original. Some return a new value; others mutate."],"12":["Debugging is detective work, not a public execution of your laptop","Reproduce the problem, inspect the error, check the line, and test one change. Do not randomly rewrite everything and call it science.","A bug is a mismatch between expected and actual behaviour. Small experiments narrow down the cause.","Changing five things at once. Then you have no idea which change fixed or broke it."],"13":["The DOM is the browser's cardboard puppet theatre","JavaScript can select an element, read or change its content, and create new elements. The page becomes something your code can control.","The DOM represents a document as objects and nodes that scripts can inspect and modify.","Changing innerHTML with untrusted text. Prefer textContent when you mean plain text."],"14":["An event listener is a doorbell. Your function waits until someone rings it","Register a callback for a click, input, or submit event. The callback runs when that event happens—not immediately when you attach it.","Event-driven programs respond to things that happen, rather than only executing from top to bottom once.","Calling the function immediately instead of passing a function to addEventListener."],"15":["Scope is the room where a variable is allowed to live","A variable inside a function is not automatically available everywhere. Block scope and function scope decide where names can be accessed.","Scope controls name visibility. Closures allow functions to retain access to variables from their surrounding lexical environment.","Assuming a variable exists everywhere because it was created somewhere else."],"16":["Promises are delivery receipts for results that have not arrived yet","A promise can be pending, fulfilled, or rejected. async/await makes promise-based code easier to read, but the waiting still exists.","Asynchronous operations allow other work to continue while waiting for results such as timers or network responses.","Forgetting to handle rejection, or thinking await blocks the entire browser."],"17":["Modern JavaScript is a toolbox upgrade, not a new language you must fear","Template strings, destructuring, spread, and modules reduce repetitive code. Understand the older idea first, then learn the shortcut.","Modern syntax improves readability and composition, but concise syntax is not automatically clearer.","Using a clever one-liner that nobody—including future you—can understand."],"18":["A project is a pile of tiny solved problems wearing one trench coat","Break it into inputs, data, functions, display, and tests. Build a tiny working version, then add one feature at a time.","Projects connect syntax to problem-solving: plan, model data, implement, test, debug, and improve.","Trying to build every feature in one giant sitting before the first small piece works."]};
  Object.assign(theoryNotes, {"19":["Arithmetic is a kitchen: precedence decides who gets the chopping board first","Multiplication gets served before addition unless parentheses put another order in writing.","Arithmetic expressions combine numeric values. Operator precedence and associativity determine evaluation order.","Assuming every expression runs strictly left to right."],"20":["Negative numbers live in the basement; zero is the lobby","On a number line, moving right means larger values—even if you are still below zero.","Signed numbers represent direction or values below a reference point. Absolute value measures distance from zero.","Thinking -8 is greater than -3 because eight is a bigger-looking number."],"21":["Percentages are pie slices wearing a business suit","Twenty percent means twenty out of a hundred. Turn it into a decimal multiplier before calculating.","Percentages express a ratio per hundred and are used in discounts, growth, tax, and data visualisation.","Subtracting a percentage number directly from a price instead of calculating the percentage amount."],"22":["A ratio is a recipe; the scale factor is the giant spoon","If every ingredient must double, multiply every amount by the same factor. Do not double only the salt unless you want a very upsetting soup.","Ratios compare quantities; proportional scaling preserves the relationship between them.","Mixing units, such as adding minutes to kilometres."],"23":["Algebra is a mystery novel where x is the suspect","An equation is a balanced seesaw. Do the same operation to both sides to keep it balanced.","Algebra represents relationships between quantities using symbols and equations.","Confusing the assignment operator = in JavaScript with mathematical equality."],"24":["A mathematical function is a vending machine with a predictable snack","Put in x, apply the rule, and get an output. A JavaScript function can implement the same rule.","A function maps inputs to outputs according to a rule; graphing shows how outputs change as inputs vary.","Forgetting to return the computed result from a JavaScript function."],"25":["Exponentiation is multiplication on an energy drink","2 ** 3 means 2 multiplied by itself three times. The ^ symbol is not the power operator in JavaScript.","Powers, roots, and scientific notation describe scale and relationships between numerical values.","Using ^ for exponentiation. In JavaScript, ^ is bitwise XOR."],"26":["Boolean logic is a bouncer with a clipboard and three moods","AND needs both boxes ticked, OR needs at least one, and NOT flips the answer.","Boolean logic combines truth values to express conditions and reason about program behaviour.","Making a long condition more complicated without writing down its true/false cases."],"27":["Binary is a light switch panel: each tiny switch is off or on","Binary uses only 0 and 1. Hexadecimal is a compact way to write binary patterns.","Number bases represent values using different digit systems; bitwise operators work on binary representations of integers.","Confusing && with &, or assuming ^ means exponentiation."],"28":["Statistics is trying to understand a flock of pigeons without interviewing every pigeon","The mean averages values, the median finds the middle, and probability describes uncertainty—not a promise about the next roll.","Descriptive statistics summarise datasets; probability models uncertainty and random outcomes.","Assuming a small random sample must perfectly match the long-run average."],"29":["Coordinates are a treasure map; trigonometry tells you which way to launch the catapult","Coordinates locate points. Sine and cosine turn angles into components of movement. JavaScript expects radians.","Geometry studies shapes and distances; trigonometry relates angles to sides and circular movement.","Passing degrees to Math.sin() or Math.cos() without converting to radians."],"30":["Floating-point numbers are tiny measuring cups with slightly wonky markings","Some decimal fractions cannot be stored exactly in binary. The computer keeps the nearest representable value.","JavaScript Number uses IEEE 754 double-precision binary floating-point, which has finite precision.","Using exact equality for computed decimals or assuming toFixed changes the underlying number."]});
  const STORE_KEY = "scriptly-static-v1";
  const SOLVER_HISTORY_KEY = "scriptly-math-history-v1";
  const referenceItems = [{"title":"Variables","category":"Basics","syntax":"const name = \"Mina\";\\nlet score = 0;","plain":"A named box that holds a value. Use const when you will not reassign it; use let when the value needs to change.","example":"const city = \"Delhi\";"},{"title":"Data types","category":"Basics","syntax":"\"hello\" · 42 · true · null","plain":"Values come in different kinds: strings (text), numbers, booleans (true/false), and special values such as null and undefined.","example":"console.log(typeof 42); // \"number\""},{"title":"console.log()","category":"Basics","syntax":"console.log(value);","plain":"Prints a value to the console so you can see what your program is doing.","example":"console.log(\"Hello!\");"},{"title":"Operators","category":"Logic","syntax":"+  -  *  /  ===  !==  >","plain":"Symbols that calculate or compare values. Prefer === for strict equality checks.","example":"console.log(5 === 5); // true"},{"title":"if / else","category":"Logic","syntax":"if (condition) { } else { }","plain":"Lets your code choose what to do. The first block runs when the condition is true; else handles the other path.","example":"if (score > 0) console.log(\"Go!\");"},{"title":"Loops","category":"Logic","syntax":"for (let i = 0; i < 3; i++) { }","plain":"Repeats a block of code. Check the stopping condition so the loop does not run forever.","example":"for (let i = 1; i <= 3; i++) console.log(i);"},{"title":"Functions","category":"Functions","syntax":"function greet(name) { return \"Hi \" + name; }","plain":"A reusable set of instructions. Parameters are input names; return sends a result back.","example":"console.log(greet(\"Sam\"));"},{"title":"Arrow functions","category":"Functions","syntax":"const double = n => n * 2;","plain":"A shorter way to write many functions. Great for small operations and array callbacks.","example":"const double = n => n * 2;"},{"title":"Arrays","category":"Collections","syntax":"const fruits = [\"apple\", \"pear\"];","plain":"An ordered list. Positions start at index 0, so the first item is array[0].","example":"console.log(fruits[0]);"},{"title":"Array methods","category":"Collections","syntax":".map() · .filter() · .find()","plain":"Methods that help work with lists. map transforms items; filter keeps matching items; find returns the first match.","example":"[1, 2, 3].map(n => n * 2);"},{"title":"Objects","category":"Collections","syntax":"const user = { name: \"Mina\" };","plain":"A collection of named properties. Read a property with dot notation or square brackets.","example":"console.log(user.name);"},{"title":"Strings","category":"Basics","syntax":"text.length · text.toUpperCase()","plain":"Strings hold text. Useful tools include length, includes(), slice(), and template literals.","example":"console.log(\"hello\".toUpperCase());"},{"title":"Template literals","category":"Basics","syntax":"`Hello, ${name}`","plain":"Backticks let you insert values inside text using ${...}, often easier to read than joining strings.","example":"const message = \"Score: \" + score;"},{"title":"Scope","category":"Functions","syntax":"{ const localValue = 1; }","plain":"Scope describes where a variable can be used. Variables declared inside a function or block stay local to that area.","example":"function demo() { const secret = 7; }"},{"title":"DOM selection","category":"Browser","syntax":"document.querySelector(\".card\")","plain":"The DOM is the browser's object representation of the page. querySelector finds the first matching element.","example":"const heading = document.querySelector(\"h1\");"},{"title":"Events","category":"Browser","syntax":"button.addEventListener(\"click\", handler)","plain":"Events let your page respond to actions such as clicks, typing, and form submission.","example":"button.addEventListener(\"click\", () => console.log(\"Clicked!\"));"},{"title":"Promises","category":"Functions","syntax":"fetch(url).then(result => ...)","plain":"A Promise represents a result that may arrive later. It can be pending, fulfilled, or rejected.","example":"Promise.resolve(\"done\").then(console.log);"},{"title":"async / await","category":"Functions","syntax":"async function load() { await task(); }","plain":"A readable way to work with Promises. Use try/catch when you need to handle errors from awaited work.","example":"async function start() { const value = await getValue(); }"}];
  const defaults = {completed:[],bookmarks:[],quizPassed:[],minutes:0,theme:"dark",lastLesson:1,visits:[]};
  let state = loadState();
  let currentFilter = "all";
  let activeLesson = 1;
  let toastTimer;
  let lastMathSolution = null;
  let mathHistory = loadMathHistory();
  let calculatorAngleMode = "DEG";
  let calculatorMemory = 0;
  let calculatorHasMemory = false;
  let calculatorAns = 0;

  function loadMathHistory() {
    try {
      const saved = JSON.parse(localStorage.getItem(SOLVER_HISTORY_KEY) || "[]");
      return Array.isArray(saved) ? saved.filter(item => item && typeof item.question === "string" && item.solution && typeof item.solution.answer === "string").slice(0, 8) : [];
    } catch { return []; }
  }
  function saveMathHistory() {
    try { localStorage.setItem(SOLVER_HISTORY_KEY, JSON.stringify(mathHistory.slice(0, 8))); }
    catch { showToast("Calculation history could not be saved in this browser."); }
  }
  function renderMathHistory() {
    const host = $("#mathHistory");
    if (!host) return;
    host.replaceChildren();
    if (!mathHistory.length) {
      const empty = document.createElement("p"); empty.className = "math-history-empty"; empty.textContent = "Your recent calculations will appear here on this device."; host.appendChild(empty); return;
    }
    const heading = document.createElement("h3"); heading.className = "math-history-heading"; heading.textContent = "Recent calculations"; host.appendChild(heading);
    mathHistory.forEach((item, index) => {
      const button = document.createElement("button"); button.type = "button"; button.className = "math-history-item"; button.dataset.mathHistoryIndex = String(index);
      const question = document.createElement("span"); question.className = "math-history-question"; question.textContent = item.question;
      const answer = document.createElement("strong"); answer.className = "math-history-answer"; answer.textContent = item.solution.answer;
      button.append(question, answer); host.appendChild(button);
    });
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return {...defaults};
      const parsed = JSON.parse(raw);
      return {...defaults,...parsed,
        completed:Array.isArray(parsed.completed)?parsed.completed:[],
        projectsCompleted:Array.isArray(parsed.projectsCompleted)?parsed.projectsCompleted:[],
        bookmarks:Array.isArray(parsed.bookmarks)?parsed.bookmarks:[],
        quizPassed:Array.isArray(parsed.quizPassed)?parsed.quizPassed:[],
        visits:Array.isArray(parsed.visits)?parsed.visits:[]
      };
    } catch { return {...defaults}; }
  }
  function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
    catch { showToast("Browser storage is unavailable. You can export your progress as a backup."); }
    renderStats();
  }
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const lessonById = id => lessons.find(lesson => lesson.id === Number(id));
  const completed = id => state.completed.includes(Number(id));
  const bookmarked = id => state.bookmarks.includes(Number(id));
  const progress = () => Math.round(state.completed.length / lessons.length * 100);
  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }
  function setTheme(theme) {
    state.theme = theme;
    document.body.classList.toggle("light", theme === "light");
    $("#themeToggle").textContent = theme === "light" ? "☾" : "☼";
    saveState();
  }
  function renderStats() {
    const count = state.completed.length;
    $("#statCompleted").textContent = count;
    $("#statMinutes").textContent = state.minutes;
    $("#statQuizzes").textContent = state.quizPassed.length;
    $("#statPercent").textContent = progress();
    $("#statLessonBar").style.width = (count / lessons.length * 100) + "%";
    $("#statCourseBar").style.width = progress() + "%";
    $("#navLessonCount").textContent = lessons.length - count;
    $("#streakDays").textContent = calculateStreak();
    renderMiniCurriculum();
  }
  function renderMiniCurriculum() {
    $("#curriculumMini").innerHTML = modules.slice(0,4).map((module,index) => {
      const done = lessons.filter(l=>l.id>=module.range[0]&&l.id<=module.range[1]&&completed(l.id)).length;
      return '<div class="mini-course '+(done===module.range[1]-module.range[0]+1?'done':'')+'" data-module="'+index+'" tabindex="0" role="button"><span class="mini-num">'+(done===module.range[1]-module.range[0]+1?'✓':String(index+1).padStart(2,"0"))+'</span><span>'+escapeHTML(module.title)+'</span></div>';
    }).join("");
  }
  function cardHTML(lesson) {
    const done = completed(lesson.id);
    return '<article class="lesson-card" data-lesson="'+lesson.id+'" tabindex="0" role="button"><div class="card-top"><span class="lesson-symbol '+lesson.tone+'">'+lesson.icon+'</span><span class="lesson-status '+(done?'complete':'')+'">'+(done?'✓ Completed':escapeHTML(lesson.level))+'</span></div><div class="lesson-number">LESSON '+String(lesson.id).padStart(2,"0")+'</div><h3>'+escapeHTML(lesson.title)+'</h3><p>'+escapeHTML(lesson.description)+'</p><div class="lesson-card-bottom"><span><i class="status-dot '+(done?'done':'')+'"></i>'+(done?'Finished':'Not started')+'</span><span>'+lesson.duration+' min &nbsp; ↗</span></div></article>';
  }
  function learningCardHTML(lesson) {
    const done = completed(lesson.id);
    return '<article class="learning-card" data-lesson="'+lesson.id+'" tabindex="0" role="button"><div class="card-top"><span class="lesson-symbol '+lesson.tone+'">'+lesson.icon+'</span><span class="lesson-status '+(done?'complete':'')+'">'+(done?'✓ Completed':'Lesson '+String(lesson.id).padStart(2,"0"))+'</span></div><h3>'+escapeHTML(lesson.title)+'</h3><p>'+escapeHTML(lesson.description)+'</p><div class="card-footer"><span>◷ '+lesson.duration+' min</span><span>'+(done?'Review lesson':'Start lesson →')+'</span></div></article>';
  }
  const weirdBuilds = [
    {emoji:"👻",name:"The Haunted Vending Machine",concept:"STATE + CONDITIONS",theory:"State is the machine's memory: what snacks exist and how many remain. A condition decides whether a purchase is allowed.",experiment:"Try to buy the last biscuit twice. The second purchase should fail instead of inventing a biscuit from the ghost dimension.",label:"inventory + buySnack()",starter:["const inventory = { biscuits: 1, juice: 2 };","","function buySnack(name) {","  if (!inventory[name]) {","    return name + \" is sold out! The ghost wins.\";","  }","  inventory[name]--;","  return \"Enjoy your \" + name + \"!\";","}","","console.log(buySnack(\"biscuits\"));","console.log(buySnack(\"biscuits\"));"].join("\n")},
    {emoji:"🦆",name:"The Alien Compliment Cannon",concept:"ARRAYS + RANDOMNESS",theory:"An array stores a collection. A random index lets the program choose one item without hard-coding the same result every time.",experiment:"Add five compliments, including one for a suspicious duck. Fire the cannon ten times and look for repeated results.",label:"compliments + random pick",starter:["const compliments = [","  \"Your code has excellent eyebrows.\",","  \"A space duck respects your loops.\",","  \"Your variables are emotionally organised.\""," ];","","function fireComplimentCannon() {","  const index = Math.floor(Math.random() * compliments.length);","  return compliments[index];","}","","console.log(fireComplimentCannon());"].join("\n")},
    {emoji:"🌦️",name:"The Dramatic Weather Oracle",concept:"FUNCTIONS + LOGIC",theory:"A function packages a decision so it can be reused. Conditions turn input data into different outcomes.",experiment:"Test temperatures below zero, exactly 20, and above 35. Decide what should happen at the boundaries before running the code.",label:"temperature oracle",starter:["function weatherOracle(celsius) {","  if (celsius < 0) return \"THE SKY HAS BECOME A FREEZER.\";","  if (celsius > 35) return \"THE SUN IS TOASTING YOUR EYEBROWS.\";","  return \"Weather is behaving suspiciously normally.\";","}","","console.log(weatherOracle(-4));","console.log(weatherOracle(22));","console.log(weatherOracle(39));"].join("\n")},
    {emoji:"🐉",name:"The Dragon's Suspicious Chore Ledger",concept:"OBJECTS + LOOPS",theory:"Objects group related properties; arrays hold multiple records. A loop processes each record using the same instructions.",experiment:"Give one chore a gold reward, then calculate the total reward. What happens if a chore has a reward of zero?",label:"chore records + total",starter:["const chores = [","  { task: \"Polish moon\", reward: 5 },","  { task: \"Guard soup\", reward: 2 },","  { task: \"Interview a frog\", reward: 8 }"," ];","","let totalGold = 0;","for (const chore of chores) {","  console.log(chore.task + \": \" + chore.reward + \" gold\");","  totalGold += chore.reward;","}","console.log(\"Total dragon gold:\", totalGold);"].join("\n")},
    {emoji:"🛸",name:"The Time-Travelling To-Do List",concept:"ARRAYS + STATE CHANGES",theory:"A list is data, and methods such as push and filter transform it. Keep one source of truth, then inspect the result after each change.",experiment:"Add a task, mark one as completed by filtering it out, and check whether the original list changed or a new list was made.",label:"tasks + filter()",starter:["const tasks = [","  { text: \"Feed the time worm\", done: false },","  { text: \"Return yesterday's sandwich\", done: true },","  { text: \"Teach a rock JavaScript\", done: false }"," ];","","const unfinished = tasks.filter(task => !task.done);","console.log(\"Tasks still haunting us:\");","unfinished.forEach(task => console.log(\"- \" + task.text));"].join("\n")}
  ];
  let weirdBuildIndex = 0;
  function renderWeirdBuild(index) {
    weirdBuildIndex = (index + weirdBuilds.length) % weirdBuilds.length;
    const build = weirdBuilds[weirdBuildIndex];
    $("#weirdBuildEmoji").textContent = build.emoji;
    $("#weirdBuildConcept").textContent = build.concept;
    $("#weirdBuildName").textContent = build.name;
    $("#weirdBuildTheory").textContent = build.theory;
    $("#weirdBuildExperiment").textContent = build.experiment;
    $("#weirdBuildStarterLabel").textContent = build.label;
    $("#weirdBuildNow").dataset.weirdBuild = String(weirdBuildIndex);
  }
  function renderHome() {
    renderWeirdBuild(weirdBuildIndex);
    const next = lessonById(state.lastLesson) || lessons.find(l=>!completed(l.id)) || lessons[0];
    $("#continueTitle").textContent = completed(next.id) ? "Keep your skills sharp" : next.title;
    $("#continueDescription").textContent = completed(next.id) ? "Revisit a lesson or choose your next challenge." : next.description;
    $("#continueDuration").textContent = next.duration+" min";
    $("#continueButton").dataset.lesson = next.id;
    const recommended = lessons.filter(l=>!completed(l.id)).slice(0,3);
    const items = recommended.length ? recommended : lessons.slice(-3);
    $("#continueGrid").innerHTML = items.map(learningCardHTML).join("");
    $("#roadmapStrip").innerHTML = modules.slice(0,4).map((m,i)=>{
      const count=lessons.filter(l=>l.id>=m.range[0]&&l.id<=m.range[1]&&completed(l.id)).length;
      return '<div class="roadmap-step" data-goto="roadmap" tabindex="0" role="button"><span class="step-icon">'+m.icon+'</span><div><strong>'+escapeHTML(m.title)+'</strong><small>'+count+' / '+(m.range[1]-m.range[0]+1)+' lessons</small></div></div>';
    }).join("");
    renderStats();
  }
  function renderLibrary(target, filter="all", list=lessons) {
    const filtered = list.filter(l => filter==="completed" ? completed(l.id) : filter==="incomplete" ? !completed(l.id) : true);
    $(target).innerHTML = filtered.length ? filtered.map(cardHTML).join("") : '<div class="empty-state"><strong>Nothing here just yet</strong><p>'+(target==="#bookmarkLibrary"?'Bookmark a lesson to keep it here.':'Try another filter or keep learning to fill this list.')+'</p></div>';
    if(target==="#lessonLibrary") $("#lessonResultsCount").textContent = filtered.length+" lesson"+(filtered.length===1?"":"s");
  }
  function renderProjects() {
    const container=$("#projectGrid");
    if(!container)return;
    container.innerHTML=projects.map(p=>{
      const done=Array.isArray(state.projectsCompleted)&&state.projectsCompleted.includes(p.id);
      return '<article class="project-card"><div class="project-card-top"><span class="project-emoji">'+p.emoji+'</span><span class="project-level">'+escapeHTML(p.level)+'</span></div><h2>'+escapeHTML(p.title)+'</h2><p class="project-pitch">'+escapeHTML(p.pitch)+'</p><div class="project-meta"><span>◷ '+escapeHTML(p.time)+'</span><span>'+p.checkpoints.length+' checkpoints</span></div><div class="project-concepts">'+p.concepts.map(x=>'<span>'+escapeHTML(x)+'</span>').join('')+'</div><button class="primary-button project-open" data-project="'+p.id+'">'+(done?'Review completed project':'Open project mission')+' <span>↗</span></button></article>';
    }).join('');
  }
  function renderProjectDetail(id) {
    const p=projects.find(item=>item.id===Number(id));if(!p)return;
    const checkpoints=p.checkpoints.map((step,i)=>'<li><span class="checkpoint-number">'+String(i+1).padStart(2,'0')+'</span><div><strong>'+escapeHTML(step[0])+'</strong><p>'+escapeHTML(step[1])+'</p></div></li>').join('');
    const concepts=p.concepts.map(x=>'<span>'+escapeHTML(x)+'</span>').join('');
    $("#projectDetailBody").innerHTML='<button class="back-link" data-goto="projects">← Back to project arena</button><div class="project-detail-hero"><div class="project-emoji large">'+p.emoji+'</div><div><div class="eyebrow">'+escapeHTML(p.level.toUpperCase())+' · '+escapeHTML(p.time.toUpperCase())+'</div><h1>'+escapeHTML(p.title)+'</h1><p>'+escapeHTML(p.pitch)+'</p></div></div><div class="project-detail-grid"><article class="project-detail-main"><section class="project-theory"><div class="eyebrow">THE BIG IDEA</div><h2>Understand the machine before feeding it code</h2><p>'+escapeHTML(p.goal)+'</p><blockquote>'+escapeHTML(p.analogy)+'</blockquote><div class="project-concepts">'+concepts+'</div></section><section class="project-mission"><div class="eyebrow">YOUR BUILD PLAN</div><h2>Checkpoint by checkpoint</h2><ol>'+checkpoints+'</ol></section><section class="project-starter"><div class="eyebrow">STARTER CODE</div><h2>Messy is allowed. Blank page panic is optional.</h2><p>Copy this starter into the Practice Lab, complete the TODOs, and run it. This is a starting point, not the finished answer.</p><pre><code>'+escapeHTML(p.starter.replace(/\\n/g,"\n"))+'</code></pre><button class="primary-button" data-project-starter="'+p.id+'">Load starter into Practice Lab ↗</button><details class="project-hint"><summary>Give me a hint (not the whole answer)</summary><p>'+escapeHTML(p.hint)+'</p></details></section><section class="project-done"><h2>Boss defeated?</h2><p>'+escapeHTML(p.done)+'</p><button class="complete-button" data-project-complete="'+p.id+'">'+(Array.isArray(state.projectsCompleted)&&state.projectsCompleted.includes(p.id)?'✓ Project marked complete':'Mark project complete')+'</button></section></article><aside class="project-sidebar"><h3>What you are training</h3><p>'+escapeHTML(p.goal)+'</p><h3>Rules of the chaos</h3><ul><li>Try first, hint second, solution last.</li><li>Change one thing at a time.</li><li>Predict output before you run it.</li><li>If it breaks, read the error. Do not sacrifice the laptop.</li></ul><button class="secondary-button" data-goto="learn">Review theory lessons ↗</button></aside></div>';
    showView("projectdetail");location.hash="project-"+p.id;
  }
  function renderRoadmap() {
    $("#roadmapFull").innerHTML = modules.map((m,i)=>{
      const group=lessons.filter(l=>l.id>=m.range[0]&&l.id<=m.range[1]);
      const done=group.filter(l=>completed(l.id)).length;
      return '<article class="roadmap-module"><div class="module-icon">'+m.icon+'</div><div><h3>'+String(i+1).padStart(2,"0")+'. '+escapeHTML(m.title)+'</h3><p>'+escapeHTML(m.desc)+'</p><div class="module-bar"><span style="width:'+(done/group.length*100)+'%"></span></div></div><div class="module-lessons">'+done+' / '+group.length+' complete<br>'+group[0].duration+'+ min each</div></article>';
    }).join("");
  }
  function explainCodeLine(rawLine) {
 const line=rawLine.trim();
 if (!line) return "Blank line. JavaScript ignores it; it is here to make the code easier for humans to read.";
 if (line.startsWith("//")) return "A comment is a note for humans. JavaScript skips it.";
 if (/^console\.(log|info)\(/.test(line)) return "Show the value in the output area so we can see what JavaScript worked out.";
 if (/^(const|let|var)\s+/.test(line)) return "Create a named variable. Think of it as a labelled box that holds a value.";
 if (/^if\s*\(/.test(line)) return "Ask a yes-or-no question. This block runs only if the answer is true.";
 if (/^else\b/.test(line)) return "This is the alternative path when the earlier condition is false.";
 if (/^for\s*\(/.test(line)) return "Start a loop that repeats instructions.";
 if (/^(async\s+)?function\s+/.test(line)) return "Define reusable instructions. They run when we call the function.";
 if (/^return\b/.test(line)) return "Send a result back to the code that called this function.";
 if (/=>/.test(line)) return "This arrow function is a compact way to describe instructions.";
 if (/\.addEventListener\(/.test(line)) return "Tell the page to listen for an event, such as a click.";
 if (/document\.querySelector/.test(line)) return "Find an element on the web page.";
 if (/\.push\(/.test(line)) return "Add an item to the end of a list.";
 if (/\.map\(/.test(line)) return "Make a new list by transforming each item.";
 if (/\.filter\(/.test(line)) return "Keep only the list items that pass a test.";
 if (/\.length\b/.test(line)) return "Get the number of items or characters.";
 if (/\btypeof\b/.test(line)) return "Ask JavaScript what kind of value this is.";
 if (/^\}/.test(line)) return "This closes a code block opened above.";
 return "Read this as one small instruction, then run the example to see what it does.";
  }

  // Every lesson receives a deeper theory path and a topic-specific practical build.
  const workshopProjects = {
    1:["Web page responsibility map","Create a welcome-page plan that separates HTML structure, CSS appearance, and JavaScript behaviour. Add a script that prints three useful facts and explain where the script runs."],
    2:["Console investigation notebook","Write a labelled sequence of console messages, calculations, and comments. Then introduce a typo, diagnose the error, repair it, and document the clue that helped."],
    3:["Personal budget tracker","Store income, expenses, savings goal, and remaining money in variables. Change one input and prove that the resulting total updates correctly."],
    4:["Typed profile card","Represent a profile with text, numeric, boolean, null, and undefined values. Inspect types and add validation for an empty name or invalid age."],
    5:["Checkout calculator","Calculate a basket subtotal, discount, tax, and final price. Use comparisons to decide whether a discount applies and print a clear receipt."],
    6:["Eligibility decision helper","Build a decision tree using age, membership, and permission. Cover each branch, test exact boundaries, and explain why each condition is ordered as it is."],
    7:["Number pattern generator","Print a numbered checklist, total a range, and skip values that match a rule. Trace loop start, condition, update, and stopping point."],
    8:["Reusable receipt functions","Write separate functions for line totals, tax, and receipt formatting. Return values, pass arguments, and test each function with several inputs."],
    9:["Shopping list manager","Use an array to add, remove, search, and count items. Display a numbered list and handle empty lists or missing items safely."],
    10:["Contact book records","Store several contacts as objects, read and update properties, and produce a summary. Handle a missing property and explain the data model."],
    11:["Text and number utility desk","Build utilities to normalize names, search text, round prices, and select the largest score. Test empty strings and decimal boundaries."],
    12:["Debugging case file","Fix a deliberately broken program. Record the symptom, hypothesis, experiment, root cause, repair, and regression test for every bug."],
    13:["Live page text changer","Select a heading, read an input, and update textContent. Add a character counter and explain how JavaScript interacts with the DOM."],
    14:["Accessible click-and-input tool","Use a labelled input and real button. Respond to click/input/submit events, validate input, and show useful feedback without reloading."],
    15:["Private counter and method lab","Create a counter factory with private state, then compare normal and arrow functions in an object-method example. Test separate instances."],
    16:["Async loading simulator","Simulate delayed data with a Promise, await it, and handle rejection. Show loading, success, and failure states and explain what await pauses."],
    17:["Modern syntax refactor","Refactor an object-and-array script using destructuring, spread, optional chaining, and template literals where they improve clarity. Test missing data."],
    18:["Three-project portfolio sprint","Build a quiz, a text helper, and a notes list. Plan, implement, test, debug, and then add one feature to each."],
    19:["Expression evaluator worksheet","Predict arithmetic results with and without parentheses, verify precedence and remainder, convert text input to numbers, and explain each step."],
    20:["Temperature and floor tracker","Model readings above and below zero, calculate changes and absolute distance, and explain why negative-number ordering works."],
    21:["Discount, tax, and tip calculator","Calculate discount amount, discounted price, tax, tip, and percentage change. Compare successive percentage changes with examples."],
    22:["Recipe scaler and unit converter","Scale a recipe for different serving counts and convert compatible units. Keep units visible and compare unit prices."],
    23:["Formula rearrangement guide","Translate a word problem into an equation, rearrange a simple formula, substitute known values, and verify the result in the original equation."],
    24:["Input-output function explorer","Build an input/output table for a mathematical rule, connect it to a JavaScript function, and explain domain restrictions and graph behaviour."],
    25:["Scale and root calculator","Calculate powers, roots, and scientific notation. Estimate first, verify with Math methods, and explain the magnitude and rounding."],
    26:["Boolean rule truth table","Create truth tables for AND, OR, NOT, and compound conditions. Test equivalent expressions and explain De Morgan's laws."],
    27:["Binary flag decoder","Convert integers between decimal, binary, and hexadecimal. Use bitwise masks to inspect and switch feature flags."],
    28:["Mini data investigation","Calculate mean, median, range, and simple probability from a dataset. Add an outlier and compare how it changes the summary."],
    29:["Coordinate movement playground","Represent points on a grid, calculate distance, and use sine/cosine to describe circular movement with clear units."],
    30:["Floating-point investigation","Demonstrate 0.1 + 0.2 precision behaviour and implement a justified tolerance-based comparison rather than exact equality."],
    31:["Place-value decomposition","Expand whole numbers into place-value parts, compare large values, and show how moving a digit changes its value."],
    32:["Mental arithmetic and change ledger","Solve addition/subtraction with regrouping and number-line jumps. Estimate first and verify with the inverse operation."],
    33:["Equal-groups visualizer","Model multiplication as equal groups and division as sharing/grouping. Include remainders and check with the inverse operation."],
    34:["Factor and multiple explorer","Find factor pairs, identify primes, and calculate common factors and multiples. Verify every factor divides evenly."],
    35:["Fraction comparison lab","Represent equivalent fractions, simplify, compare unlike denominators, and solve fraction operations with clear working."],
    36:["Rounding and estimation audit","Estimate calculations before solving exactly, round to a stated place, and explain whether the estimate catches implausible answers."],
    37:["Real-life percentage report","Calculate sale prices, growth, decline, and percentage change for a fictional shop. Identify the correct starting value."],
    38:["Rate and conversion dashboard","Compare unit prices, speed, and quantities in different units. Convert before comparing and include units in every result."],
    39:["Translate words into algebra","Turn sentences into expressions, combine like terms, substitute values, and explain coefficients versus constants."],
    40:["Equation and inequality solver notebook","Solve multi-step equations and inequalities, verify equations by substitution, and show solution ranges on a number line."],
    41:["Room measurement planner","Calculate perimeter, area, and volume for a room or box. Choose the correct formula and use squared/cubed units."],
    42:["Word-problem translation journal","For each story, list known facts, unknown, units, estimate, operation plan, answer, and a reasonableness check."],
    43:["Data transformation pipeline","Use map, filter, and reduce on records to transform values, select matches, and calculate a summary without accidental mutation."],
    44:["Recursive tree walker","Write a recursive function over nested data with a base case and smaller recursive step. Trace the call stack and compare an iterative version."],
    45:["Prototype lookup detective","Create related objects and inspect inherited properties. Compare own properties with prototype-chain lookup."],
    46:["System design with composition","Model related entities with classes where useful, then compose smaller behaviours. Explain the design choice and test valid state."],
    47:["Custom iterable and generator","Create a generator that yields values lazily, consume it with for...of, and inspect how execution pauses and resumes."],
    48:["Module-based utility toolkit","Split a small app into modules with named exports/imports. Separate pure calculations from browser interaction."],
    49:["Input validation with regular expressions","Create and test patterns for text formats. Explain anchors, character classes, groups, flags, and edge cases."],
    50:["Collection choice benchmark","Use Set for unique values and Map for keyed records. Compare lookup needs and explain weak-collection limitations."],
    51:["Event-loop prediction lab","Predict output order for synchronous logs, Promise callbacks, and timers. Run it and explain stack, microtasks, and tasks."],
    52:["Resilient API viewer","Use fetch, check response.ok, parse JSON, and render loading/success/empty/error states. Distinguish network failures from HTTP errors."],
    53:["Safe notes application","Persist non-sensitive notes, handle invalid stored JSON, and render user text safely with textContent rather than raw HTML."],
    54:["Test and profile a utility","Test normal, boundary, and invalid inputs. Measure a baseline before optimization and add a regression test for a bug."],
    55:["Power-and-log scale explorer","Convert scientific notation, powers, roots, and logarithms. Check inverse relationships and explain the scale of each answer."],
    56:["Sequence pattern investigator","Generate arithmetic and geometric sequences, identify their rules, and calculate partial sums for a chosen number of terms."],
    57:["Graph transformation sketchbook","Create a value table, sketch a function, and show how shifts/scaling change its coordinates. Label axes and restrictions."],
    58:["Two-equation planning problem","Translate a two-variable story into simultaneous equations and solve by substitution and elimination. Check the answer in both equations."],
    59:["Polynomial simplifier and factor hunt","Combine like terms, multiply simple polynomials, and factor common patterns. Verify factorization by expanding."],
    60:["Quadratic model explorer","Solve quadratics, interpret the discriminant and roots, and connect the equation to the shape of a parabola."],
    61:["Absolute-distance range planner","Solve absolute-value equations/inequalities and express the answer as intervals or number-line regions."],
    62:["Map-coordinate analysis","Calculate slope, midpoint, and distance between points. Explain coordinate order, units, and vertical-line behaviour."],
    63:["Vector movement simulator","Add vectors, calculate magnitude and dot products, and interpret direction, alignment, and perpendicularity."],
    64:["Matrix transformation notebook","Perform compatible matrix operations and transform coordinate points. Respect dimensions and explain multiplication order."],
    65:["Counting without listing everything","Solve arrangement and selection problems with permutations/combinations and state whether order and repetition matter."],
    66:["Evidence-updating probability case","Use prior rates and test accuracy to calculate conditional probability. Explain why P(A|B) differs from P(B|A)."],
    67:["Dataset summary and distribution report","Calculate centre and spread, describe outliers and shape, and avoid overclaiming from a small sample."],
    68:["Limit and continuity explorer","Compare values approaching a point from both sides with the function's value at the point. Explore holes and jumps."],
    69:["Rate-of-change investigation","Estimate slopes, apply the power rule, and interpret derivative units as instantaneous rates in a real situation."],
    70:["Accumulation and area model","Approximate area with rectangles, relate accumulation to integrals, and verify simple antiderivatives by differentiating."],
    71:["Circle and wave lab","Convert degrees/radians, use unit-circle values, and sketch one sine/cosine cycle with key points labelled."],
    72:["Complex-number calculator","Add, subtract, and multiply a+bi values using i² = -1. Explain real and imaginary parts separately."],
    73:["Graph and path explorer","Represent a graph with nodes and edges, investigate paths/connectivity, and compare adjacency lists with matrices."],
    74:["Approximation and error report","Calculate absolute/relative error, investigate a simple iterative estimate, and justify the precision reported."],
    75:["Compound-growth forecast","Compare simple and compound interest, model periodic growth, and account for inflation when interpreting purchasing power."],
  };
  function buildLessonStudio(lesson) {
    const theory = theoryNotes[lesson.id] || theoryNotes[1];
    const project = workshopProjects[lesson.id] || ["Topic practice project", "Apply the central idea in a small, testable task."];
    const escape = value => String(value == null ? "" : value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
    const deepSections = lesson.sections.map((section,index) => {
      const questions = ["What problem does this idea solve?","Which rule must remain true?","What can go wrong at the edges?","How would you justify the result?"];
      const actions = [
        "Identify the input, the rule, and the output. Explain why the rule is appropriate instead of merely repeating the definition.",
        "Change one input and predict the result before running the code or calculation. Compare your prediction with the observed result.",
        "Test a boundary case such as zero, an empty value, one item, an exact threshold, or an endpoint. Explain whether the behaviour is expected.",
        "Give a real-world example, name one limitation, and explain what evidence would convince you that your answer is correct."
      ];
      return '<details class="deep-topic" '+(index===0?'open':'')+'><summary><span>'+String(index+1).padStart(2,"0")+'</span><strong>'+escape(section[0])+'</strong></summary><div class="deep-topic-content"><p>'+escape(section[1])+'</p><h4>Reason about it</h4><p>'+questions[index%questions.length]+' Do not skip the reasoning: describe the inputs, the rule being applied, and the expected result.</p><h4>Practical check</h4><p>'+actions[index%actions.length]+'</p></div></details>';
    }).join("");
    const milestones = lesson.sections.slice(0,4).map((section,index) => '<li><span class="studio-step-number">'+(index+1)+'</span><div><strong>'+escape(["Plan the model","Build the core","Test the behaviour","Explain the design"][index])+'</strong><p>Use <b>'+escape(section[0])+'</b> as a requirement: '+escape(section[1])+' Record what you tried and what changed.</p></div></li>').join("");
    return '<section class="deep-study"><div class="eyebrow">GO BEYOND THE SNIPPET</div><h2>Deep theory: understand the machinery</h2><p class="deep-study-lead">A snippet demonstrates one moment. Mastery means understanding the model, the rules, the failure cases, and when the idea is useful. Work through the topics below rather than rushing to the quiz.</p><div class="deep-theory-grid"><article><span class="deep-card-label">THE MENTAL MODEL</span><h3>'+escape(theory[0])+'</h3><p>'+escape(theory[1])+'</p></article><article><span class="deep-card-label">THE FORMAL IDEA</span><h3>What is happening under the hood?</h3><p>'+escape(theory[2])+'</p></article><article><span class="deep-card-label">THE FAILURE MODE</span><h3>Common trap</h3><p>'+escape(theory[3])+'</p></article></div><h3 class="deep-subheading">Unpack every lesson objective</h3><p class="deep-muted">Open each topic. Read the explanation, answer the reasoning question, and complete the practical check. This is a study path, not a glossary to skim.</p>'+deepSections+'<div class="reasoning-routine"><h3>A repeatable reasoning routine</h3><ol><li><strong>State the goal.</strong> What question are you answering or what behaviour should the program produce?</li><li><strong>Identify the inputs.</strong> List values, assumptions, units, and missing information.</li><li><strong>Apply one rule at a time.</strong> Explain why each step is valid instead of jumping to the answer.</li><li><strong>Check independently.</strong> Use a second example, inverse operation, boundary case, or hand calculation.</li><li><strong>Explain the limitation.</strong> Say when the method would fail or need extra validation.</li></ol></div></section><section class="lesson-studio"><div class="eyebrow">PRACTICE IS THE MAIN EVENT</div><h2>Practical studio: '+escape(project[0])+'</h2><p class="deep-study-lead">'+escape(project[1])+'</p><div class="studio-outcome"><strong>Definition of done</strong><p>It works for ordinary inputs, handles at least one edge case, can be explained step by step, and has been checked with more than one test.</p></div><h3 class="deep-subheading">Build it in stages</h3><ol class="studio-milestones">'+milestones+'</ol><div class="studio-task-grid"><article><span class="deep-card-label">TASK A · MODIFY</span><h3>Change the example</h3><p>Change at least three inputs or rules. Before each run, write your prediction; after running it, explain any difference.</p></article><article><span class="deep-card-label">TASK B · DEBUG</span><h3>Break it safely, then repair it</h3><p>Introduce one small mistake: a wrong boundary, misspelled name, incorrect condition, wrong unit, or invalid assumption. Observe the symptom, locate the cause, fix it, and rerun your tests.</p></article><article><span class="deep-card-label">TASK C · TRANSFER</span><h3>Use a new scenario</h3><p>Apply the same idea to a new set of inputs or a realistic situation. Explain which parts of the method stay the same and which must change.</p></article></div><div class="studio-testbox"><h3>Required test checklist</h3><ul><li>☐ One ordinary, expected input</li><li>☐ A boundary value (zero, one item, empty input, exact threshold, or endpoint)</li><li>☐ An unusual or invalid input, with a sensible response</li><li>☐ A second independent check of the answer</li><li>☐ A short explanation of why the result is correct</li></ul></div><div class="studio-stretch"><strong>🚀 Stretch challenge</strong><p>Extend the project with one additional feature, test it with at least two new cases, and explain the trade-off or new edge case it introduces.</p></div><div class="studio-actions"><button type="button" class="primary-button" id="loadStudioStarter">Load lesson code into practice lab ↗</button><span>The snippet is only the starting point. Complete the project tasks before calling it done.</span></div><details class="studio-reflection"><summary>Finish with a proper learner report</summary><ol><li>What concept did you use, and why was it appropriate?</li><li>What was the hardest bug or calculation mistake?</li><li>Which test gave you the most useful evidence?</li><li>What would you improve if another person had to use this?</li></ol></details></section>';
  }

  function renderLesson(id) {
    const lesson=lessonById(id);
    if(!lesson) return;
    activeLesson=lesson.id; state.lastLesson=lesson.id;
    const done=completed(lesson.id), saved=bookmarked(lesson.id);
    const code = lesson.code;
    const codeBreakdown = code.split("\n").map((line,index)=>'<div class="code-explain-row"><span class="code-line-number">'+(index+1)+'</span><code>'+escapeHTML(line || " ")+'</code><p>'+escapeHTML(explainCodeLine(line))+'</p></div>').join("");
    const theory=theoryNotes[lesson.id]||theoryNotes[1];
    const lessonStudio=buildLessonStudio(lesson);
    const theoryBlock='<section class="chaos-theory"><div class="eyebrow">THE CHAOTIC THEORY CORNER</div><h2>'+escapeHTML(theory[0])+'</h2><p>'+escapeHTML(theory[1])+'</p><details><summary>Okay, but what is the actual computer-science idea?</summary><p>'+escapeHTML(theory[2])+'</p></details><div class="theory-trap"><strong>💥 Classic faceplant</strong><p>'+escapeHTML(theory[3])+'</p></div><div class="theory-exercise"><strong>🧪 Tiny brain experiment</strong><p>Before running the example, predict what it will do. Then change one value, run it again, and explain the difference in your own words.</p></div></section>';
    const sections=lesson.sections.map((section,i)=>'<section class="teaching-step"><div class="step-label">STEP '+String(i+1).padStart(2,"0")+'</div><h2>'+escapeHTML(section[0])+'</h2><p>'+escapeHTML(section[1])+'</p>'+(i===0?'<div class="example-box"><div class="example-top"><span>OUR EXAMPLE</span><span>JavaScript</span></div><pre><code>'+escapeHTML(code)+'</code></pre><div class="expected-output">▶ What you should see: '+escapeHTML(lesson.output)+'</div><div class="example-actions"><button type="button" class="small-ghost" id="tryLessonCode">Try this in the practice lab ↗</button></div><details class="code-detective"><summary>Explain every line to me</summary><div class="code-breakdown">'+codeBreakdown+'</div></details></div>':'')+'</section>').join("");
    const quiz=lesson.quiz;
    const already=state.quizPassed.includes(lesson.id);
    $("#lessonDetail").innerHTML = '<div class="lesson-detail-header"><div class="eyebrow">LESSON '+String(lesson.id).padStart(2,"0")+' / '+String(lessons.length).padStart(2,"0")+' · '+escapeHTML(lesson.unit.toUpperCase())+'</div><h1>'+escapeHTML(lesson.title)+'</h1><p>'+escapeHTML(lesson.intro)+'</p><div class="zero-knowledge-note"><span class="zero-note-icon">✳</span><div><strong>Starting from zero? Perfect.</strong><p>No programming experience is expected. Read slowly, try the example, and come back to any word that feels new.</p></div></div><div class="hero-meta"><span>◷ <b>'+lesson.duration+' minutes</b></span><span>▤ '+escapeHTML(lesson.level)+'</span></div></div><div class="lesson-content-grid"><article class="lesson-body"><div class="teaching-promise"><span>🧸</span><div><strong>Super-simple mode</strong><p>One idea at a time. No memorising. If a word sounds confusing, we will explain it.</p></div></div><h2 class="lesson-section-title">Let’s make it simple</h2><p class="lesson-first-explanation">'+escapeHTML(lesson.intro)+'</p>'+sections+theoryBlock+lessonStudio+'<div class="quiz-box"><div class="quiz-kind">NO PRESSURE · JUST PRACTICE</div><h3>Quick check <span style="color:var(--muted);font-weight:400;font-size:10px">· one question</span></h3><p style="color:var(--text)">'+escapeHTML(quiz.q)+'</p><div class="quiz-options">'+quiz.options.map((option,i)=>'<button class="quiz-option" data-answer="'+i+'">'+escapeHTML(option)+'</button>').join("")+'</div><div class="quiz-feedback" id="quizFeedback">'+(already?'✓ You passed this quick check before. Try it again for practice.':'Choose an answer to check your understanding.')+'</div></div><div class="lesson-nav"><button id="prevLesson" '+(lesson.id===1?'disabled':'')+'>← Previous</button><button id="nextLesson" '+(lesson.id===lessons.length?'disabled':'')+'>Next lesson →</button></div></article><aside class="lesson-aside"><h3>Your lesson progress</h3><div class="aside-progress"><span style="width:'+(done?100:0)+'%"></span></div><p>'+(done?'Lesson completed. Nice work!':'Read the lesson and try the quick check.')+'</p><button class="complete-button" id="markComplete">'+(done?'✓ Completed — mark again':'Mark lesson complete')+'</button><button class="bookmark-button '+(saved?'saved':'')+'" id="bookmarkLesson">'+(saved?'♥ Saved to bookmarks':'♡ Save this lesson')+'</button><hr style="border:0;border-top:1px solid var(--line);margin:18px 0"><h3>Learning tip</h3><p>Type the example yourself, then change one small part. Predict what will happen before you run it.</p><button class="secondary-button" data-goto="practice">Open practice lab ↗</button></aside></div>';
    saveState();
    location.hash="lesson-"+lesson.id;
  }
  let referenceFilter = "all";
  function renderReference() {
    const query = ($("#referenceSearch")?.value || "").trim().toLowerCase();
    const matches = referenceItems.filter(item => {
      const categoryMatch = referenceFilter === "all" || item.category === referenceFilter;
      const queryMatch = !query || (item.title+" "+item.category+" "+item.syntax+" "+item.plain+" "+item.example).toLowerCase().includes(query);
      return categoryMatch && queryMatch;
    });
    $("#referenceGrid").innerHTML = matches.length ? matches.map(item =>
      '<article class="reference-card"><div class="reference-card-top"><span class="reference-category">'+escapeHTML(item.category)+'</span><button class="reference-copy" type="button" data-copy-example="'+escapeHTML(item.title)+'" aria-label="Copy '+escapeHTML(item.title)+' example">Copy example</button></div><h2>'+escapeHTML(item.title)+'</h2><pre><code>'+escapeHTML(item.syntax)+'</code></pre><p>'+escapeHTML(item.plain)+'</p><div class="reference-example"><span>EXAMPLE</span><code>'+escapeHTML(item.example)+'</code></div></article>'
    ).join("") : '<div class="empty-state"><strong>No matching concepts</strong><p>Try a shorter search or choose another category.</p></div>';
    $("#referenceCount").textContent = matches.length+" concept"+(matches.length===1?"":"s")+" shown";
  }
  function fmtMath(n){if(!Number.isFinite(n))throw new Error("The answer is not a finite real number.");if(Object.is(n,-0))n=0;return Number(n.toPrecision(12)).toString();}
  function arithmeticMath(src){
    const tokens=src.match(/(?:\d+(?:\.\d*)?|\.\d+)|(?:[a-zA-Z]+)|[()+\-*/%^,]/g)||[],compact=src.replace(/\s+/g,"");
    if(tokens.join("")!==compact)throw new Error("Unknown character. Use numbers, + - * / % ^, brackets, pi, e, or a supported function.");
    let i=0;const peek=()=>tokens[i],take=()=>tokens[i++];
    const expr=()=>{let node=term();while(peek()==="+"||peek()==="-"){const op=take();node={type:"binary",op,left:node,right:term()};}return node;};
    const term=()=>{let node=unary();while(["*","/","%"].includes(peek())){const op=take();node={type:"binary",op,left:node,right:unary()};}return node;};
    const unary=()=>{if(peek()==="+"){take();return {type:"unary",op:"+",value:unary()};}if(peek()==="-"){take();return {type:"unary",op:"-",value:unary()};}return power();};
    const power=()=>{let node=primary();if(peek()==="^"){take();node={type:"binary",op:"^",left:node,right:unary()};}return node;};
    const primary=()=>{
      const t=take();if(t===undefined)throw new Error("The expression is incomplete.");
      if(t==="("){const node=expr();if(take()!==")")throw new Error("A closing ) is missing.");return {type:"group",value:node};}
      if(/^(?:\d|\.)/.test(t))return {type:"number",value:Number(t),label:t};
      if(/^[a-z]+$/i.test(t)){
        const name=t.toLowerCase();if(name==="pi")return {type:"number",value:Math.PI,label:"π"};if(name==="e")return {type:"number",value:Math.E,label:"e"};
        if(peek()==="("){take();const args=[expr()];if(peek()===","){take();args.push(expr());}if(take()!==")")throw new Error("A function call needs a closing ).");const allowed=["sqrt","abs","sin","cos","tan","log","ln","floor","ceil","round","min","max"];if(!allowed.includes(name))throw new Error("Unknown function "+name+". Try sqrt, abs, sin, cos, tan, log, ln, floor, ceil, round, min, or max.");if(["min","max"].includes(name)&&args.length!==2)throw new Error(name+" needs two values, e.g. "+name+"(3, 7).");return {type:"function",name,args};}
        throw new Error("Unknown name "+t+". Use pi, e, or a supported function.");
      }
      throw new Error("Expected a number or an opening bracket.");
    };
    const tree=expr();if(i<tokens.length)throw new Error("I could not use everything after "+tokens[i]+". Check the operators.");
    const steps=[];
    const show=n=>fmtMath(n);
    const evaluate=node=>{
      if(node.type==="number")return node.value;
      if(node.type==="group"){const value=evaluate(node.value);steps.push("Evaluate the parentheses: ("+show(value)+") = "+show(value)+".");return value;}
      if(node.type==="unary"){const v=evaluate(node.value),result=node.op==="-"?-v:v;steps.push((node.op==="-"?"Apply the negative sign: −":"Apply the positive sign: +")+show(v)+" = "+show(result)+".");return result;}
      if(node.type==="binary"){
        const a=evaluate(node.left),b=evaluate(node.right);
        if((node.op==="/"||node.op==="%")&&b===0)throw new Error("Division by zero is not allowed.");
        const ops={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"find the remainder of","^":"raise to the power"};
        const result=node.op==="+"?a+b:node.op==="-"?a-b:node.op==="*"?a*b:node.op==="/"?a/b:node.op==="%"?a%b:Math.pow(a,b);
        if(!Number.isFinite(result))throw new Error("This operation does not produce a finite real number.");
        const symbol=node.op==="*"?"×":node.op==="/"?"÷":node.op==="^"?"^":node.op;
        steps.push(" "+ops[node.op].charAt(0).toUpperCase()+ops[node.op].slice(1)+": "+show(a)+" "+symbol+" "+show(b)+" = "+show(result)+".");
        return result;
      }
      const args=node.args.map(evaluate),x=args[0],y=args[1];
      const f={sqrt:()=>Math.sqrt(x),abs:()=>Math.abs(x),sin:()=>Math.sin(x),cos:()=>Math.cos(x),tan:()=>Math.tan(x),log:()=>Math.log10(x),ln:()=>Math.log(x),floor:()=>Math.floor(x),ceil:()=>Math.ceil(x),round:()=>Math.round(x),min:()=>Math.min(x,y),max:()=>Math.max(x,y)};
      const result=f[node.name]();if(!Number.isFinite(result))throw new Error(node.name+" does not produce a finite real result for these inputs.");
      steps.push("Evaluate "+node.name+"("+args.map(show).join(", ")+") = "+show(result)+".");return result;
    };
    const value=evaluate(tree);
    return {value,steps};
  }
  function linearMath(src){
    const sides=src.split("=");if(sides.length!==2)throw new Error("Write one equation with one equals sign, e.g. 2x + 3 = 11.");
    function parse(s){
      s=s.toLowerCase().replace(/\s+/g,"").replace(/(\d|x|\))(?=x|\()/g,"$1*").replace(/x(?=\d|\()/g,"x*");
      const t=s.match(/(?:\d+(?:\.\d*)?|\.\d+)|x|[()+\-*/]/g)||[];if(t.join("")!==s)throw new Error("Use numbers, x, +, -, *, / and brackets in equations.");let i=0;const peek=()=>t[i],take=()=>t[i++];
      const add=(u,v)=>({a:u.a+v.a,b:u.b+v.b}),sub=(u,v)=>({a:u.a-v.a,b:u.b-v.b});
      const mul=(u,v)=>{if(u.a&&v.a)throw new Error("This solver handles linear equations only, not x multiplied by x.");return {a:u.a*v.b+v.a*u.b,b:u.b*v.b};};
      const div=(u,v)=>{if(v.a)throw new Error("The divisor cannot contain x in this linear solver.");if(!v.b)throw new Error("Division by zero is not allowed.");return {a:u.a/v.b,b:u.b/v.b};};
      function atom(){const z=take();if(z==="x")return {a:1,b:0};if(z==="+")return atom();if(z==="-"){const v=atom();return {a:-v.a,b:-v.b};}if(z==="("){const v=expr();if(take()!==")")throw new Error("A closing ) is missing.");return v;}if(z!==undefined&&/^(?:\d|\.)/.test(z))return {a:0,b:Number(z)};throw new Error("Could not read part of the equation.");}
      function product(){let v=atom();while(peek()==="*"||peek()==="/"){const op=take(),r=atom();v=op==="*"?mul(v,r):div(v,r);}return v;}
      function expr(){let v=product();while(peek()==="+"||peek()==="-"){const op=take(),r=product();v=op==="+"?add(v,r):sub(v,r);}return v;}
      const v=expr();if(i<t.length)throw new Error("Could not read the whole equation.");return v;
    }
    const l=parse(sides[0]),r=parse(sides[1]),coef=l.a-r.a,constant=r.b-l.b;
    if(Math.abs(coef)<1e-12)throw new Error(Math.abs(constant)<1e-12?"Both sides match for every x; there are infinitely many solutions.":"There is no solution because the x terms cancel but the constants do not.");
    const x=constant/coef;return {title:"Linear equation",answer:"x = "+fmtMath(x),steps:["Left side: "+fmtMath(l.a)+"x + "+fmtMath(l.b)+". Right side: "+fmtMath(r.a)+"x + "+fmtMath(r.b)+".","Move x terms to the left and constants to the right.","So "+fmtMath(coef)+"x = "+fmtMath(constant)+".","Divide both sides by "+fmtMath(coef)+": x = "+fmtMath(x)+"."]};
  }
  function gcdMath(a,b){a=Math.abs(Math.round(a));b=Math.abs(Math.round(b));while(b){const r=a%b;a=b;b=r;}return a||1;}
  function ratioMath(src){
    const s=src.toLowerCase().replace(/simplify|ratio|solve|please|what is/g,"").trim(),p=s.match(/^(-?\d+(?:\.\d+)?)\s*:\s*(-?\d+(?:\.\d+)?)\s*=\s*(-?\d+(?:\.\d+)?)\s*:\s*x$/);
    if(p){const [a,b,c]=p.slice(1).map(Number);if(a===0)throw new Error("The first number cannot be zero in this proportion.");const x=b*c/a;return {title:"Ratio / proportion",answer:"x = "+fmtMath(x),steps:["Write the proportion as a / b = c / x.","Cross-multiply: a × x = b × c.","x = ("+fmtMath(b)+" × "+fmtMath(c)+") / "+fmtMath(a)+".","Therefore x = "+fmtMath(x)+"."]};}
    const m=s.match(/^(-?\d+)\s*:\s*(-?\d+)$/);if(!m)throw new Error("Try a ratio like 12:18, or a proportion like 2:3 = 8:x.");const a=Number(m[1]),b=Number(m[2]),g=gcdMath(a,b);return {title:"Ratio simplification",answer:"Simplified ratio: "+a/g+":"+b/g,steps:["Start with "+a+":"+b+".","Greatest common divisor: "+g+".","Divide both sides by "+g+" to get "+a/g+":"+b/g+"."]};
  }
  function quadraticMath(src){
    const s=src.toLowerCase().replace(/\s+/g,"").replace(/²/g,"^2").replace(/−/g,"-");
    const sides=s.split("=");if(sides.length!==2)throw new Error("Write a quadratic equation like x^2 - 5x + 6 = 0.");
    function coeff(part,sign){
      let a=0,b=0,c=0,expr=part.replace(/-/g,"+-");if(expr.startsWith("+"))expr=expr.slice(1);
      for(let term of expr.split("+").filter(Boolean)){
        let kind=term.includes("x^2")?2:term.includes("x")?1:0;
        let z=kind===2?term.replace("x^2",""):kind===1?term.replace("x",""):term;
        if(z==="")z="1";if(z==="-")z="-1";const n=Number(z);
        if(!Number.isFinite(n))throw new Error("Use a standard quadratic such as x^2 - 5x + 6 = 0.");
        if(kind===2)a+=sign*n;else if(kind===1)b+=sign*n;else c+=sign*n;
      }return {a,b,c};
    }
    const l=coeff(sides[0],1),r=coeff(sides[1],-1),a=l.a+r.a,b=l.b+r.b,c=l.c+r.c;
    if(Math.abs(a)<1e-12)throw new Error("No x² term found. Choose linear equations for a linear equation.");
    let d=b*b-4*a*c;const tolerance=Number.EPSILON*16*(b*b+Math.abs(4*a*c));if(d<0&&Math.abs(d)<=tolerance)d=0;const steps=["Write as ax² + bx + c = 0: a = "+fmtMath(a)+", b = "+fmtMath(b)+", c = "+fmtMath(c)+".","Discriminant D = b² − 4ac = "+fmtMath(b)+"² − 4("+fmtMath(a)+")("+fmtMath(c)+") = "+fmtMath(d)+".","Quadratic formula: x = (−b ± √D) / (2a)."];
    if(d<0)return {title:"Quadratic equation",answer:"No real roots (two complex roots)",steps:steps.concat(["D is negative, so there are no real-number solutions."])};
    const root=Math.sqrt(d),q=-0.5*(b+(b<0?-root:root));const x1=d===0?-b/(2*a):q/a,x2=d===0?x1:(q===0?-b/(2*a):c/q);
    steps.push("Substitute: x = ("+fmtMath(-b)+" ± √"+fmtMath(d)+") / "+fmtMath(2*a)+".","Solutions: x₁ = "+fmtMath(x1)+" and x₂ = "+fmtMath(x2)+".");
    return {title:"Quadratic equation",answer:Math.abs(x1-x2)<1e-10?"x = "+fmtMath(x1)+" (repeated root)":"x = "+fmtMath(x1)+" or x = "+fmtMath(x2),steps};
  }
  function statisticsMath(src){
    const m=src.match(/^(mean|average|median|mode|range)\s*[: ]?\s*(-?\d+(?:\.\d+)?(?:\s*[,;]\s*-?\d+(?:\.\d+)?)*)$/i);
    if(!m)throw new Error("Try mean 2, 4, 6 or median: 3, 8, 1, 5. Supported: mean, median, mode, range.");
    const method=m[1].toLowerCase(),nums=m[2].split(/[,;]/).map(x=>Number(x.trim())),sorted=[...nums].sort((a,b)=>a-b),sum=nums.reduce((a,b)=>a+b,0);
    let answer,steps=["Data: "+nums.join(", ")+".","Number of values: n = "+nums.length+".","Sorted data: "+sorted.join(", ")+". "];
    if(method==="mean"||method==="average"){answer=fmtMath(sum/nums.length);steps.push("Add values: "+nums.join(" + ")+" = "+fmtMath(sum)+".","Mean = sum ÷ count = "+fmtMath(sum)+" ÷ "+nums.length+" = "+answer+".");}
    else if(method==="median"){const i=Math.floor(sorted.length/2);answer=fmtMath(sorted.length%2?sorted[i]:(sorted[i-1]+sorted[i])/2);steps.push(sorted.length%2?"The middle value is "+answer+".":"Average the two middle values: ("+sorted[i-1]+" + "+sorted[i]+") ÷ 2 = "+answer+".");}
    else if(method==="range"){answer=fmtMath(sorted[sorted.length-1]-sorted[0]);steps.push("Range = largest − smallest = "+sorted[sorted.length-1]+" − "+sorted[0]+" = "+answer+".");}
    else {const counts=new Map();nums.forEach(n=>counts.set(n,(counts.get(n)||0)+1));const max=Math.max(...counts.values()),modes=[...counts].filter(x=>x[1]===max&&max>1).map(x=>x[0]);answer=modes.length?modes.join(", "):"No mode (all values occur once)";steps.push("Count how often each value appears. Most frequent value(s): "+answer+".");}
    return {title:"Statistics: "+method,answer,steps};
  }
  function geometryMath(src){
    const m=src.toLowerCase().match(/^(circle|rectangle|square|triangle)\s*[: ]?\s*(-?\d+(?:\.\d+)?)(?:\s*[,x ]\s*(-?\d+(?:\.\d+)?))?$/i);
    if(!m)throw new Error("Try circle 5 (radius), rectangle 4, 6 (length and width), square 4 (side), or triangle 3, 4 (base and height).");
    const shape=m[1],a=Number(m[2]),b=m[3]===undefined?undefined:Number(m[3]);if(a<=0||(b!==undefined&&b<=0))throw new Error("Measurements must be greater than zero.");
    if(shape==="circle"){return {title:"Circle geometry",answer:"Area = "+fmtMath(Math.PI*a*a)+"; circumference = "+fmtMath(2*Math.PI*a),steps:["Radius r = "+a+".","Area A = πr² = π × "+a+"² = "+fmtMath(Math.PI*a*a)+".","Circumference C = 2πr = 2π × "+a+" = "+fmtMath(2*Math.PI*a)+"."]};}
    if(shape==="square")return {title:"Square geometry",answer:"Area = "+fmtMath(a*a)+"; perimeter = "+fmtMath(4*a),steps:["Side s = "+a+".","Area = s² = "+a+" × "+a+" = "+fmtMath(a*a)+".","Perimeter = 4s = 4 × "+a+" = "+fmtMath(4*a)+"."]};
    if(b===undefined)throw new Error(shape+" needs two measurements separated by a comma.");
    if(shape==="rectangle")return {title:"Rectangle geometry",answer:"Area = "+fmtMath(a*b)+"; perimeter = "+fmtMath(2*(a+b)),steps:["Length = "+a+", width = "+b+".","Area = length × width = "+a+" × "+b+" = "+fmtMath(a*b)+".","Perimeter = 2(length + width) = 2("+a+" + "+b+") = "+fmtMath(2*(a+b))+"."]};
    return {title:"Triangle geometry",answer:"Area = "+fmtMath(a*b/2),steps:["Base = "+a+", perpendicular height = "+b+".","Area = ½ × base × height = ½ × "+a+" × "+b+" = "+fmtMath(a*b/2)+"."]};
  }
  function pythagoreanMath(src){
    const m=src.match(/(-?\d+(?:\.\d+)?)\s*[,; ]\s*(-?\d+(?:\.\d+)?)/);
    if(!m)throw new Error("Enter the two perpendicular sides, e.g. 3, 4.");
    const a=Number(m[1]),b=Number(m[2]);if(a<=0||b<=0)throw new Error("Side lengths must be positive.");
    const sum=a*a+b*b,c=Math.sqrt(sum);
    return {title:"Pythagorean theorem",answer:"Hypotenuse c = "+fmtMath(c),steps:["Perpendicular sides: a = "+a+", b = "+b+".","Pythagorean theorem: a² + b² = c².","Substitute: "+a+"² + "+b+"² = c².","Calculate: "+fmtMath(a*a)+" + "+fmtMath(b*b)+" = "+fmtMath(sum)+".","Take the positive square root: c = √"+fmtMath(sum)+" = "+fmtMath(c)+"."]};
  }
  function interestMath(src,compound){
    const nums=src.match(/-?\d+(?:\.\d+)?/g)||[];if(nums.length<3)throw new Error("Enter principal, annual rate (%), and time in years, e.g. 1000, 5, 2.");
    const p=Number(nums[0]),r=Number(nums[1]),t=Number(nums[2]);if(p<0||r<0||t<0)throw new Error("Values must be zero or greater.");
    const amount=compound?p*Math.pow(1+r/100,t):p*(1+r*t/100),interest=amount-p;
    const steps=compound?["P = "+p+", annual rate = "+r+"%, time = "+t+" years.","Compound amount formula: A = P(1 + r/100)^t.","A = "+p+"(1 + "+r+"/100)^"+t+" = "+fmtMath(amount)+".","Interest = amount − principal = "+fmtMath(interest)+"."]:["P = "+p+", annual rate = "+r+"%, time = "+t+" years.","Simple interest formula: I = Prt/100.","I = "+p+" × "+r+" × "+t+" ÷ 100 = "+fmtMath(interest)+".","Total amount A = P + I = "+fmtMath(amount)+"."];
    return {title:compound?"Compound interest":"Simple interest",answer:"Interest = "+fmtMath(interest)+"; total amount = "+fmtMath(amount),steps};
  }
  function fractionMath(src){
    const m=src.toLowerCase().replace(/simplify|reduce|fraction/g,"").match(/(-?\d+)\s*\/\s*(-?\d+)/);
    if(!m)throw new Error("Enter a fraction to simplify, e.g. 18/24.");
    let n=Number(m[1]),d=Number(m[2]);if(!d)throw new Error("The denominator cannot be zero.");
    const original=n+"/"+d,g=gcdMath(n,d);n/=g;d/=g;if(d<0){n=-n;d=-d;}
    return {title:"Fraction simplification",answer:n+"/"+d+(d===1?" = "+n:""),steps:["Start with "+original+".","Greatest common divisor = "+g+".","Divide numerator and denominator by "+g+".","Simplified fraction = "+n+"/"+d+"."]};
  }
  function discountMath(src){
    const m=src.match(/discount\s+(-?\d+(?:\.\d+)?)\s*[,; ]\s*(-?\d+(?:\.\d+)?)/i);
    if(!m)throw new Error("Enter price and discount percent, e.g. discount 1000, 20.");
    const price=Number(m[1]),rate=Number(m[2]);if(price<0||rate<0||rate>100)throw new Error("Price must be non-negative and discount must be from 0% to 100%.");
    const saved=price*rate/100,total=price-saved;
    return {title:"Discount calculator",answer:"Discount = "+fmtMath(saved)+"; final price = "+fmtMath(total),steps:["Original price = "+fmtMath(price)+".","Discount rate = "+fmtMath(rate)+"%.","Discount amount = price × rate ÷ 100 = "+fmtMath(price)+" × "+fmtMath(rate)+" ÷ 100 = "+fmtMath(saved)+".","Final price = original price − discount = "+fmtMath(price)+" − "+fmtMath(saved)+" = "+fmtMath(total)+"."]};
  }
  function gstMath(src){
    const m=src.match(/gst\s+(-?\d+(?:\.\d+)?)\s*[,; ]\s*(-?\d+(?:\.\d+)?)/i);
    if(!m)throw new Error("Enter price and GST percent, e.g. gst 1000, 18.");
    const price=Number(m[1]),rate=Number(m[2]);if(price<0||rate<0||rate>100)throw new Error("Price must be non-negative and GST must be from 0% to 100%.");
    const tax=price*rate/100,total=price+tax;
    return {title:"GST calculator",answer:"GST amount = "+fmtMath(tax)+"; total including GST = "+fmtMath(total),steps:["Price before GST = "+fmtMath(price)+".","GST rate = "+fmtMath(rate)+"%.","GST = price × rate ÷ 100 = "+fmtMath(price)+" × "+fmtMath(rate)+" ÷ 100 = "+fmtMath(tax)+".","Total including GST = price + GST = "+fmtMath(price)+" + "+fmtMath(tax)+" = "+fmtMath(total)+"."]};
  }
  function normalizeMathQuestion(source){
    let s=String(source||"").trim().toLowerCase();
    if(!s)return s;
    s=s.replace(/[?？]/g," ").replace(/\b(please|can you|could you|would you|tell me|work out|calculate|evaluate|compute|solve|find the value of|find the|calculate the|work out the|what is|what's|whats|how much is|how many is)\b/g," ");
    s=s.replace(/\bthe square root of\s*([+-]?\d+(?:\.\d+)?)/g,"sqrt($1)");
    s=s.replace(/\bsquare root\s*of\s*([+-]?\d+(?:\.\d+)?)/g,"sqrt($1)");
    s=s.replace(/\b([+-]?\d+(?:\.\d+)?)\s*squared\b/g,"($1)^2");
    s=s.replace(/\b([+-]?\d+(?:\.\d+)?)\s*cubed\b/g,"($1)^3");
    s=s.replace(/\bmultiplied by\b|\btimes\b|\bmultiplied\b/g," * ");
    s=s.replace(/\bdivided by\b|\bover\b/g," / ");
    s=s.replace(/\bplus\b|\badded to\b|\badd\b/g," + ");
    s=s.replace(/\bminus\b|\bsubtract\b|\bsubtracted by\b/g," - ");
    s=s.replace(/\bdivided into\b/g," / ");
    s=s.replace(/\bpercent(?:age)?\b/g,"%");
    s=s.replace(/\bof\b/g," of ");
    s=s.replace(/\bpi\b/g,"pi");
    s=s.replace(/\s+/g," ").trim();
    // Translate common school-style word questions into the solver's explicit formats.
    let m=s.match(/(?:area of )?a?\s*circle(?: with)?\s*(?:radius|r)\s*(?:of|=|:)?\s*(-?\d+(?:\.\d+)?)/);
    if(m)return "circle "+m[1];
    m=s.match(/(?:area of )?a?\s*(?:rectangle|rectangular shape)(?: with)?\s*(?:length|l)\s*(?:of|=|:)?\s*(-?\d+(?:\.\d+)?)\s*(?:and|,|by|×|x)\s*(?:width|breadth|w)?\s*(?:of|=|:)?\s*(-?\d+(?:\.\d+)?)/);
    if(m)return "rectangle "+m[1]+", "+m[2];
    m=s.match(/(?:hypotenuse|pythagorean)(?: of a triangle)?(?: with sides)?\s*(-?\d+(?:\.\d+)?)\s*(?:and|,|by)\s*(-?\d+(?:\.\d+)?)/);
    if(m)return "pythagorean "+m[1]+", "+m[2];
    m=s.match(/^(?:find|calculate|work out|what is|the)?\s*(mean|average|median|mode|range)\s+(?:of\s+)?(.+)$/);
    if(m)return m[1]+" "+m[2];
    m=s.match(/(?:simple interest|compound interest)\s+(?:on\s+)?(.+)/);
    if(m)return s.replace(/\b(on|at|for|years?|annual rate|principal|is)\b/g," ").replace(/\s+/g," ").trim();
    // Common word-problem forms become explicit arithmetic before parsing.
    const percentOf=s.match(/^([+-]?\d+(?:\.\d+)?)\s*%\s*of\s*([+-]?\d+(?:\.\d+)?)$/);
    if(percentOf)return percentOf[1]+"% of "+percentOf[2];
    const simplePair=s.match(/^([+-]?\d+(?:\.\d+)?)\s*(?:and)\s*([+-]?\d+(?:\.\d+)?)\s*(more|less|altogether|total)?$/);
    if(simplePair&&simplePair[3])return simplePair[1]+(simplePair[3]==="less"?" - ":" + ")+simplePair[2];
    return s;
  }
  function solveAdvancedMath(original,mode,normalized){
    const raw=String(original||"").trim();
    const hasNerdamer=typeof window.nerdamer==="function";
    const make=(title,answer,steps)=>({title,answer,steps});
    const cleanExpression=x=>String(x||"").trim().replace(/^[:= ]+|[?？]+$/g,"").trim();
    const variableMatch=raw.match(/\b(?:with respect to|respect to|w\.r\.t\.?|with respect|in terms of)\s+([a-zA-Z]\w*)\b/i);
    const variable=variableMatch?variableMatch[1]:"x";
    let m;
    if(/\b(differentiate|derivative|derivative of|differentiate|differentiate the|find the derivative|diff)\b/i.test(raw)){
      if(!hasNerdamer)throw new Error("The symbolic maths engine did not load. Check your internet connection and refresh.");
      let expr=raw.replace(/\b(find the derivative of|find derivative of|derivative of|differentiate the|differentiate|derivative|diff)\b/ig,"").replace(/\b(with respect to|respect to|w\.r\.t\.?|with respect)\s+[a-zA-Z]\w*/ig,"").replace(/[?]/g,"").trim();
      expr=expr.replace(/\by\s*=\s*/i,"").replace(/\bf\s*\(\s*x\s*\)\s*=\s*/i,"");
      if(!expr)throw new Error("Enter an expression to differentiate, e.g. differentiate x^3 + sin(x).");
      const result=nerdamer.diff(expr,variable).toString();
      return make("Symbolic derivative",result,["Start with f("+variable+") = "+expr+".","Apply differentiation rules (power, sum, product, quotient, and chain rules as required).","Differentiate with respect to "+variable+".","Result: d/d"+variable+" ["+expr+"] = "+result+"."]);
    }
    if(/\b(integrate|integral of|find the integral|antiderivative)\b/i.test(raw)){
      if(!hasNerdamer)throw new Error("The symbolic maths engine did not load. Check your internet connection and refresh.");
      let expr=raw.replace(/\b(find the integral of|integral of|integrate|antiderivative of|antiderivative)\b/ig,"").replace(/\b(with respect to|respect to|w\.r\.t\.?|with respect)\s+[a-zA-Z]\w*/ig,"").replace(/[?]/g,"").trim();
      expr=expr.replace(/\by\s*=\s*/i,"").replace(/\bf\s*\(\s*x\s*\)\s*=\s*/i,"");
      if(!expr)throw new Error("Enter an expression to integrate, e.g. integrate x^2.");
      const result=nerdamer.integrate(expr,variable).toString();
      return make("Symbolic integral",result+" + C",["Integrand: "+expr+".","Integrate term by term and apply the appropriate integration rules.","Variable of integration: "+variable+".","Antiderivative: ∫("+expr+") d"+variable+" = "+result+" + C."]);
    }
    if(/\blimit\b/i.test(raw)){
      if(!hasNerdamer)throw new Error("The symbolic maths engine did not load. Check your internet connection and refresh.");
      m=raw.match(/limit\s+(?:of\s+)?(.+?)\s+as\s+([a-zA-Z]\w*)\s*(?:->|→|approaches|tends to)\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+|infinity|∞))/i);
      if(!m)m=raw.match(/limit\s*\(?\s*(.+?)\s*,\s*([a-zA-Z]\w*)\s*,\s*([+-]?\d+(?:\.\d+)?)/i);
      if(!m)throw new Error("Use: limit (sin(x)/x) as x -> 0");
      const result=nerdamer.limit(m[1].trim(),m[2],m[3].replace("∞","infinity")).toString();
      return make("Limit",result,["Expression: "+m[1]+".","Variable: "+m[2]+" approaches "+m[3]+".","Evaluate the symbolic limit using algebraic and limit rules.","Limit = "+result+"."]);
    }
    if(/\b(simplify|simplification|expand|expand out|factor|factorise|factorize|partial fractions|partial fraction)\b/i.test(raw)){
      if(!hasNerdamer)throw new Error("The symbolic maths engine did not load. Check your internet connection and refresh.");
      m=raw.match(/\b(simplify|simplification|expand|expand out|factor|factorise|factorize|partial fractions|partial fraction)\b/i);
      const operation=/^factor/i.test(m[1])? "factor":/^expand/i.test(m[1])?"expand":/^partial/i.test(m[1])?"partfrac":"simplify";
      const expr=cleanExpression(raw.replace(m[0],"").replace(/[?]/g,""));
      if(!expr)throw new Error("Add an expression, e.g. factor x^4 - 1.");
      if(expr.includes(":"))return null;
      const result=nerdamer(operation+"("+expr+")").toString();
      return make(operation==="factor"?"Factorisation":operation==="expand"?"Expansion":operation==="partfrac"?"Partial fractions":"Simplification",[result].join(""),["Original expression: "+expr+".","Apply symbolic "+operation+" rules while preserving the mathematical value.","Result: "+result+"."]);
    }
    const solveIntent=/\b(solve|find roots?|roots? of|solve for|solve the equation)\b/i.test(raw);
    const variableSource=raw.replace(/\b(solve|find roots?|roots? of|solve for|solve the equation)\b/ig,"");
    const equationVariables=[...new Set((variableSource.match(/[a-zA-Z]\w*/g)||[]).filter(name=>!["sin","cos","tan","asin","acos","atan","sqrt","log","ln","exp","abs","pi","e","infinity"].includes(name.toLowerCase())))];
    const nonlinearEquation=raw.includes("=")&&(/\b(?:sin|cos|tan|asin|acos|atan|log|ln|exp)\s*\(/i.test(raw)||/[a-zA-Z]\s*\^\s*[3-9]|[a-zA-Z]³|[a-zA-Z]⁴|[a-zA-Z]⁵/i.test(raw));
    const useSymbolicEquationSolver=solveIntent||(raw.includes("=")&&(mode==="advanced"||nonlinearEquation||equationVariables.length>1));
    if(useSymbolicEquationSolver){
      // Keep the established school-level solver available when the CDN is offline.
      // Only advanced symbolic work should require Nerdamer.
      if(!hasNerdamer){
        if(raw.includes("=")&&!nonlinearEquation&&equationVariables.length<=1)return null;
        throw new Error("The symbolic maths engine did not load. Check your internet connection and refresh.");
      }
      let equation=raw.replace(/\b(solve for|solve the equation|solve|find roots? of|roots? of|find x|find y)\b/ig,"").replace(/[?]/g,"").trim();
      equation=equation.replace(/\bwhere\s+/i,"").trim();
      if(!equation)throw new Error("Enter an equation, e.g. solve x^3 - 6x^2 + 11x - 6 = 0.");
      const eqParts=equation.split(/\s*(?:;|\n|,)\s*/).filter(Boolean);
      const variableNames=[...new Set((equation.match(/[a-zA-Z]\w*/g)||[]).filter(v=>!["sin","cos","tan","sqrt","log","ln","exp","pi","infinity"].includes(v.toLowerCase())))];
      if(eqParts.length>1&&variableNames.length>1&&typeof nerdamer.solveEquations==="function"){
        const result=nerdamer.solveEquations(eqParts).map(x=>String(x)).join("; ");
        return make("Equation system",result||"No solution found by the symbolic solver.",["Equations: "+eqParts.join("; ")+".","Solve the system simultaneously for its variables.","Solver result: "+(result||"No solution found.")+"."]);
      }
      const variableToSolve=variableNames.includes(variable)?variable:(variableNames[0]||"x");
      let result;
      if(equation.includes("=")&&typeof nerdamer.solveEquations==="function"){
        const sides=equation.split("=");
        if(sides.length!==2)throw new Error("Enter one equation at a time, or separate a system with semicolons.");
        result=nerdamer.solveEquations(sides[0]+"-("+sides[1]+")",variableToSolve);
        result=Array.isArray(result)?result.map(x=>String(x)).join(", "):String(result);
      }else if(typeof nerdamer.solve==="function"){
        result=nerdamer.solve(equation,variableToSolve).toString();
      }else{
        result=nerdamer("solve("+equation+","+variableToSolve+")").toString();
      }
      return make("Equation solution",result||"No solution found by the symbolic solver.",["Equation/expression: "+equation+".","Unknown variable: "+variableToSolve+".","Use symbolic algebra and the solver's supported root-finding methods.","Solution: "+(result||"No solution found.")+"."]);
    }
    if(hasNerdamer){
      let expr=normalized||raw;
      expr=expr.replace(/\bwhat is\b|\bcalculate\b|\bevaluate\b|\bcompute\b|\bplease\b/ig,"").replace(/[?]/g,"").trim();
      expr=expr.replace(/(\d)\s*([a-zA-Z])\b/g,"$1*$2").replace(/\)\s*\(/g,")*(");
      expr=expr.replace(/\bAns\b/gi,String(calculatorAns));
      // Convert trig input/output angles when DEG is selected. Parse nested calls
      // by matching parentheses instead of a fragile single regular expression.
      const convertDegreeAngles=expression=>{
        if(calculatorAngleMode!=="DEG")return expression;
        let output="",i=0;
        while(i<expression.length){
          const match=expression.slice(i).match(/^(asin|acos|atan|sin|cos|tan)\s*\(/i);
          if(!match){output+=expression[i];i++;continue;}
          const fn=match[1].toLowerCase(),open=i+match[0].lastIndexOf("(");
          let depth=1,close=open+1;
          for(;close<expression.length&&depth>0;close++){
            if(expression[close]==="(")depth++;
            else if(expression[close]===")")depth--;
          }
          if(depth!==0){output+=expression[i];i++;continue;}
          const argument=convertDegreeAngles(expression.slice(open+1,close-1));
          output+=["asin","acos","atan"].includes(fn)
            ? "(("+fn+"("+argument+"))*180/pi)"
            : fn+"(("+argument+")*pi/180)";
          i=close;
        }
        return output;
      };
      try{
        expr=convertDegreeAngles(expr);
        const evaluated=nerdamer(expr).evaluate();
        const answer=typeof evaluated.text==="function"?evaluated.text():evaluated.toString();
        return make("Mathematical expression",answer,["Expression entered: "+(normalized||raw)+".","Evaluate using the locally bundled symbolic math engine; common arithmetic, powers, constants, and functions are supported.","Angle mode: "+calculatorAngleMode+".","Result: "+answer+"."]);
      }catch(error){
        // Let the existing school-maths solver provide its more specific error.
      }
    }
    return null;
  }
  function solveMathProblem(source,mode){
    const original=String(source||"").trim();
    const s=normalizeMathQuestion(source);if(!s)throw new Error("Type a problem first. The maths goblin cannot solve an empty box.");
    const advanced=solveAdvancedMath(original,mode,s);
    if(advanced)return advanced;
    if(mode==="auto"){
      if(/^compound interest\b/i.test(s))mode="compound-interest";
      else if(/^discount\b/i.test(s))mode="discount";
      else if(/^gst\b/i.test(s))mode="gst";
      else if(/^(simple interest|interest)\b/i.test(s))mode="simple-interest";
      else if(/^(pythagorean|hypotenuse)\b/i.test(s))mode="pythagorean";
      else if(/^simplify\s+-?\d+\s*\/\s*-?\d+/i.test(s)||/^fraction\b/i.test(s))mode="fraction";
      else if(/^(mean|average|median|mode|range)\b/i.test(s))mode="statistics";
      else if(/^(circle|rectangle|square|triangle)\b/i.test(s))mode="geometry";
      else if(s.includes("=")&&/x\s*\^?\s*2|x²/i.test(s))mode="quadratic";
      else if(/%\s*(of|\*|×)/i.test(s)||/\bpercent(age)?\b/i.test(s))mode="percentage";
      else if(s.includes("=")&&/x/i.test(s))mode="equation";
      else if(/:\s*-?\d/.test(s))mode="ratio";
      else mode="arithmetic";
    }
    if(mode==="discount")return discountMath(s);
    if(mode==="gst")return gstMath(s);
    if(mode==="quadratic")return quadraticMath(s);
    if(mode==="statistics")return statisticsMath(s);
    if(mode==="geometry")return geometryMath(s);
    if(mode==="pythagorean")return pythagoreanMath(s.replace(/^(pythagorean|hypotenuse)\s*/i,""));
    if(mode==="simple-interest")return interestMath(s,false);
    if(mode==="compound-interest")return interestMath(s,true);
    if(mode==="fraction")return fractionMath(s);
    if(mode==="percentage"){
      const m=s.match(/(-?\d+(?:\.\d+)?)\s*%\s*(?:of|\*|×)\s*(-?\d+(?:\.\d+)?)/i);
      if(!m)throw new Error("Write a percentage like 15% of 240.");
      const pct=Number(m[1]),base=Number(m[2]),dec=pct/100,result=dec*base;
      return {title:"Percentage calculation",answer:fmtMath(result),steps:["Convert "+pct+"% to a decimal: "+pct+" ÷ 100 = "+fmtMath(dec)+".","Multiply by the original amount: "+fmtMath(dec)+" × "+base+".","Answer: "+fmtMath(result)+"."]};
    }
    if(mode==="equation")return linearMath(s);
    if(mode==="ratio")return ratioMath(s);
    const calculation=arithmeticMath(s),n=calculation.value;
    const steps=["Expression: "+s+".",...calculation.steps.map(step=>step.trim()),"Final answer: "+fmtMath(n)+"."];
    return {title:original&&original!==s?"Math question":"Arithmetic expression",answer:fmtMath(n),steps};
  }
  function renderMathSolution(solution){
    const out=$("#mathSolverOutput");out.replaceChildren();const title=document.createElement("div");title.className="solver-answer-label";title.textContent=solution.title||"Solution";out.appendChild(title);
    const answer=document.createElement("div");answer.className="solver-answer";answer.textContent=solution.answer;out.appendChild(answer);
    const heading=document.createElement("h3");heading.textContent="Step by step";out.appendChild(heading);
    const list=document.createElement("ol");list.className="solver-steps";(solution.steps||[]).forEach(step=>{const li=document.createElement("li");li.textContent=step;list.appendChild(li);});out.appendChild(list);
    $("#mathSolverStatus").textContent="SOLVED";$("#mathSolverStatus").classList.add("solved");
    const copyButton=$("#copyMathSolution");if(copyButton)copyButton.disabled=false;
  }
  function solutionAsText(entry){
    return [entry.solution.title||"Math solution","Problem: "+entry.question,"Answer: "+entry.solution.answer,"","Steps:",...(entry.solution.steps||[]).map((step,index)=>(index+1)+". "+step)].join("\n");
  }
  async function copyMathSolution(){
    if(!lastMathSolution)return;
    const text=solutionAsText(lastMathSolution);
    try{
      if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(text);
      else{
        const helper=document.createElement("textarea");helper.value=text;helper.setAttribute("readonly","");helper.style.position="fixed";helper.style.opacity="0";document.body.appendChild(helper);helper.select();
        const copied=document.execCommand("copy");helper.remove();if(!copied)throw new Error("Copy unavailable");
      }
      showToast("Solution and working copied.");
    }catch{showToast("Could not copy automatically. Select the solution text and copy it.");}
  }
  function runMathSolver(){
    const out=$("#mathSolverOutput");
    try{
      const question=$("#mathProblem").value.trim();
      const solution=solveMathProblem(question,$("#mathMode").value);
      renderMathSolution(solution);
      setCalculatorPreview(String(solution.answer),"SOLVED","valid");
      const numericAnswer=Number(String(solution.answer).replace(/,/g,""));
      if(Number.isFinite(numericAnswer))calculatorAns=numericAnswer;
      lastMathSolution={question,mode:$("#mathMode").value,solution:{title:solution.title||"Solution",answer:String(solution.answer),steps:Array.isArray(solution.steps)?solution.steps.map(String):[]}};
      mathHistory=[lastMathSolution,...mathHistory.filter(item=>item.question!==question)].slice(0,8);
      saveMathHistory();renderMathHistory();
    }catch(error){
      lastMathSolution=null;const copyButton=$("#copyMathSolution");if(copyButton)copyButton.disabled=true;
      out.replaceChildren();const box=document.createElement("div");box.className="solver-error";const title=document.createElement("strong");title.textContent="Not solved yet — no panic.";box.appendChild(title);const message=document.createElement("p");message.textContent=error.message||"Check the format and try again.";box.appendChild(message);const hint=document.createElement("p");hint.textContent="Try: (12 + 8) * 3, 15% of 240, 2x + 3 = 11, or simplify 12:18.";box.appendChild(hint);out.appendChild(box);$("#mathSolverStatus").textContent="CHECK THE FORMAT";$("#mathSolverStatus").classList.remove("solved");
    }
  }
  function clearMathProblem(){
    $("#mathProblem").value="";updateCalculatorPreview();$("#mathSolverOutput").replaceChildren();
    const placeholder=document.createElement("div");placeholder.className="output-placeholder";
    const symbol=document.createElement("span");symbol.textContent="∑";
    const title=document.createElement("strong");title.textContent="Your solution will appear here";
    const hint=document.createElement("p");hint.textContent="Choose an example or type a problem, then press Solve it.";
    placeholder.append(symbol,title,hint);$("#mathSolverOutput").appendChild(placeholder);
    $("#mathSolverStatus").textContent="WAITING FOR A PROBLEM";$("#mathSolverStatus").classList.remove("solved");
    lastMathSolution=null;const copyButton=$("#copyMathSolution");if(copyButton)copyButton.disabled=true;$("#mathProblem").focus();
  }

  function showView(name) {
    const valid=["home","learn","lesson","practice","math","math-solver","responsive","history","projects","projectdetail","roadmap","bookmarks","reference","search"];
    if(!valid.includes(name)) name="home";
    $$(".view").forEach(view=>view.classList.toggle("active",view.id==="view-"+name));
    $$(".nav-link[data-view]").forEach(link=>{const active=link.dataset.view===name || (name==="lesson"&&link.dataset.view==="learn");link.classList.toggle("active",active);if(active)link.setAttribute("aria-current","page");else link.removeAttribute("aria-current");});
    const names={home:"Overview",learn:"My learning",lesson:"Lesson",practice:"Practice lab",roadmap:"Roadmap",bookmarks:"Bookmarks",reference:"Quick reference",search:"Search results",projects:"Project arena",projectdetail:"Project mission",math:"Math for JavaScript","math-solver":"Math problem solver",responsive:"Responsive UI session",history:"History classroom"};
    $("#breadcrumbCurrent").textContent=names[name]||"Overview";
    $("#sidebar").classList.remove("open");$("#mobileOverlay").classList.remove("show");
    if(name==="learn")renderLibrary("#lessonLibrary",currentFilter);
    if(name==="math"){renderLibrary("#mathLessonLibrary","all",lessons.filter(l=>(l.id>=19&&l.id<=42)||(l.id>=55&&l.id<=75)).sort((a,b)=>{const rank=id=>id>=31&&id<=42?id-31:id>=19&&id<=30?id-19+12:id>=55&&id<=75?id-55+24:999;return rank(a.id)-rank(b.id);}));$("#mathLessonCount").textContent=lessons.filter(l=>(l.id>=19&&l.id<=42)||(l.id>=55&&l.id<=75)).length+" math lessons";}
    if(name==="bookmarks")renderLibrary("#bookmarkLibrary","all",lessons.filter(l=>bookmarked(l.id)));
    if(name==="roadmap")renderRoadmap();
    if(name==="reference")renderReference();
    if(name==="projects")renderProjects();
    if(name==="home")renderHome();
    window.scrollTo({top:0,behavior:"smooth"});
  }
  function searchLessons(query) {
    const q=query.trim().toLowerCase();
    if(!q){showView("learn");return;}
    const results=lessons.filter(l=>(l.title+" "+l.description+" "+l.unit+" "+l.intro+" "+l.sections.map(s=>s.join(" ")).join(" ")).toLowerCase().includes(q));
    $("#searchHeading").textContent=results.length+" lesson"+(results.length===1?"":"s")+" matching “"+query.trim()+"”.";
    renderLibrary("#searchResults","all",results);
    showView("search");
  }
  function openLesson(id) {renderLesson(id);showView("lesson");}
  function markComplete(id) {
    id=Number(id);
    if(!completed(id)){state.completed.push(id);state.minutes+=lessonById(id)?.duration||0;saveState();showToast("Lesson completed — nice work!");}
    else showToast("This lesson is already marked complete.");
    renderLesson(id);renderHome();
  }
  function toggleBookmark(id) {
    id=Number(id);
    if(bookmarked(id)){state.bookmarks=state.bookmarks.filter(x=>x!==id);showToast("Removed from bookmarks.");}
    else {state.bookmarks.push(id);showToast("Saved to your bookmarks.");}
    saveState();renderLesson(id);
  }
  function renderOutput(lines) {
    const output=$("#codeOutput");
    output.innerHTML=lines.length?lines.map(line=>'<div class="output-line '+(line.error?'error':'')+'">'+escapeHTML(line.text)+'</div>').join(""):'<div class="output-placeholder"><span>⌁</span><strong>No output yet</strong><p>Your code ran without logging anything.</p></div>';
  }
  function runCode() {
    const code=$("#codeEditor").value;
    $("#codeOutput").innerHTML='<div class="output-placeholder"><span>◌</span><strong>Running your code…</strong></div>';
    const frame=document.createElement("iframe");
    frame.setAttribute("sandbox","allow-scripts");
    frame.setAttribute("title","Isolated JavaScript execution sandbox");
    frame.style.display="none";
    const safeScript = '<meta http-equiv="Content-Security-Policy" content="default-src \'none\'; script-src \'unsafe-inline\' \'unsafe-eval\'; connect-src \'none\'; img-src data:; style-src \'unsafe-inline\'; form-action \'none\'; base-uri \'none\'"><script>const send=(type,args)=>parent.postMessage({source:"scriptly-sandbox",type,args:Array.from(args).map(v=>{try{return typeof v==="string"?v:JSON.stringify(v)??String(v)}catch{return String(v)}})}, "*");console.log=(...args)=>send("log",args);console.info=(...args)=>send("log",args);console.warn=(...args)=>send("warn",args);console.error=(...args)=>send("error",args);window.onerror=(message)=>{send("error",[message]);return true};try{new Function('+JSON.stringify(code)+' )()}catch(error){send("error",[error.name+": "+error.message])}</script>';
    document.body.appendChild(frame);
    let gotMessage=false;
    const listener=(event)=>{
      if(event.source!==frame.contentWindow||!event.data||event.data.source!=="scriptly-sandbox")return;
      gotMessage=true;
      const args=event.data.args||[];
      const line={text:args.join(" "),error:event.data.type==="error"};
      const existing=$$("#codeOutput .output-line");
      const lines=existing.length?existing.map(el=>({text:el.textContent,error:el.classList.contains("error")})):[];
      if($("#codeOutput .output-placeholder")) lines.length=0;
      lines.push(line);renderOutput(lines);
    };
    window.addEventListener("message",listener);
    frame.srcdoc=safeScript;
    setTimeout(()=>{
      window.removeEventListener("message",listener);
      frame.remove();
      if(!gotMessage && !$("#codeOutput .output-line").length)renderOutput([{text:"No output. If your code uses async tasks, wait for the result or try a simple console.log().",error:false}]);
    },900);
  }
  function exportProgress() {
    const payload={app:"Scriptly",version:1,exportedAt:new Date().toISOString(),state};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
    const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="scriptly-progress.json";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    showToast("Progress backup exported.");
  }
  function importProgress(file) {
    if(!file)return;
    const reader=new FileReader();
    reader.onload=()=>{
      try{
        const data=JSON.parse(reader.result);
        const incoming=data.state||data;
        if(!incoming||!Array.isArray(incoming.completed)||!Array.isArray(incoming.bookmarks))throw new Error("Invalid backup");
        state={...defaults,...incoming,
          completed:incoming.completed.map(Number).filter(id=>lessonById(id)),
          bookmarks:incoming.bookmarks.map(Number).filter(id=>lessonById(id)),
          quizPassed:Array.isArray(incoming.quizPassed)?incoming.quizPassed.map(Number).filter(id=>lessonById(id)):[],
          visits:Array.isArray(incoming.visits)?incoming.visits:[]
        };
        saveState();renderHome();showToast("Progress backup imported.");
      }catch{showToast("That file doesn't look like a Scriptly progress backup.");}
      $("#importFile").value="";
    };
    reader.readAsText(file);
  }
  function localDateKey(date=new Date()) {
    return date.getFullYear()+"-"+String(date.getMonth()+1).padStart(2,"0")+"-"+String(date.getDate()).padStart(2,"0");
  }
  function calculateStreak() {
    const visited = new Set(state.visits);
    let cursor = new Date(), count = 0;
    if (!visited.has(localDateKey(cursor))) cursor.setDate(cursor.getDate()-1);
    while (visited.has(localDateKey(cursor)) && count < 366) {
      count++; cursor.setDate(cursor.getDate()-1);
    }
    return count;
  }
  function recordVisit() {
    const today=localDateKey();
    if(!state.visits.includes(today))state.visits.push(today);
    state.visits=state.visits.slice(-366);
    $("#todayLabel").textContent=new Date().toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"}).toUpperCase();
    saveState();
  }
  function insertCalculatorText(value){
    const field=$("#mathProblem");
    const start=field.selectionStart??field.value.length;
    const end=field.selectionEnd??field.value.length;
    field.setRangeText(value,start,end,"end");
    field.focus();
    field.dispatchEvent(new Event("input",{bubbles:true}));
  }
  function setCalculatorPreview(value,status,kind=""){
    const output=$("#calculatorPreview"),label=$("#calculatorPreviewStatus"),copy=$("#copyCalculatorResult");
    if(output)output.textContent=value;
    if(label){label.textContent=status;label.classList.toggle("preview-valid",kind==="valid");label.classList.toggle("preview-error",kind==="error");}
    if(copy)copy.disabled=kind!=="valid";
  }
  function evaluateCalculatorExpression(source){
    let expression=String(source||"").trim();
    if(!expression)throw new Error("Enter a mathematical expression.");
    expression=expression.replace(/\bwhat is\b|\bcalculate\b|\bevaluate\b|\bcompute\b|\bplease\b/ig,"").replace(/[?]/g,"").trim();
    expression=expression.replace(/(-?\d+(?:\.\d+)?)\s*%\s*of\s*(-?\d+(?:\.\d+)?)/ig,"(($1)/100*($2))");
    expression=expression.replace(/\bAns\b/gi,"("+String(calculatorAns)+")").replace(/[×✕]/g,"*").replace(/[÷]/g,"/").replace(/[−–]/g,"-").replace(/π/g,"pi").replace(/√\s*\(/g,"sqrt(").replace(/√\s*(\d+(?:\.\d+)?)/g,"sqrt($1)");
    const tokens=expression.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|[a-zA-Z_]\w*|[()+\-*/%^!,]/gi)||[];
    const compact=expression.replace(/\s+/g,"");
    if(tokens.join("").toLowerCase()!==compact.toLowerCase())throw new Error("Use numbers, brackets, arithmetic operators, constants, and supported functions.");
    let index=0;
    const peek=()=>tokens[index],take=()=>tokens[index++];
    const angleFactor=calculatorAngleMode==="DEG"?Math.PI/180:1;
    const factorial=n=>{if(!Number.isInteger(n)||n<0||n>170)throw new Error("Factorial needs a whole number from 0 to 170.");let result=1;for(let k=2;k<=n;k++)result*=k;return result;};
    const functions={
      sqrt:x=>Math.sqrt(x),cbrt:x=>Math.cbrt(x),abs:x=>Math.abs(x),sin:x=>Math.sin(x*angleFactor),cos:x=>Math.cos(x*angleFactor),tan:x=>{if(calculatorAngleMode==="DEG"&&Math.abs((x%180+180)%180-90)<1e-12)throw new Error("tan is undefined at 90° + k × 180°.");return Math.tan(x*angleFactor)},
      asin:x=>Math.asin(x)/angleFactor,acos:x=>Math.acos(x)/angleFactor,atan:x=>Math.atan(x)/angleFactor,
      log:x=>Math.log10(x),log10:x=>Math.log10(x),log2:x=>Math.log2(x),ln:x=>Math.log(x),exp:x=>Math.exp(x),
      floor:x=>Math.floor(x),ceil:x=>Math.ceil(x),round:x=>Math.round(x),sign:x=>Math.sign(x),
      min:(...values)=>Math.min(...values),max:(...values)=>Math.max(...values),pow:(x,y)=>Math.pow(x,y),hypot:(...values)=>Math.hypot(...values)
    };
    const constants={pi:Math.PI,e:Math.E,tau:2*Math.PI,phi:(1+Math.sqrt(5))/2,infinity:Infinity};
    const startsPrimary=token=>token!==undefined&&(/^(?:\d|\.)/.test(token)||/^[a-zA-Z_]/.test(token)||token==="(");
    const parseExpression=()=>{let value=parseTerm();while(peek()==="+"||peek()==="-"){const op=take(),right=parseTerm();value=op==="+"?value+right:value-right;}return value;};
    const parseTerm=()=>{let value=parseUnary();while(true){const op=peek();if(["*","/","%"].includes(op)){take();const right=parseUnary();if((op==="/"||op==="%")&&right===0)throw new Error("Division by zero is not allowed.");value=op==="*"?value*right:op==="/"?value/right:value%right;continue;}if(startsPrimary(op)){value*=parseUnary();continue;}break;}return value;};
    const parseUnary=()=>{if(peek()==="+"){take();return parseUnary();}if(peek()==="-"){take();return -parseUnary();}return parsePower();};
    const parsePower=()=>{let value=parsePostfix();if(peek()==="^"){take();value=Math.pow(value,parseUnary());}return value;};
    const parsePostfix=()=>{let value=parsePrimary();while(peek()==="!"||peek()==="%"){const op=peek();if(op==="%"&&index+1<tokens.length&&! [")",",","+","-","*","/","^"].includes(tokens[index+1]))break;take();value=op==="!"?factorial(value):value/100;}return value;};
    const parsePrimary=()=>{
      const token=take();
      if(token===undefined)throw new Error("The expression is incomplete.");
      if(token==="("){const value=parseExpression();if(take()!==")")throw new Error("A closing parenthesis is missing.");return value;}
      if(/^(?:\d|\.)/.test(token))return Number(token);
      if(/^[a-zA-Z_]/.test(token)){
        const name=token.toLowerCase();
        if(peek()==="("){
          if(!Object.prototype.hasOwnProperty.call(functions,name))throw new Error("Unknown function: "+token+".");
          take();const args=[];
          if(peek()!==")"){args.push(parseExpression());while(peek()===","){take();args.push(parseExpression());}}
          if(take()!==")")throw new Error("A function call needs a closing parenthesis.");
          if(!args.length)throw new Error(token+" needs at least one argument.");
          if(["min","max","hypot"].includes(name)&&args.length<2)throw new Error(token+" needs at least two values.");
          if(name==="pow"&&args.length!==2)throw new Error("pow needs two values.");
          if(!["min","max","hypot","pow"].includes(name)&&args.length!==1)throw new Error(token+" takes one argument.");
          const result=functions[name](...args);if(!Number.isFinite(result))throw new Error("This function has no finite real result for the supplied value.");return result;
        }
        if(Object.prototype.hasOwnProperty.call(constants,name))return constants[name];
        throw new Error("Unknown name: "+token+". Use pi, e, or a supported function.");
      }
      throw new Error("Unexpected token: "+token+".");
    };
    const result=parseExpression();
    if(index<tokens.length)throw new Error("Unexpected token: "+peek()+".");
    if(Number.isNaN(result))throw new Error("This expression has no real numeric result.");
    if(!Number.isFinite(result))throw new Error("The result is not finite.");
    return Object.is(result,-0)?0:result;
  }
  function evaluateCalculatorValue(expression){
    const normalized=String(expression||"").replace(/\bAns\b/gi,"("+String(calculatorAns)+")").replace(/[×✕]/g,"*").replace(/[÷]/g,"/").replace(/[−–]/g,"-").replace(/π/g,"pi").replace(/(-?\d+(?:\.\d+)?)\s*%\s*of\s*(-?\d+(?:\.\d+)?)/ig,"(($1)/100*($2))");
    return evaluateCalculatorExpression(normalized);
  }
  function updateCalculatorPreview(){
    const field=$("#mathProblem");
    if(!field)return;
    const raw=field.value.trim();
    if(!raw){setCalculatorPreview("Enter a numeric expression","READY");return;}
    if(raw.includes("=")||/\b(?:differentiate|derivative|integrate|integral|limit|factor|expand|simplify|solve|mean|median|mode|range|circle|rectangle|triangle|square|interest|pythagorean)\b/i.test(raw)){
      setCalculatorPreview("Use Solve for the worked solution","MATHS PROBLEM");
      return;
    }
    let expression=raw.replace(/(-?\d+(?:\.\d+)?)\s*%\s*of\s*(-?\d+(?:\.\d+)?)/ig,"(($1)/100*($2))");
    try{
      const result=evaluateCalculatorValue(expression);
      const answer=String(Number(result.toPrecision(12)));
      setCalculatorPreview(answer,"PREVIEW · "+calculatorAngleMode,"valid");
    }catch(error){
      const message=error&&error.message||"";
      if(/Unknown name|Unknown function|Unexpected token|incomplete|closing parenthesis|takes one argument|needs at least/i.test(message))setCalculatorPreview("Keep typing a numeric expression","INCOMPLETE");
      else setCalculatorPreview("Complete the expression, then press =","INCOMPLETE");
    }
  }
  async function copyCalculatorResult(){
    const value=$("#calculatorPreview")?.textContent||"";
    const status=$("#calculatorPreviewStatus")?.textContent||"";
    if(!value||!status.startsWith("PREVIEW")&&!status.startsWith("SOLVED"))return;
    try{
      if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(value);
      else{
        const helper=document.createElement("textarea");helper.value=value;helper.setAttribute("readonly","");helper.style.position="fixed";helper.style.opacity="0";document.body.appendChild(helper);helper.select();
        const copied=document.execCommand("copy");helper.remove();if(!copied)throw new Error("Copy unavailable");
      }
      showToast("Calculator result copied.");
    }catch{showToast("Could not copy the result automatically.");}
  }
  function calculatorCurrentValue(){
    const expression=$("#mathProblem").value.trim();
    if(!expression)throw new Error("Enter an expression before using a memory key.");
    return evaluateCalculatorValue(expression);
  }
  function refreshCalculatorMemory(){
    const status=$("#calculatorMemoryStatus");
    if(status)status.textContent=calculatorHasMemory?"Memory: "+calculatorMemory:"Memory empty";
    const angle=$("#calculatorAngleMode");
    if(angle){angle.textContent=calculatorAngleMode;angle.setAttribute("aria-pressed",String(calculatorAngleMode==="DEG"));angle.classList.toggle("active",calculatorAngleMode==="DEG");}
    updateCalculatorPreview();
  }
  function handleCalculatorAction(action){
    const field=$("#mathProblem");
    try{
      if(action==="solve"){runMathSolver();return;}
      if(action==="clear"){clearMathProblem();return;}
      if(action==="backspace"){
        const start=field.selectionStart??field.value.length,end=field.selectionEnd??start;
        if(start!==end)field.setRangeText("",start,end,"end");else if(start>0)field.setRangeText("",start-1,start,"end");
        field.focus();return;
      }
      if(action==="angle"){calculatorAngleMode=calculatorAngleMode==="DEG"?"RAD":"DEG";refreshCalculatorMemory();showToast("Angle mode: "+calculatorAngleMode);return;}
      if(action==="memory-clear"){calculatorMemory=0;calculatorHasMemory=false;refreshCalculatorMemory();showToast("Calculator memory cleared.");return;}
      if(action==="memory-recall"){if(!calculatorHasMemory){showToast("Calculator memory is empty.");return;}insertCalculatorText(String(calculatorMemory));return;}
      if(action==="memory-add"||action==="memory-subtract"){
        const value=calculatorCurrentValue();calculatorMemory=(calculatorHasMemory?calculatorMemory:0)+(action==="memory-add"?value:-value);calculatorHasMemory=true;refreshCalculatorMemory();
        showToast(action==="memory-add"?"Added to calculator memory.":"Subtracted from calculator memory.");return;
      }
    }catch(error){showToast(error.message||"That calculator action could not be completed.");}
  }
  document.addEventListener("click",event=>{
    const calcButton=event.target.closest("[data-calc-insert],[data-calc-action]");
    if(calcButton){if(calcButton.dataset.calcInsert!==undefined){insertCalculatorText(calcButton.dataset.calcInsert);return;}handleCalculatorAction(calcButton.dataset.calcAction);return;}
    const angleButton=event.target.closest("#calculatorAngleMode");
    if(angleButton){handleCalculatorAction("angle");return;}
    const previewDevice=event.target.closest("[data-preview-device]");
    if(previewDevice){
      const frame=$("#responsivePreviewFrame");
      const devices={phone:"Phone layout · one column",tablet:"Tablet layout · two columns",desktop:"Desktop layout · three columns",ultrawide:"Ultrawide layout · three flexible columns"};
      frame.dataset.device=previewDevice.dataset.previewDevice;
      $$(".responsive-device-button").forEach(button=>{const selected=button===previewDevice;button.classList.toggle("active",selected);button.setAttribute("aria-pressed",String(selected));});
      $("#responsivePreviewStatus").textContent=devices[frame.dataset.device]||"Responsive layout";
      return;
    }
    const chaosButton=event.target.closest("#responsiveChaosButton");
    if(chaosButton){
      const frame=$("#responsivePreviewFrame"),chaotic=frame.classList.toggle("is-chaotic");
      chaosButton.setAttribute("aria-pressed",String(chaotic));
      chaosButton.textContent=chaotic?"Contain the goblin ↺":"Unleash goblin ↯";
      showToast(chaotic?"Goblin unleashed. Layout rules still apply.":"Goblin contained. Order restored-ish.");
      return;
    }
    const historyTab=event.target.closest("[data-history-tab]");
    if(historyTab){
      const chosen=historyTab.dataset.historyTab;
      $$(".history-tab").forEach(tab=>{const selected=tab===historyTab;tab.classList.toggle("active",selected);tab.setAttribute("aria-selected",String(selected));});
      $$("[data-history-panel]").forEach(panel=>{const selected=panel.dataset.historyPanel===chosen;panel.classList.toggle("active",selected);panel.hidden=!selected;});
      return;
    }
    const nav=event.target.closest("[data-view]");
    if(nav){event.preventDefault();showView(nav.dataset.view);location.hash=nav.dataset.view;return;}
    const goto=event.target.closest("[data-goto]");
    if(goto){showView(goto.dataset.goto);location.hash=goto.dataset.goto;return;}
    const lessonEl=event.target.closest("[data-lesson]");
    if(lessonEl){openLesson(lessonEl.dataset.lesson);return;}
    const answer=event.target.closest("[data-answer]");
    if(answer){
      const lesson=lessonById(activeLesson),chosen=Number(answer.dataset.answer),correct=chosen===lesson.quiz.answer;
      $$(".quiz-option").forEach((button,i)=>{button.disabled=true;if(i===lesson.quiz.answer)button.classList.add("correct");if(i===chosen&&!correct)button.classList.add("wrong");});
      $("#quizFeedback").textContent=(correct?"✓ Correct! ":"Not quite. ")+lesson.quiz.why;
      $("#quizFeedback").style.color=correct?"var(--mint)":"var(--orange)";
      if(correct&&!state.quizPassed.includes(activeLesson)){state.quizPassed.push(activeLesson);saveState();}
      return;
    }
    if(event.target.closest("#weirdSurprise")){let next=weirdBuildIndex;while(weirdBuilds.length>1&&next===weirdBuildIndex)next=Math.floor(Math.random()*weirdBuilds.length);renderWeirdBuild(next);return;}
    const weirdBuildButton=event.target.closest("#weirdBuildNow");if(weirdBuildButton){const build=weirdBuilds[Number(weirdBuildButton.dataset.weirdBuild)||0];$("#codeEditor").value=build.starter;showView("practice");location.hash="practice";showToast("Weird build loaded. Understand the theory, run it, then mutate it.");return;}
    if(event.target.closest("#continueButton")){openLesson($("#continueButton").dataset.lesson);return;}
    const projectButton=event.target.closest("[data-project]");if(projectButton){renderProjectDetail(projectButton.dataset.project);return;}
    const projectStarter=event.target.closest("[data-project-starter]");if(projectStarter){const p=projects.find(item=>item.id===Number(projectStarter.dataset.projectStarter));if(p){$("#codeEditor").value=p.starter.replace(/\\n/g,"\n");showView("practice");location.hash="practice";showToast("Project starter loaded. Find the TODOs and make them work.");}return;}
    const projectComplete=event.target.closest("[data-project-complete]");if(projectComplete){if(!Array.isArray(state.projectsCompleted))state.projectsCompleted=[];const id=Number(projectComplete.dataset.projectComplete);if(!state.projectsCompleted.includes(id))state.projectsCompleted.push(id);saveState();renderProjectDetail(id);showToast("Project progress saved on this device.");return;}
    if(event.target.closest("#markComplete")){markComplete(activeLesson);return;}
    if(event.target.closest("#bookmarkLesson")){toggleBookmark(activeLesson);return;}
    if(event.target.closest("#prevLesson")){if(activeLesson>1)openLesson(activeLesson-1);return;}
    if(event.target.closest("#nextLesson")){if(activeLesson<lessons.length)openLesson(activeLesson+1);return;}
    if(event.target.closest("#loadStudioStarter")) { const lesson=lessonById(activeLesson); if(lesson) $("#codeEditor").value=lesson.code; showView("practice"); location.hash="practice"; showToast("Lesson starter loaded. Build the studio project in stages."); return; }
    if(event.target.closest("#tryLessonCode")) {
      const lesson = lessonById(activeLesson);
      if (lesson) $("#codeEditor").value = lesson.code;
      showView("practice"); location.hash = "practice";
      showToast("Lesson example loaded into the practice lab."); return;
    }
    const copyExample = event.target.closest("[data-copy-example]");
    if (copyExample) {
      const item = referenceItems.find(entry => entry.title === copyExample.dataset.copyExample);
      if (item) {
        const textToCopy = item.example;
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(textToCopy).then(() => showToast("Example copied.")).catch(() => showToast("Copy unavailable. Select the example text instead."));
        } else {
          const helper = document.createElement("textarea");
          helper.value = textToCopy; helper.setAttribute("readonly",""); helper.style.position="fixed"; helper.style.opacity="0";
          document.body.appendChild(helper); helper.select();
          const copied = document.execCommand("copy"); helper.remove();
          showToast(copied ? "Example copied." : "Copy unavailable. Select the example text instead.");
        }
      }
      return;
    }
    if(event.target.closest("#solveMath")){runMathSolver();return;}
    if(event.target.closest("#copyMathSolution")){copyMathSolution();return;}
    if(event.target.closest("#clearMathProblem")){clearMathProblem();return;}
    const historyItem=event.target.closest("[data-math-history-index]");
    if(historyItem){const item=mathHistory[Number(historyItem.dataset.mathHistoryIndex)];if(item){$("#mathProblem").value=item.question;$("#mathMode").value=item.mode||"auto";lastMathSolution=item;renderMathSolution(item.solution);showToast("Previous calculation restored.");}return;}
    const mathExample=event.target.closest("[data-math-example]");if(mathExample){$("#mathProblem").value=mathExample.dataset.mathExample;$("#mathMode").value="auto";runMathSolver();return;}
    if(event.target.closest("#runCode")){runCode();return;}
    if(event.target.closest("#resetCode")){$("#codeEditor").value='const name = "future developer";\nconsole.log("Hello, " + name + "!");\nconsole.log(2 + 3);';renderOutput([]);return;}
    if(event.target.closest("#clearOutput")){renderOutput([]);return;}
    if(event.target.closest("#themeToggle")){setTheme(state.theme==="light"?"dark":"light");return;}
    if(event.target.closest("#menuToggle")){$("#sidebar").classList.toggle("open");$("#mobileOverlay").classList.toggle("show");return;}
    if(event.target.closest("#mobileOverlay")){$("#sidebar").classList.remove("open");$("#mobileOverlay").classList.remove("show");return;}
    if(event.target.closest("#exportProgress")){if(event.shiftKey)$("#importFile").click();else exportProgress();return;}
    const moduleEl=event.target.closest("[data-module]");
    if(moduleEl){showView("roadmap");return;}
  });
  document.addEventListener("keydown",event=>{
    if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();$("#searchInput").focus();}
    if(event.key==="Enter"&&event.target.matches("[data-lesson],[data-goto],[data-module]"))event.target.click();
    if(event.key==="Escape"){$("#sidebar").classList.remove("open");$("#mobileOverlay").classList.remove("show");}
  });
  $("#searchInput").addEventListener("keydown",event=>{if(event.key==="Enter"){searchLessons(event.target.value);event.target.blur();}});
  $("#referenceSearch").addEventListener("input",renderReference);
  $("#mathProblem").addEventListener("keydown",event=>{if((event.ctrlKey||event.metaKey)&&event.key==="Enter")runMathSolver();});
  $("#mathProblem").addEventListener("input",updateCalculatorPreview);
  $("#copyCalculatorResult").addEventListener("click",copyCalculatorResult);
  $("#referenceFilters").addEventListener("click",event=>{
    const button=event.target.closest("[data-reference-filter]");
    if(!button)return;
    referenceFilter=button.dataset.referenceFilter;
    $$("#referenceFilters [data-reference-filter]").forEach(item=>item.classList.toggle("active",item===button));
    renderReference();
  });
  $("#searchInput").addEventListener("input",event=>{if(event.target.value.trim().length>=3)searchLessons(event.target.value);});
  $("#lessonFilters").addEventListener("click",event=>{
    const button=event.target.closest("[data-filter]");if(!button)return;
    currentFilter=button.dataset.filter;
    $$(".filter-pill").forEach(p=>p.classList.toggle("active",p===button));
    renderLibrary("#lessonLibrary",currentFilter);
  });
  $("#exportProgress").addEventListener("contextmenu",event=>{event.preventDefault();$("#importFile").click();});
  $("#importFile").addEventListener("change",event=>importProgress(event.target.files[0]));
  $("#importProgress").addEventListener("click",()=>$("#importFile").click());
  // Shift-click the export action to restore a previously exported JSON backup.
  $("#exportProgress").title="Click to export. Shift-click to import a backup.";
  // Native download action remains available; shift-click is handled as a restore shortcut.
  document.addEventListener("click",event=>{
    const mini=event.target.closest(".mini-course");if(mini){showView("roadmap");return;}
  });
  // Progressive Web App: the browser controls when installation is available.
  const installButton = $("#installApp");
  const isStandalone = () => window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  if (isStandalone()) {
    installButton.querySelector(".install-label").textContent = "Installed";
    installButton.setAttribute("aria-label", "Scriptly is installed");
  }
  // Let the browser show its native install UI. Preventing this event would
  // suppress the native banner and produce a noisy console warning.
  window.addEventListener("beforeinstallprompt", () => {
    installButton.classList.add("install-ready");
    installButton.querySelector(".install-label").textContent = "Install app";
    installButton.setAttribute("aria-label", "Install Scriptly app");
  });
  window.addEventListener("appinstalled", () => {
    installButton.classList.remove("install-ready");
    installButton.querySelector(".install-label").textContent = "Installed";
    installButton.setAttribute("aria-label", "Scriptly is installed");
    showToast("Scriptly is installed — happy learning!");
  });
  installButton.addEventListener("click", () => {
    if (isStandalone()) {
      showToast("Scriptly is already running as an installed app.");
      return;
    }
    showToast(/iPhone|iPad|iPod/i.test(navigator.userAgent)
      ? "To install on iPhone/iPad: tap Share, then Add to Home Screen."
      : "Use your browser's Install app or Add to Home Screen option to install Scriptly.");
  });
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(() => {
        // The course remains usable if the browser or host blocks service workers.
      });
    });
  }
  const originalSetTheme=state.theme;
  setTheme(originalSetTheme);
  recordVisit();
  renderMathHistory();
  renderHome();
  const hash=location.hash;
  if(hash.startsWith("#lesson-"))openLesson(Number(hash.replace("#lesson-","")));
  else if(hash==="#learn"||hash==="#practice"||hash==="#math"||hash==="#math-solver"||hash==="#responsive"||hash==="#history"||hash==="#projects"||hash==="#roadmap"||hash==="#bookmarks"||hash==="#reference")showView(hash.slice(1));
  else if(hash.startsWith("#project-"))renderProjectDetail(Number(hash.replace("#project-","")));
  else showView("home");
})();