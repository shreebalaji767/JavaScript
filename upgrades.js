(() => {
  "use strict";
  const STORE = "scriptly-upgrades-v1";
  const challenges = [
    {title:"Double a number",prompt:"Write doubleIt(number) so it returns twice the number.",example:"doubleIt(4) should return 8",hint:"Return number * 2. Returning a value is different from logging it.",starter:"function doubleIt(number) {\n  return number * 2;\n}",tests:[["4 becomes 8","doubleIt(4) === 8"],["0 stays 0","doubleIt(0) === 0"],["Negative numbers work","doubleIt(-3) === -6"]]},
    {title:"Adult check",prompt:"Write isAdult(age) so it returns true for ages 18 and above, otherwise false.",example:"isAdult(18) should return true",hint:"Use >= and return a boolean, not a sentence.",starter:"function isAdult(age) {\n  return age >= 18;\n}",tests:[["18 is an adult","isAdult(18) === true"],["17 is not an adult","isAdult(17) === false"],["Older ages work","isAdult(65) === true"]]},
    {title:"Sum a list",prompt:"Write sumArray(numbers) that returns the total. An empty array should return 0.",example:"sumArray([2, 3, 5]) should return 10",hint:"Use a running total, or reduce with 0 as the starting value.",starter:"function sumArray(numbers) {\n  let total = 0;\n  for (const number of numbers) total += number;\n  return total;\n}",tests:[["Adds values","sumArray([2, 3, 5]) === 10"],["Empty list returns zero","sumArray([]) === 0"],["Negative values work","sumArray([-2, 7]) === 5"]]},
    {title:"Count vowels",prompt:"Write countVowels(text) to count a, e, i, o, u letters, ignoring case.",example:'countVowels("Scriptly") should return 1',hint:"Convert to lowercase and check whether each letter appears in 'aeiou'.",starter:"function countVowels(text) {\n  const vowels = \"aeiou\";\n  let count = 0;\n  for (const letter of text.toLowerCase()) if (vowels.includes(letter)) count++;\n  return count;\n}",tests:[["Counts a simple word",'countVowels("hello") === 2'],["Ignores uppercase",'countVowels("JAVASCRIPT") === 3'],["No vowels returns zero",'countVowels("rhythm") === 0']]},
    {title:"Make a greeting",prompt:"Write makeGreeting(name) that returns a greeting with punctuation.",example:'makeGreeting("Mina") should return "Hello, Mina!"',hint:"Use a template literal or +. Include the comma, space, and exclamation mark.",starter:"function makeGreeting(name) {\n  return \"Hello, \" + name + \"!\";\n}",tests:[["Greets Mina",'makeGreeting("Mina") === "Hello, Mina!"'],["Empty name works",'makeGreeting("") === "Hello, !"'],["Returns text",'typeof makeGreeting("Ada") === "string"']]}
  ];
  const read = () => { try { const x = JSON.parse(localStorage.getItem(STORE) || "{}"); return {passed:Array.isArray(x.passed)?x.passed:[], checkpoints:x.checkpoints && typeof x.checkpoints==="object"?x.checkpoints:{}}; } catch { return {passed:[],checkpoints:{}}; } };
  const save = x => { try { localStorage.setItem(STORE, JSON.stringify(x)); } catch {} };
  let data = read(), active = 0;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const $ = (s, root=document) => root.querySelector(s);
  function addUI() {
    const nav = $(".main-nav");
    if (nav && !$("#scriptlyChallengesNav")) {
      const a=document.createElement("a"); a.className="nav-link"; a.href="#challenges"; a.dataset.upgradeView="challenges"; a.id="scriptlyChallengesNav"; a.innerHTML='<span class="nav-icon">⚑</span> Coding challenges <span class="nav-count">5</span>'; nav.append(a);
    }
    const page = $(".page-content");
    if (page && !$("#view-challenges")) {
      const section=document.createElement("section"); section.className="view"; section.id="view-challenges";
      section.innerHTML='<div class="page-heading"><div class="eyebrow">SMALL PROBLEMS. REAL SKILL.</div><h1>Coding challenges<span class="gradient-text">.</span></h1><p>Write a solution, use a hint when needed, and run automatic tests in an isolated sandbox. No score penalty for learning.</p></div><div class="challenge-layout"><article class="challenge-brief panel"><div class="panel-top"><strong>Challenge mission</strong><span class="challenge-level">BEGINNER</span></div><div class="challenge-body"><label for="challengePicker">Choose a challenge</label><select id="challengePicker" class="challenge-picker"></select><h2 id="challengeTitle"></h2><p id="challengePrompt"></p><div class="challenge-example"><strong>Example</strong><code id="challengeExample"></code></div><details class="challenge-hint"><summary>Show me a hint</summary><p id="challengeHint"></p></details><div class="challenge-progress"><span id="challengeProgressLabel"></span><div class="mini-progress"><span id="challengeProgressBar"></span></div></div></div></article><article class="challenge-editor panel"><div class="panel-top"><strong>solution.js</strong><button type="button" class="small-ghost" id="challengeReset">Reset starter</button></div><label class="sr-only" for="challengeEditor">Write your JavaScript solution</label><textarea id="challengeEditor" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea><p class="challenge-editor-help">Write the function only. The tests will call it with different inputs.</p><div class="challenge-actions"><button type="button" class="primary-button" id="runChallengeTests">Run automatic tests</button><button type="button" class="secondary-button" id="loadChallengeLab">Open in Practice Lab</button></div><div id="challengeResults" class="challenge-results" aria-live="polite"></div></article></div>';
      page.append(section);
    }
    const home=$("#view-home"), stats=home&&$(".stats-grid",home);
    if (stats && !$("#learningDashboard")) {
      const box=document.createElement("section"); box.id="learningDashboard"; box.className="learning-dashboard panel"; box.innerHTML='<div class="dashboard-heading"><div><div class="eyebrow">YOUR PERSONAL LEARNING DASHBOARD</div><h2>Progress that means something</h2><p>Progress is stored in this browser. Export a backup before changing devices.</p></div><button type="button" class="secondary-button dashboard-export" id="dashboardExport">Export backup</button></div><div class="dashboard-metrics"><article><span>Lessons completed</span><strong id="upgradeLessons">0</strong></article><article><span>Challenge wins</span><strong id="upgradeChallenges">0 / 5</strong></article><article><span>Project checkpoints</span><strong id="upgradeCheckpoints">0</strong></article><article><span>Learning streak</span><strong id="upgradeStreak">0 days</strong></article></div><div class="dashboard-next"><strong id="upgradeNextTitle">Your next step</strong><p id="upgradeNextText">Try a short challenge, then run the automatic tests.</p><button type="button" class="primary-button" data-upgrade-view="challenges">Practice with a challenge ↗</button></div>';
      stats.after(box);
    }
    const picker=$("#challengePicker");
    if(picker && !picker.options.length) challenges.forEach((x,i)=>{const o=document.createElement("option");o.value=String(i);o.textContent=(i+1)+" · "+x.title;picker.append(o);});
  }
  function updateDashboard() {
    const base=read(); data=base;
    const count=Object.values(data.checkpoints).reduce((n,a)=>n+(Array.isArray(a)?a.length:0),0);
    const set=(id,value)=>{const el=$(id);if(el)el.textContent=value;};
    set("#upgradeLessons",$("#statCompleted")?$("#statCompleted").textContent:"0");
    set("#upgradeChallenges",data.passed.length+" / "+challenges.length);
    set("#upgradeCheckpoints",String(count));
    set("#upgradeStreak",($("#streakDays")?$("#streakDays").textContent:"0")+" days");
    const next=challenges.find((x,i)=>!data.passed.includes(i));
    set("#upgradeNextTitle",next?"Next up: "+next.title:"All five challenges passed 🎉");
    set("#upgradeNextText",next?"Try "+next.title+". Predict the result, write your function, then run the tests.":"Revisit a challenge without looking at your old solution, or continue with a project.");
    const bar=$("#challengeProgressBar");if(bar)bar.style.width=(data.passed.length/challenges.length*100)+"%";
    set("#challengeProgressLabel",data.passed.length+" of "+challenges.length+" challenges passed");
  }
  function renderChallenge(index) {
    active=Math.max(0,Math.min(challenges.length-1,Number(index)||0)); const x=challenges[active];
    $("#challengePicker").value=String(active);$("#challengeTitle").textContent=x.title;$("#challengePrompt").textContent=x.prompt;$("#challengeExample").textContent=x.example;$("#challengeHint").textContent=x.hint;$("#challengeEditor").value=x.starter;
    $("#challengeResults").innerHTML=data.passed.includes(active)?"<strong>✓ Already passed</strong><p>Try it again or choose another mission.</p>":"<strong>Ready when you are.</strong><p>Run the tests to check your solution. Your code stays in this browser.</p>";
    updateDashboard();
  }
  function runTests() {
    const x=challenges[active], code=$("#challengeEditor").value;
    const labels=x.tests.map(t=>t[0]), expressions=x.tests.map(t=>"()=>("+t[1]+")");
    const body=code+"\n;const __checks=["+expressions.join(",")+"];const __labels="+JSON.stringify(labels)+";const __results=__checks.map((fn,i)=>{try{return {label:__labels[i],passed:!!fn()}}catch(e){return {label:__labels[i],passed:false,detail:e.name+': '+e.message}}});parent.postMessage({source:'scriptly-upgrade-tests',results:__results},'*');";
    const frame=document.createElement("iframe");frame.sandbox="allow-scripts";frame.title="Isolated challenge test runner";frame.style.display="none";
    frame.srcdoc='<meta http-equiv="Content-Security-Policy" content="default-src \'none\'; script-src \'unsafe-inline\' \'unsafe-eval\'; connect-src \'none\'; form-action \'none\'; base-uri \'none\'"><script>try{new Function('+JSON.stringify(body)+')()}catch(e){parent.postMessage({source:"scriptly-upgrade-tests",fatal:e.name+": "+e.message},"*")}<\/script>';
    const host=$("#challengeResults");host.innerHTML="<strong>Running tests…</strong><p>Executing in an isolated sandbox.</p>";document.body.append(frame);
    let finished=false;
    const onMessage=e=>{if(finished||e.source!==frame.contentWindow||!e.data||e.data.source!=="scriptly-upgrade-tests")return;finished=true;clearTimeout(timer);removeEventListener("message",onMessage);frame.remove();
      if(e.data.fatal){host.innerHTML="<strong>Could not run tests</strong><p>"+esc(e.data.fatal)+"</p>";return;}
      const results=e.data.results||[],n=results.filter(r=>r.passed).length,all=n===results.length;
      host.innerHTML='<strong class="'+(all?"challenge-pass":"challenge-fail")+'">'+(all?"✓ All tests passed!":n+" of "+results.length+" tests passed")+'</strong><ul>'+results.map(r=>'<li class="'+(r.passed?"test-pass":"test-fail")+'"><span>'+(r.passed?"✓":"✕")+'</span><div><strong>'+esc(r.label)+'</strong>'+(r.detail?'<small>'+esc(r.detail)+'</small>':"")+'</div></li>').join("")+'</ul><p>'+(all?"Great work. Explain why the function works before moving on.":"Read the first failed test and change one thing at a time.")+"</p>";
      if(all&&!data.passed.includes(active)){data.passed.push(active);save(data);updateDashboard();const badge=$("#scriptlyChallengesNav .nav-count");if(badge)badge.textContent=String(challenges.length-data.passed.length);}
    };
    addEventListener("message",onMessage);const timer=setTimeout(()=>{if(finished)return;finished=true;removeEventListener("message",onMessage);frame.remove();host.innerHTML="<strong>Timed out</strong><p>Check for an endless loop and try again.</p>";},2500);
  }
  function showChallengeView() {
    document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id==="view-challenges"));
    document.querySelectorAll(".nav-link[data-view]").forEach(a=>{a.classList.remove("active");a.removeAttribute("aria-current");});
    $("#scriptlyChallengesNav")?.classList.add("active");
    const crumb=$("#breadcrumbCurrent");if(crumb)crumb.textContent="Coding challenges";
    document.querySelectorAll(".nav-link").forEach(a=>{if(a.dataset.upgradeView==="challenges")a.setAttribute("aria-current","page");});
    document.querySelector("#sidebar")?.classList.remove("open");document.querySelector("#mobileOverlay")?.classList.remove("show");
    location.hash="challenges";
  }
  function attachCheckpoints() {
    const host=$("#projectDetailBody");if(!host)return;
    const projectId=Number((location.hash.match(/project-(\d+)/)||[])[1]);if(!projectId)return;
    const list=$(".project-mission ol",host);if(!list)return;
    const saved=data.checkpoints[String(projectId)]||[];
    [...list.children].forEach((li,i)=>{if(li.querySelector("[data-upgrade-checkpoint]"))return;li.classList.add("checkpoint-item");const label=document.createElement("label");label.className="checkpoint-check";label.innerHTML='<input type="checkbox" data-upgrade-checkpoint="'+projectId+'" data-index="'+i+'" '+(saved.includes(i)?"checked":"")+' aria-label="Mark checkpoint '+(i+1)+' complete">';li.prepend(label);if(saved.includes(i))li.classList.add("checkpoint-done");});
    const count=saved.length;let summary=$(".upgrade-checkpoint-summary",host);if(!summary){summary=document.createElement("p");summary.className="upgrade-checkpoint-summary checkpoint-progress-label";list.before(summary);}summary.textContent=count+" of "+list.children.length+" checkpoints complete";
    updateDashboard();
  }
  function init() {
    addUI();renderChallenge(0);updateDashboard();
    document.addEventListener("click",e=>{const target=e.target.closest("[data-upgrade-view]");if(target){e.preventDefault();e.stopImmediatePropagation();if(target.dataset.upgradeView==="challenges")showChallengeView();return;}
      if(e.target.closest("#runChallengeTests")){e.preventDefault();runTests();}
      if(e.target.closest("#challengeReset"))renderChallenge(active);
      if(e.target.closest("#loadChallengeLab")){const editor=$("#codeEditor");if(editor){editor.value=$("#challengeEditor").value;editor.dispatchEvent(new Event("input",{bubbles:true}));}document.querySelector('[data-view="practice"]')?.click();}
      if(e.target.closest("#dashboardExport"))document.querySelector("#exportProgress")?.click();
    },true);
    $("#challengePicker")?.addEventListener("change",e=>renderChallenge(e.target.value));
    $("#challengeEditor")?.addEventListener("keydown",e=>{if(e.key==="Tab"){e.preventDefault();e.target.setRangeText("  ",e.target.selectionStart,e.target.selectionEnd,"end");}});
    document.addEventListener("change",e=>{const box=e.target.closest("[data-upgrade-checkpoint]");if(!box)return;const id=String(box.dataset.upgradeCheckpoint),idx=Number(box.dataset.index),list=data.checkpoints[id]||[];data.checkpoints[id]=box.checked?[...new Set([...list,idx])]:list.filter(n=>n!==idx);save(data);attachCheckpoints();});
    const projectHost=$("#projectDetailBody");if(projectHost)new MutationObserver(()=>setTimeout(attachCheckpoints,0)).observe(projectHost,{childList:true,subtree:true});
    setInterval(()=>{updateDashboard();attachCheckpoints();},1200);
    if(location.hash==="#challenges")showChallengeView();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();