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
    {id:18,unit:"Build things",title:"Build your first mini projects",icon:"⚒",tone:"orange",duration:20,level:"Project",description:"Combine your skills into small, useful projects.",intro:"Projects turn separate concepts into a skill you can use. Start small and add features when the basics work.",sections:[["Project 1: quiz","Store questions in an array of objects, show one question, and check the selected answer."],["Project 2: text helper","Read text from an input, count its characters, and show a transformed version."],["Project 3: notes","Use a form to add notes and localStorage to keep them on this device. Never store sensitive information in localStorage."]],code:'const tasks = ["Learn variables", "Practise functions", "Build a project"];\ntasks.forEach((task, index) => {\n  console.log((index + 1) + ". " + task);\n});',output:"1. Learn variables\n2. Practise functions\n3. Build a project",quiz:{q:"What is a good way to learn from a small project?",options:["Copy it and never change it","Build a working small version, then add one feature at a time","Wait until you memorise all JavaScript"],answer:1,why:"A small working project gives you feedback. Add one feature at a time so each step is understandable."}}
  ];
  const modules = [
    {title:"Get comfortable",range:[1,4],icon:"✦",desc:"Meet JavaScript, print messages, store values, and understand types."},
    {title:"Learn to think in code",range:[5,8],icon:"⌘",desc:"Make decisions, repeat actions, and organise reusable instructions."},
    {title:"Work with real data",range:[9,12],icon:"◈",desc:"Use lists, objects, built-in tools, and a reliable debugging process."},
    {title:"Build for the browser",range:[13,14],icon:"▧",desc:"Connect JavaScript to page elements and respond to user actions."},
    {title:"Level up",range:[15,17],icon:"✧",desc:"Explore deeper language concepts, async work, and modern syntax."},
    {title:"Make something real",range:[18,18],icon:"⚒",desc:"Use what you know to create small projects of your own."}
  ];
  const projects = [{"id":1,"title":"The Goblin Tip Calculator","level":"Tiny chaos","time":"25–40 min","emoji":"👺","pitch":"A goblin runs a restaurant and is terrible at maths. Make a calculator that splits a bill and tip without starting a food fight.","goal":"Practise values, numbers, functions, and input validation.","concepts":["const and let","Number conversion","Functions","if / else","NaN and validation"],"checkpoints":[["Make the bill goblin speak","Create bill, tipPercent, and people variables. Print them."],["Calculate the tip","Write calculateTip(bill, tipPercent) and return the tip amount."],["Split the damage","Write perPersonTotal(bill, tipPercent, people). Include the bill and tip, divided by people."],["Stop nonsense inputs","If people is zero or negative, show a helpful message instead of dividing by zero."],["Add a tiny test suite","Try a $100 bill, 10% tip, and 2 people. Predict the answer before running it."]],"analogy":"A function is a vending machine: put inputs in, it does a job, and return hands you the snack. If you put zero people into a bill splitter, the machine starts screaming.","starter":"function calculateTip(bill, tipPercent) {\\n  // TODO: turn the percentage into a decimal\\n  // TODO: multiply it by the bill\\n}\\n\\nconsole.log(calculateTip(100, 10));","hint":"Ten percent means 10 divided by 100. A function that calculates something should usually return the result instead of only printing it.","done":"You can calculate a tip, split a total, reject impossible inputs, and explain why the answer is correct."},{"id":2,"title":"The Suspicious Snack Inventory","level":"Beginner","time":"45–60 min","emoji":"🍕","pitch":"Your snack cupboard is a tiny chaotic warehouse. Track snacks, quantities, prices, and the one gremlin who keeps eating all the biscuits.","goal":"Model data with arrays and objects, then update it safely.","concepts":["Arrays","Objects","Loops","Array methods","Find and filter"],"checkpoints":[["Create snack records","Make an array of snack objects. Each snack has name, quantity, and price."],["Print the stock report","Loop through the snacks and print a readable line for each one."],["Find a snack","Write findSnack(name) that returns the matching object."],["Restock and consume","Write functions that add stock or reduce stock without allowing negative quantities."],["Calculate cupboard value","Add quantity × price for every snack and report the total inventory value."]],"analogy":"An array is a row of labelled lunchboxes. An object is one lunchbox with compartments: name, quantity, and price. The gremlin is a bug report wearing a tiny hat.","starter":"const snacks = [\\n  { name: \"Biscuits\", quantity: 4, price: 20 },\\n  { name: \"Mangoes\", quantity: 3, price: 15 }\\n];\\n\\n// TODO: print each snack and its quantity","hint":"Use for...of to visit each snack. Use find() to locate one item. Remember that changing a property like snack.quantity changes the object.","done":"You can represent real things as objects, keep them in arrays, search them, update them, and calculate totals."},{"id":3,"title":"Password Bouncer 3000","level":"Beginner","time":"45–75 min","emoji":"🕵️","pitch":"A nightclub bouncer made of JavaScript checks passwords. It is strict about length, but not so strict that it rejects the word 'banana' for being emotionally unavailable.","goal":"Practise strings, conditions, boolean logic, and validation.","concepts":["Strings","length","includes","Conditions","Boolean logic"],"checkpoints":[["Inspect a password","Write a function that accepts a password and reports its length."],["Set the club rules","Require a minimum length and at least one number."],["Explain the rejection","Return a clear list of reasons the password fails."],["Test edge cases","Try an empty string, a short password, a long password, and one that meets the rules."],["Separate checking from displaying","One function checks the password; another prints the result."]],"analogy":"A condition is a bouncer asking questions. && means every rule must be satisfied. || means at least one rule can pass. The bouncer has a clipboard and zero chill.","starter":"function checkPassword(password) {\\n  // TODO: check password.length\\n  // TODO: check whether it includes a number\\n  // TODO: return a useful result\\n}\\n\\nconsole.log(checkPassword(\"banana\"));","hint":"A string has a .length property. For a simple number check, loop through the characters and use Number.isNaN(Number(character)) carefully.","done":"You can build readable validation rules, combine conditions, and test both valid and invalid inputs."},{"id":4,"title":"The Array Sorting Circus","level":"Beginner+","time":"60–90 min","emoji":"🎪","pitch":"Twenty-five chaotic circus performers arrive as data. Sort them by score, find the champion, filter the clowns, and avoid accidentally rearranging the original list.","goal":"Get fluent with map, filter, find, reduce, sorting, and callbacks.","concepts":["Callbacks","map","filter","find","reduce","sort"],"checkpoints":[["Make the cast","Create an array of objects with names, acts, and scores."],["Transform the cast list","Use map() to create a list of performer names."],["Choose who qualifies","Use filter() to keep performers above a score threshold."],["Find the champion","Use reduce() or sort() to identify the highest score. Explain your choice."],["Protect the original","Copy the array before sorting it and explain why sort() mutates the array."]],"analogy":"map gives every performer a costume change. filter checks tickets at the door. reduce throws the entire circus into a blender and returns one summary. No actual clowns were harmed.","starter":"const performers = [\\n  { name: \"Bobo\", score: 82 },\\n  { name: \"Laser Duck\", score: 97 },\\n  { name: \"Professor Cheese\", score: 91 }\\n];\\n\\n// TODO: use map() to get names\\n// TODO: use filter() to keep scores above 90","hint":"Callbacks are functions handed to another function. Read the callback parameter as 'the current item' while learning these methods.","done":"You can choose between map, filter, find, reduce, and sort based on the job instead of randomly summoning methods."},{"id":5,"title":"DOM: The Website Puppet Theatre","level":"Intermediate","time":"75–120 min","emoji":"🎭","pitch":"Your webpage is a theatre. HTML elements are puppets, the DOM is the stage manager, and JavaScript is the gremlin yanking the strings when people click buttons.","goal":"Connect JavaScript to browser elements and events.","concepts":["querySelector","textContent","addEventListener","Forms","DOM updates"],"checkpoints":[["Select a puppet","Use querySelector() to find a button and a message element."],["Change the scene","Set textContent when the button is clicked."],["Read audience input","Take text from an input and show a personalised greeting."],["Build a counter","Add +1, -1, and reset buttons. Keep the count in a variable."],["Handle empty input","Show a helpful message if the visitor submits nothing but whitespace."]],"analogy":"The DOM is a family tree of page elements. querySelector is you yelling 'WHERE IS THE BLUE BUTTON?' and the browser handing you the first matching element.","starter":"const button = document.querySelector(\"#myButton\");\\nconst message = document.querySelector(\"#message\");\\n\\nbutton.addEventListener(\"click\", () => {\\n  // TODO: change message.textContent\\n});","hint":"The HTML must contain elements with matching IDs. addEventListener('click', callback) means 'run this function when someone clicks'.","done":"You can select elements, listen for events, read input, update the page, and validate user actions."},{"id":6,"title":"To-Do App for a Very Lazy Dragon","level":"Intermediate","time":"2–3 hours","emoji":"🐉","pitch":"A dragon has 400 chores but only wants to hoard gold. Build a task app that adds, completes, deletes, and filters chores.","goal":"Combine DOM events, arrays of objects, rendering, and localStorage.","concepts":["Arrays of objects","DOM rendering","Events","localStorage","State"],"checkpoints":[["Model a chore","Represent each task as an object with id, text, and completed."],["Add chores","Read the input and add a new task to the array."],["Render the list","Create the visible list from the current array state."],["Complete and delete","Use task IDs to update or remove the correct task."],["Remember across refreshes","Save tasks in localStorage and load them when the page starts."],["Add filters","Show all, active, and completed tasks without destroying the full list."]],"analogy":"State is the dragon's official hoard ledger. The DOM is the display case. Change the ledger, then redraw the display case. Don't let each button secretly invent its own ledger.","starter":"const tasks = [];\\n\\nfunction addTask(text) {\\n  // TODO: create a task object\\n  // TODO: add it to tasks\\n}\\n\\nfunction renderTasks() {\\n  // TODO: display tasks in the page\\n}","hint":"Keep one source of truth: the tasks array. When it changes, call renderTasks(). Use JSON.stringify to save and JSON.parse to load localStorage data.","done":"You can build a complete CRUD-style app with one source of truth, rendering, filters, and browser persistence."},{"id":7,"title":"Async Pizza Delivery Simulator","level":"Intermediate+","time":"2–3 hours","emoji":"🍕","pitch":"The pizza arrives after a delay, sometimes succeeds, and sometimes the delivery goblin gets lost. Learn asynchronous JavaScript without blaming the oven.","goal":"Understand callbacks, promises, async/await, errors, and loading states.","concepts":["setTimeout","Promises","async/await","try/catch","Loading and error states"],"checkpoints":[["Simulate the delivery","Return a Promise that resolves after a delay."],["Add failure","Reject some deliveries and handle the rejection."],["Await the pizza","Use async/await to write the flow in a readable order."],["Show loading and final status","Display 'cooking…', then success or a helpful error."],["Prevent double orders","Disable the order button while a delivery is in progress."]],"analogy":"await is not a time machine. It says 'pause this async function until the pizza promise settles; let the rest of the kitchen keep working'.","starter":"function deliverPizza() {\\n  return new Promise((resolve) => {\\n    setTimeout(() => resolve(\"Pizza arrived!\"), 1000);\\n  });\\n}\\n\\nasync function orderPizza() {\\n  // TODO: await deliverPizza()\\n  // TODO: handle errors with try/catch\\n}","hint":"A Promise represents a result that may arrive later. await only works inside an async function (or supported top-level module contexts).","done":"You can explain pending/fulfilled/rejected promises and handle loading, success, and failure states."},{"id":8,"title":"The Mini Portfolio Boss Fight","level":"Portfolio build","time":"4–6 hours","emoji":"🧙","pitch":"Build a polished portfolio that introduces you, shows your projects, filters them, and survives a refresh. The final boss is explaining your own code without saying 'I found it on the internet'.","goal":"Combine core JavaScript with DOM, responsive UI behaviour, storage, and debugging.","concepts":["Data-driven rendering","Filtering","Events","localStorage","Refactoring","Accessibility"],"checkpoints":[["Plan before coding","Sketch sections and write down the data each section needs."],["Build a project data array","Store title, description, tags, and links in objects."],["Render project cards","Generate cards from data instead of hand-writing duplicates."],["Add working filters","Filter projects by tag and show a friendly empty state."],["Save a theme preference","Store dark/light theme in localStorage and restore it on load."],["Polish and audit","Test mobile widths, keyboard use, empty data, broken links, and console errors."],["Explain the architecture","Describe how data, functions, events, and DOM rendering connect."]],"analogy":"A portfolio is a restaurant menu powered by data. The array is the kitchen's recipe list; rendering plates the dishes; filters are a very tiny, very dramatic maître d'.","starter":"const projects = [\\n  { title: \"Snack Tracker\", tags: [\"beginner\", \"arrays\"] },\\n  { title: \"To-Do Dragon\", tags: [\"dom\", \"storage\"] }\\n];\\n\\nfunction renderProjects(items) {\\n  // TODO: turn each project into a card\\n}\\n\\nfunction filterProjects(tag) {\\n  // TODO: return only matching projects\\n}","hint":"Build the smallest working version first. Separate data, rendering, and event handling. Refactor only after the basic behaviour works.","done":"You have a deployable portfolio, can explain the code, and have a repeatable workflow for building small apps."}];
  const theoryNotes = {"1":["JavaScript is the extremely literal intern who runs the amusement park","You give it instructions in a language it understands. It follows the rules exactly—even if your instruction is a spectacularly bad idea.","JavaScript is a programming language: values + instructions + rules. The browser can run it without installing a separate tool.","Expecting the computer to guess what you meant. Computers are powerful, not psychic."],"2":["console.log is a megaphone, not a storage cupboard","It shouts a value into the console so you can inspect it. It does not automatically save that value for later.","A program can calculate silently. Logging is a debugging tool that lets you observe what happened.","Thinking console.log changes the value or returns it from a function. Displaying and returning are different jobs."],"3":["Variables are labelled lunchboxes; const is a sticker you cannot rename","The label points to a value. let lets you point that label at a different value later; const stops reassignment.","Variables give names to values so you can reuse information and make code readable.","Using const does not freeze an object or array. It prevents reassignment of the variable binding."],"4":["Types are different species at a zoo. Do not feed them the same operation blindly","The text '42' and the number 42 look similar to a human, but JavaScript treats them differently. One is text; one is a number.","Types influence which operations make sense and what result an expression produces.","Putting numbers inside quotes and then wondering why maths acts weird."],"5":["Operators are tiny kitchen appliances: each symbol has a job","+ can add numbers or join strings. === compares without the loose conversions of ==. The symbol is small; the consequences can be loud.","An expression combines values and operators to produce a new value, often a number or boolean.","Using = to compare. A single = assigns a value; === asks whether values are strictly equal."],"6":["if/else is a goblin at a fork in the road with a yes/no clipboard","If the condition is true, go down one path. Otherwise, take the else path. It does not run both just because it feels social.","Conditions evaluate to booleans. Branches let programs react differently to different inputs.","Using = inside a condition when you meant to compare values, or forgetting that false conditions skip the block."],"7":["A loop is a washing machine for instructions—check the door before leaving it on forever","The loop repeats while its condition allows it. Update the counter or change the condition so it can eventually stop.","Loops automate repetition. A loop needs a starting state, a continuation condition, and a way to make progress.","Off-by-one errors and infinite loops. Trace the counter for the first few passes."],"8":["A function is a vending machine with inputs, a job, and maybe a snack coming out","Call it with arguments. Parameters receive those values. return sends a result back; console.log merely shows one.","Functions package reusable behaviour and help separate a problem into smaller pieces.","Confusing a parameter with an argument, or expecting a function to run before it is called."],"9":["An array is a row of numbered drawers, but the first drawer is numbered zero because JavaScript is a little weird","Use an index to get an item. push adds to the end, and length tells you how many items are there.","Arrays are ordered collections. Zero-based indexing means the first valid index is 0 and the last is length - 1.","Trying to read array[ length ] for the final item. That index is one past the end."],"10":["An object is a backpack with named pockets","Instead of remembering that slot 0 means name and slot 1 means city, use person.name and person.city. Names make data easier to understand.","Objects group related properties into one value and are useful for modelling people, products, tasks, and more.","Confusing property access with a function call, or assuming a missing property will magically exist."],"11":["Built-in methods are tools already in the JavaScript toolbox","You do not need to invent a hammer. Learn what a method receives, what it returns, and whether it changes the original value.","Methods are functions associated with values or objects. Read the method name, input, output, and mutation behaviour.","Assuming every method changes the original. Some return a new value; others mutate."],"12":["Debugging is detective work, not a public execution of your laptop","Reproduce the problem, inspect the error, check the line, and test one change. Do not randomly rewrite everything and call it science.","A bug is a mismatch between expected and actual behaviour. Small experiments narrow down the cause.","Changing five things at once. Then you have no idea which change fixed or broke it."],"13":["The DOM is the browser's cardboard puppet theatre","JavaScript can select an element, read or change its content, and create new elements. The page becomes something your code can control.","The DOM represents a document as objects and nodes that scripts can inspect and modify.","Changing innerHTML with untrusted text. Prefer textContent when you mean plain text."],"14":["An event listener is a doorbell. Your function waits until someone rings it","Register a callback for a click, input, or submit event. The callback runs when that event happens—not immediately when you attach it.","Event-driven programs respond to things that happen, rather than only executing from top to bottom once.","Calling the function immediately instead of passing a function to addEventListener."],"15":["Scope is the room where a variable is allowed to live","A variable inside a function is not automatically available everywhere. Block scope and function scope decide where names can be accessed.","Scope controls name visibility. Closures allow functions to retain access to variables from their surrounding lexical environment.","Assuming a variable exists everywhere because it was created somewhere else."],"16":["Promises are delivery receipts for results that have not arrived yet","A promise can be pending, fulfilled, or rejected. async/await makes promise-based code easier to read, but the waiting still exists.","Asynchronous operations allow other work to continue while waiting for results such as timers or network responses.","Forgetting to handle rejection, or thinking await blocks the entire browser."],"17":["Modern JavaScript is a toolbox upgrade, not a new language you must fear","Template strings, destructuring, spread, and modules reduce repetitive code. Understand the older idea first, then learn the shortcut.","Modern syntax improves readability and composition, but concise syntax is not automatically clearer.","Using a clever one-liner that nobody—including future you—can understand."],"18":["A project is a pile of tiny solved problems wearing one trench coat","Break it into inputs, data, functions, display, and tests. Build a tiny working version, then add one feature at a time.","Projects connect syntax to problem-solving: plan, model data, implement, test, debug, and improve.","Trying to build every feature in one giant sitting before the first small piece works."]};
  const STORE_KEY = "scriptly-static-v1";
  const referenceItems = [{"title":"Variables","category":"Basics","syntax":"const name = \"Mina\";\\nlet score = 0;","plain":"A named box that holds a value. Use const when you will not reassign it; use let when the value needs to change.","example":"const city = \"Delhi\";"},{"title":"Data types","category":"Basics","syntax":"\"hello\" · 42 · true · null","plain":"Values come in different kinds: strings (text), numbers, booleans (true/false), and special values such as null and undefined.","example":"console.log(typeof 42); // \"number\""},{"title":"console.log()","category":"Basics","syntax":"console.log(value);","plain":"Prints a value to the console so you can see what your program is doing.","example":"console.log(\"Hello!\");"},{"title":"Operators","category":"Logic","syntax":"+  -  *  /  ===  !==  >","plain":"Symbols that calculate or compare values. Prefer === for strict equality checks.","example":"console.log(5 === 5); // true"},{"title":"if / else","category":"Logic","syntax":"if (condition) { } else { }","plain":"Lets your code choose what to do. The first block runs when the condition is true; else handles the other path.","example":"if (score > 0) console.log(\"Go!\");"},{"title":"Loops","category":"Logic","syntax":"for (let i = 0; i < 3; i++) { }","plain":"Repeats a block of code. Check the stopping condition so the loop does not run forever.","example":"for (let i = 1; i <= 3; i++) console.log(i);"},{"title":"Functions","category":"Functions","syntax":"function greet(name) { return \"Hi \" + name; }","plain":"A reusable set of instructions. Parameters are input names; return sends a result back.","example":"console.log(greet(\"Sam\"));"},{"title":"Arrow functions","category":"Functions","syntax":"const double = n => n * 2;","plain":"A shorter way to write many functions. Great for small operations and array callbacks.","example":"const double = n => n * 2;"},{"title":"Arrays","category":"Collections","syntax":"const fruits = [\"apple\", \"pear\"];","plain":"An ordered list. Positions start at index 0, so the first item is array[0].","example":"console.log(fruits[0]);"},{"title":"Array methods","category":"Collections","syntax":".map() · .filter() · .find()","plain":"Methods that help work with lists. map transforms items; filter keeps matching items; find returns the first match.","example":"[1, 2, 3].map(n => n * 2);"},{"title":"Objects","category":"Collections","syntax":"const user = { name: \"Mina\" };","plain":"A collection of named properties. Read a property with dot notation or square brackets.","example":"console.log(user.name);"},{"title":"Strings","category":"Basics","syntax":"text.length · text.toUpperCase()","plain":"Strings hold text. Useful tools include length, includes(), slice(), and template literals.","example":"console.log(\"hello\".toUpperCase());"},{"title":"Template literals","category":"Basics","syntax":"`Hello, ${name}`","plain":"Backticks let you insert values inside text using ${...}, often easier to read than joining strings.","example":"const message = \"Score: \" + score;"},{"title":"Scope","category":"Functions","syntax":"{ const localValue = 1; }","plain":"Scope describes where a variable can be used. Variables declared inside a function or block stay local to that area.","example":"function demo() { const secret = 7; }"},{"title":"DOM selection","category":"Browser","syntax":"document.querySelector(\".card\")","plain":"The DOM is the browser's object representation of the page. querySelector finds the first matching element.","example":"const heading = document.querySelector(\"h1\");"},{"title":"Events","category":"Browser","syntax":"button.addEventListener(\"click\", handler)","plain":"Events let your page respond to actions such as clicks, typing, and form submission.","example":"button.addEventListener(\"click\", () => console.log(\"Clicked!\"));"},{"title":"Promises","category":"Functions","syntax":"fetch(url).then(result => ...)","plain":"A Promise represents a result that may arrive later. It can be pending, fulfilled, or rejected.","example":"Promise.resolve(\"done\").then(console.log);"},{"title":"async / await","category":"Functions","syntax":"async function load() { await task(); }","plain":"A readable way to work with Promises. Use try/catch when you need to handle errors from awaited work.","example":"async function start() { const value = await getValue(); }"}];
  const defaults = {completed:[],bookmarks:[],quizPassed:[],minutes:0,theme:"dark",lastLesson:1,visits:[]};
  let state = loadState();
  let currentFilter = "all";
  let activeLesson = 1;
  let toastTimer;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return {...defaults};
      const parsed = JSON.parse(raw);
      return {...defaults,...parsed,
        completed:Array.isArray(parsed.completed)?parsed.completed:[],
        projectsCompleted:Array.isArray(parsed.projectsCompleted)?parsed.projectsCompleted:[],
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
  function renderHome() {
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
  function renderLesson(id) {
    const lesson=lessonById(id);
    if(!lesson) return;
    activeLesson=lesson.id; state.lastLesson=lesson.id;
    const done=completed(lesson.id), saved=bookmarked(lesson.id);
    const code = lesson.code;
    const codeBreakdown = code.split("\n").map((line,index)=>'<div class="code-explain-row"><span class="code-line-number">'+(index+1)+'</span><code>'+escapeHTML(line || " ")+'</code><p>'+escapeHTML(explainCodeLine(line))+'</p></div>').join("");
    const theory=theoryNotes[lesson.id]||theoryNotes[1];
    const theoryBlock='<section class="chaos-theory"><div class="eyebrow">THE CHAOTIC THEORY CORNER</div><h2>'+escapeHTML(theory[0])+'</h2><p>'+escapeHTML(theory[1])+'</p><details><summary>Okay, but what is the actual computer-science idea?</summary><p>'+escapeHTML(theory[2])+'</p></details><div class="theory-trap"><strong>💥 Classic faceplant</strong><p>'+escapeHTML(theory[3])+'</p></div><div class="theory-exercise"><strong>🧪 Tiny brain experiment</strong><p>Before running the example, predict what it will do. Then change one value, run it again, and explain the difference in your own words.</p></div></section>';
    const sections=lesson.sections.map((section,i)=>'<section class="teaching-step"><div class="step-label">STEP '+String(i+1).padStart(2,"0")+'</div><h2>'+escapeHTML(section[0])+'</h2><p>'+escapeHTML(section[1])+'</p>'+(i===0?'<div class="example-box"><div class="example-top"><span>OUR EXAMPLE</span><span>JavaScript</span></div><pre><code>'+escapeHTML(code)+'</code></pre><div class="expected-output">▶ What you should see: '+escapeHTML(lesson.output)+'</div><div class="example-actions"><button type="button" class="small-ghost" id="tryLessonCode">Try this in the practice lab ↗</button></div><details class="code-detective"><summary>Explain every line to me</summary><div class="code-breakdown">'+codeBreakdown+'</div></details></div>':'')+'</section>').join("");
    const quiz=lesson.quiz;
    const already=state.quizPassed.includes(lesson.id);
    $("#lessonDetail").innerHTML = '<div class="lesson-detail-header"><div class="eyebrow">LESSON '+String(lesson.id).padStart(2,"0")+' / '+String(lessons.length).padStart(2,"0")+' · '+escapeHTML(lesson.unit.toUpperCase())+'</div><h1>'+escapeHTML(lesson.title)+'</h1><p>'+escapeHTML(lesson.intro)+'</p><div class="zero-knowledge-note"><span class="zero-note-icon">✳</span><div><strong>Starting from zero? Perfect.</strong><p>No programming experience is expected. Read slowly, try the example, and come back to any word that feels new.</p></div></div><div class="hero-meta"><span>◷ <b>'+lesson.duration+' minutes</b></span><span>▤ '+escapeHTML(lesson.level)+'</span></div></div><div class="lesson-content-grid"><article class="lesson-body"><div class="teaching-promise"><span>🧸</span><div><strong>Super-simple mode</strong><p>One idea at a time. No memorising. If a word sounds confusing, we will explain it.</p></div></div><h2 class="lesson-section-title">Let’s make it simple</h2><p class="lesson-first-explanation">'+escapeHTML(lesson.intro)+'</p>'+sections+theoryBlock+'<div class="quiz-box"><div class="quiz-kind">NO PRESSURE · JUST PRACTICE</div><h3>Quick check <span style="color:var(--muted);font-weight:400;font-size:10px">· one question</span></h3><p style="color:var(--text)">'+escapeHTML(quiz.q)+'</p><div class="quiz-options">'+quiz.options.map((option,i)=>'<button class="quiz-option" data-answer="'+i+'">'+escapeHTML(option)+'</button>').join("")+'</div><div class="quiz-feedback" id="quizFeedback">'+(already?'✓ You passed this quick check before. Try it again for practice.':'Choose an answer to check your understanding.')+'</div></div><div class="lesson-nav"><button id="prevLesson" '+(lesson.id===1?'disabled':'')+'>← Previous</button><button id="nextLesson" '+(lesson.id===lessons.length?'disabled':'')+'>Next lesson →</button></div></article><aside class="lesson-aside"><h3>Your lesson progress</h3><div class="aside-progress"><span style="width:'+(done?100:0)+'%"></span></div><p>'+(done?'Lesson completed. Nice work!':'Read the lesson and try the quick check.')+'</p><button class="complete-button" id="markComplete">'+(done?'✓ Completed — mark again':'Mark lesson complete')+'</button><button class="bookmark-button '+(saved?'saved':'')+'" id="bookmarkLesson">'+(saved?'♥ Saved to bookmarks':'♡ Save this lesson')+'</button><hr style="border:0;border-top:1px solid var(--line);margin:18px 0"><h3>Learning tip</h3><p>Type the example yourself, then change one small part. Predict what will happen before you run it.</p><button class="secondary-button" data-goto="practice">Open practice lab ↗</button></aside></div>';
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
  function showView(name) {
    const valid=["home","learn","lesson","practice","projects","projectdetail","roadmap","bookmarks","reference","search"];
    if(!valid.includes(name)) name="home";
    $$(".view").forEach(view=>view.classList.toggle("active",view.id==="view-"+name));
    $$(".nav-link[data-view]").forEach(link=>link.classList.toggle("active",link.dataset.view===name || (name==="lesson"&&link.dataset.view==="learn")));
    const names={home:"Overview",learn:"My learning",lesson:"Lesson",practice:"Practice lab",roadmap:"Roadmap",bookmarks:"Bookmarks",reference:"Quick reference",search:"Search results",projects:"Project arena",projectdetail:"Project mission"};
    $("#breadcrumbCurrent").textContent=names[name]||"Overview";
    $("#sidebar").classList.remove("open");$("#mobileOverlay").classList.remove("show");
    if(name==="learn")renderLibrary("#lessonLibrary",currentFilter);
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
      const existing=$("#codeOutput .output-line");
      const lines=existing.length?[...existing].map(el=>({text:el.textContent,error:el.classList.contains("error")})):[];
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
    const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="scriptly-progress.json";a.click();URL.revokeObjectURL(url);
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
  document.addEventListener("click",event=>{
    const nav=event.target.closest("[data-view]");
    if(nav){event.preventDefault();showView(nav.dataset.view);if(nav.dataset.view==="home")location.hash="home";return;}
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
    if(event.target.closest("#continueButton")){openLesson($("#continueButton").dataset.lesson);return;}
    const projectButton=event.target.closest("[data-project]");if(projectButton){renderProjectDetail(projectButton.dataset.project);return;}
    const projectStarter=event.target.closest("[data-project-starter]");if(projectStarter){const p=projects.find(item=>item.id===Number(projectStarter.dataset.projectStarter));if(p){$("#codeEditor").value=p.starter.replace(/\\n/g,"\n");showView("practice");location.hash="practice";showToast("Project starter loaded. Find the TODOs and make them work.");}return;}
    const projectComplete=event.target.closest("[data-project-complete]");if(projectComplete){if(!Array.isArray(state.projectsCompleted))state.projectsCompleted=[];const id=Number(projectComplete.dataset.projectComplete);if(!state.projectsCompleted.includes(id))state.projectsCompleted.push(id);saveState();renderProjectDetail(id);showToast("Project progress saved on this device.");return;}
    if(event.target.closest("#markComplete")){markComplete(activeLesson);return;}
    if(event.target.closest("#bookmarkLesson")){toggleBookmark(activeLesson);return;}
    if(event.target.closest("#prevLesson")){if(activeLesson>1)openLesson(activeLesson-1);return;}
    if(event.target.closest("#nextLesson")){if(activeLesson<lessons.length)openLesson(activeLesson+1);return;}
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
  });
  $("#searchInput").addEventListener("keydown",event=>{if(event.key==="Enter"){searchLessons(event.target.value);event.target.blur();}});
  $("#referenceSearch").addEventListener("input",renderReference);
  $("#referenceFilters").addEventListener("click",event=>{
    const button=event.target.closest("[data-reference-filter]");
    if(!button)return;
    referenceFilter=button.dataset.referenceFilter;
    $("#referenceFilters [data-reference-filter]").forEach(item=>item.classList.toggle("active",item===button));
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
  const originalExport=exportProgress;
  document.addEventListener("click",event=>{
    const mini=event.target.closest(".mini-course");if(mini){showView("roadmap");return;}
  });
  const originalSetTheme=state.theme;
  setTheme(originalSetTheme);
  recordVisit();
  renderHome();
  const hash=location.hash;
  if(hash.startsWith("#lesson-"))openLesson(Number(hash.replace("#lesson-","")));
  else if(hash==="#learn"||hash==="#practice"||hash==="#projects"||hash==="#roadmap"||hash==="#bookmarks"||hash==="#reference")showView(hash.slice(1));
  else if(hash.startsWith("#project-"))renderProjectDetail(Number(hash.replace("#project-","")));
  else showView("home");
})();