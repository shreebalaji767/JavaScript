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
  const STORE_KEY = "scriptly-static-v1";
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
    $("#streakDays").textContent = state.visits.length ? Math.min(state.visits.length,7) : 0;
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
  function renderRoadmap() {
    $("#roadmapFull").innerHTML = modules.map((m,i)=>{
      const group=lessons.filter(l=>l.id>=m.range[0]&&l.id<=m.range[1]);
      const done=group.filter(l=>completed(l.id)).length;
      return '<article class="roadmap-module"><div class="module-icon">'+m.icon+'</div><div><h3>'+String(i+1).padStart(2,"0")+'. '+escapeHTML(m.title)+'</h3><p>'+escapeHTML(m.desc)+'</p><div class="module-bar"><span style="width:'+(done/group.length*100)+'%"></span></div></div><div class="module-lessons">'+done+' / '+group.length+' complete<br>'+group[0].duration+'+ min each</div></article>';
    }).join("");
  }
  function renderLesson(id) {
    const lesson=lessonById(id);
    if(!lesson) return;
    activeLesson=lesson.id; state.lastLesson=lesson.id;
    const done=completed(lesson.id), saved=bookmarked(lesson.id);
    const code = lesson.code;
    const sections=lesson.sections.map((section,i)=>'<h2>'+escapeHTML(section[0])+'</h2><p>'+escapeHTML(section[1])+'</p>'+(i===0?'<div class="example-box"><div class="example-top"><span>EXAMPLE.JS</span><span>JavaScript</span></div><pre><code>'+escapeHTML(code)+'</code></pre><div class="expected-output">▶ Expected output: '+escapeHTML(lesson.output)+'</div></div>':'')).join("");
    const quiz=lesson.quiz;
    const already=state.quizPassed.includes(lesson.id);
    $("#lessonDetail").innerHTML = '<div class="lesson-detail-header"><div class="eyebrow">LESSON '+String(lesson.id).padStart(2,"0")+' / '+String(lessons.length).padStart(2,"0")+' · '+escapeHTML(lesson.unit.toUpperCase())+'</div><h1>'+escapeHTML(lesson.title)+'</h1><p>'+escapeHTML(lesson.intro)+'</p><div class="hero-meta"><span>◷ <b>'+lesson.duration+' minutes</b></span><span>▤ '+escapeHTML(lesson.level)+'</span></div></div><div class="lesson-content-grid"><article class="lesson-body"><h2>Let’s make it simple</h2><p>'+escapeHTML(lesson.intro)+'</p>'+sections+'<div class="quiz-box"><h3>Quick check <span style="color:var(--muted);font-weight:400;font-size:10px">· one question</span></h3><p style="color:var(--text)">'+escapeHTML(quiz.q)+'</p><div class="quiz-options">'+quiz.options.map((option,i)=>'<button class="quiz-option" data-answer="'+i+'">'+escapeHTML(option)+'</button>').join("")+'</div><div class="quiz-feedback" id="quizFeedback">'+(already?'✓ You passed this quick check before. Try it again for practice.':'Choose an answer to check your understanding.')+'</div></div><div class="lesson-nav"><button id="prevLesson" '+(lesson.id===1?'disabled':'')+'>← Previous</button><button id="nextLesson" '+(lesson.id===lessons.length?'disabled':'')+'>Next lesson →</button></div></article><aside class="lesson-aside"><h3>Your lesson progress</h3><div class="aside-progress"><span style="width:'+(done?100:0)+'%"></span></div><p>'+(done?'Lesson completed. Nice work!':'Read the lesson and try the quick check.')+'</p><button class="complete-button" id="markComplete">'+(done?'✓ Completed — mark again':'Mark lesson complete')+'</button><button class="bookmark-button '+(saved?'saved':'')+'" id="bookmarkLesson">'+(saved?'♥ Saved to bookmarks':'♡ Save this lesson')+'</button><hr style="border:0;border-top:1px solid var(--line);margin:18px 0"><h3>Learning tip</h3><p>Type the example yourself, then change one small part. Predict what will happen before you run it.</p><button class="secondary-button" data-goto="practice">Open practice lab ↗</button></aside></div>';
    saveState();
    location.hash="lesson-"+lesson.id;
  }
  function showView(name) {
    const valid=["home","learn","lesson","practice","roadmap","bookmarks","search"];
    if(!valid.includes(name)) name="home";
    $$(".view").forEach(view=>view.classList.toggle("active",view.id==="view-"+name));
    $$(".nav-link[data-view]").forEach(link=>link.classList.toggle("active",link.dataset.view===name || (name==="lesson"&&link.dataset.view==="learn")));
    const names={home:"Overview",learn:"My learning",lesson:"Lesson",practice:"Practice lab",roadmap:"Roadmap",bookmarks:"Bookmarks",search:"Search results"};
    $("#breadcrumbCurrent").textContent=names[name]||"Overview";
    $("#sidebar").classList.remove("open");$("#mobileOverlay").classList.remove("show");
    if(name==="learn")renderLibrary("#lessonLibrary",currentFilter);
    if(name==="bookmarks")renderLibrary("#bookmarkLibrary","all",lessons.filter(l=>bookmarked(l.id)));
    if(name==="roadmap")renderRoadmap();
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
    const safeScript = '<script>const send=(type,args)=>parent.postMessage({source:"scriptly-sandbox",type,args:Array.from(args).map(v=>{try{return typeof v==="string"?v:JSON.stringify(v)??String(v)}catch{return String(v)}})}, "*");console.log=(...args)=>send("log",args);console.info=(...args)=>send("log",args);console.warn=(...args)=>send("warn",args);console.error=(...args)=>send("error",args);window.onerror=(message)=>{send("error",[message]);return true};try{new Function('+JSON.stringify(code)+' )()}catch(error){send("error",[error.name+": "+error.message])}</script>';
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
  function recordVisit() {
    const today=new Date().toISOString().slice(0,10);
    if(!state.visits.includes(today))state.visits.push(today);
    state.visits=state.visits.slice(-7);
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
    if(event.target.closest("#markComplete")){markComplete(activeLesson);return;}
    if(event.target.closest("#bookmarkLesson")){toggleBookmark(activeLesson);return;}
    if(event.target.closest("#prevLesson")){if(activeLesson>1)openLesson(activeLesson-1);return;}
    if(event.target.closest("#nextLesson")){if(activeLesson<lessons.length)openLesson(activeLesson+1);return;}
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
  $("#searchInput").addEventListener("input",event=>{if(event.target.value.trim().length>=3)searchLessons(event.target.value);});
  $("#lessonFilters").addEventListener("click",event=>{
    const button=event.target.closest("[data-filter]");if(!button)return;
    currentFilter=button.dataset.filter;
    $$(".filter-pill").forEach(p=>p.classList.toggle("active",p===button));
    renderLibrary("#lessonLibrary",currentFilter);
  });
  $("#exportProgress").addEventListener("contextmenu",event=>{event.preventDefault();$("#importFile").click();});
  $("#importFile").addEventListener("change",event=>importProgress(event.target.files[0]));
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
  else if(hash==="#learn"||hash==="#practice"||hash==="#roadmap"||hash==="#bookmarks")showView(hash.slice(1));
  else showView("home");
})();