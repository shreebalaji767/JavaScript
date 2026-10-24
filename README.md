# Scriptly — JavaScript Learning Studio

A responsive, beginner-friendly JavaScript learning dashboard built with **plain HTML, CSS, and vanilla JavaScript**. It is designed to run as a static website on GitHub Pages.

## No framework. No backend.

- No React, Next.js, build step, database, API, or login.
- Lesson content is bundled in `app.js`.
- Progress, bookmarks, quiz results, and theme preference are stored in this browser using `localStorage`.
- Export a JSON backup before changing devices or clearing browser data.
- The practice lab runs learner code in a sandboxed iframe, not in the main page.

## Files

```text
JavaScript/
├── index.html
├── style.css
├── app.js
├── style.css
├── logo.svg
├── manifest.json
├── service-worker.js
└── README.md
```

## Run locally

You can open `index.html` directly in a browser. For a more realistic local preview, use VS Code's Live Server extension or run a simple static HTTP server. There is no install command.

## Publish on GitHub Pages

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions** and save if prompted.
3. The workflow in `.github/workflows/pages.yml` deploys the static files automatically when changes are pushed to `main`.
4. Open the **Actions** tab and wait for the **Deploy static site to GitHub Pages** workflow to finish successfully.
5. Visit **https://shreebalaji767.github.io/JavaScript/**. The first deployment can take a few minutes.

If the site still shows a 404, check that Pages uses **GitHub Actions** and that the workflow succeeds in the Actions tab.

All asset links are relative (`./style.css` and `./app.js`) so they work at the root of a GitHub Pages project site.

## Progress and privacy

Progress stays in the browser profile on the current device. It is not sent to a server and does not automatically sync across devices. Export your progress from the sidebar to make a backup. Do not save passwords, medical information, or other sensitive information in browser storage.

## Customising the course

Edit the `lessons` array near the top of `app.js` for lesson explanations, examples, outputs, and quizzes. The `theoryNotes` data powers the mental model, formal explanation, and common-trap cards. The `workshopProjects` map provides a topic-specific practical project for every lesson ID. Keep lesson IDs unique and ensure quiz answer indexes point to an existing option.

## About the design

The dashboard styling takes inspiration from [Watermelon UI](https://ui.watermelon.sh), especially its dashboard layouts, restrained surfaces, clear visual hierarchy, status indicators, and responsive app-shell patterns. Watermelon UI's published components are built for React and Tailwind CSS v4, so this project adapts the design ideas into hand-written HTML, CSS, and vanilla JavaScript rather than installing React components.

- No React or Next.js
- No Tailwind build step or npm dependencies
- No backend, API, or database
- Works as a static GitHub Pages site


## Latest upgrade

- **Quick reference library:** searchable JavaScript concept cards with categories, plain-English explanations, and copyable examples.
- **Try lesson code:** send a lesson's example straight into the practice lab with one click.
- **More accurate daily streak:** the streak now counts consecutive local calendar days rather than simply counting recent visits.
- **Responsive details:** the reference cards adapt to smaller screens.


## Teaching style: absolute beginner mode

Lessons are designed for learners starting from zero, with everyday language, small numbered steps, a reassuring note that no prior programming experience is expected, and an optional **Explain every line to me** walkthrough for each lesson's code. Each lesson ends with a low-pressure knowledge check. The goal is to explain the idea first, show the code second, and let the learner experiment immediately.


## New course philosophy: absurd theory + serious building

The course now adds a **Project arena** with eight guided, free projects, from a tip calculator to a mini portfolio. Each project includes a chaotic everyday analogy, concepts to learn, checkpoints, starter code, a hint, and a definition of done. Project completion is saved locally in your browser.

Every lesson also has a **Chaotic Theory Corner**: a memorable absurd analogy, a more formal explanation behind a disclosure, a common mistake to avoid, and a tiny experiment. The aim is not to replace accurate theory with jokes; the jokes are memory hooks for the real idea.

Suggested loop: **read the theory → predict the output → run code → build a checkpoint → debug → explain it in your own words**. Everything remains free and static, with no backend, database, login, or paid dependency.


## Math needed to master JavaScript

A new **Math for JavaScript** learning module adds lessons 19–30, using the same absurd analogy + accurate explanation + mistake to avoid + code experiment format. Topics include arithmetic and precedence, negative numbers, fractions/decimals/percentages, ratios and unit conversions, algebra, functions and graphs, powers and scientific notation, logic and sets, binary/hexadecimal and bitwise operations, statistics/probability, coordinates/geometry/trigonometry, and floating-point precision.

**Important:** advanced mathematics is not a prerequisite for most JavaScript or web development. The most useful foundations are arithmetic, percentages, basic algebra, ratios, logic, and careful handling of decimals. Binary/bitwise maths, statistics, and geometry become useful for particular projects. Calculus and advanced linear algebra are specialised topics for work such as simulations, graphics, scientific computing, and machine learning—not universal requirements for mastering the language. The lessons explain what is essential versus specialised rather than pretending everyone needs every branch of maths.


## Maths classroom
The Maths classroom teaches mathematics from the ground up, separate from programming-specific number quirks. It starts with place value and arithmetic, then factors, fractions, decimals, percentages, ratios, algebra, equations, geometry, and word-problem strategy. Lessons use plain-language theory, chaotic analogies, worked examples, JavaScript experiments, common mistakes, and quizzes. The Math Problem Solver is a separate tool for supported calculations and step-by-step working; it is not a substitute for learning the concepts.


## Full curriculum: zero to advanced

### JavaScript
The course progresses from programming basics and browser interaction to an advanced track covering higher-order functions, recursion, prototypes, classes, iterators and generators, modules, regular expressions, Map/Set, the event loop, Fetch/HTTP, browser storage, web security, testing, Node.js/npm, and performance.

### Maths
Maths from Zero teaches number sense, arithmetic, factors, fractions, decimals, percentages, ratios, algebra, equations, geometry, and word problems. Maths for JavaScript connects arithmetic, logic, binary numbers, statistics, geometry, trigonometry, and floating-point precision to programming. Advanced Maths introduces exponents and logarithms, sequences, functions and graphs, systems, polynomials, quadratics, inequalities, coordinate geometry, vectors, matrices, counting, conditional probability, statistics, limits, derivatives, integrals, trigonometry, complex numbers, graph theory, numerical methods, and financial maths.

Advanced lessons are guided introductions with worked examples, code experiments, and quizzes—not a replacement for a full university textbook. The site remains plain HTML/CSS/JavaScript and runs on GitHub Pages without a backend.


## Progressive Web App (PWA)

Scriptly can be installed as an app on supported browsers and devices. The install button in the top bar uses the browser's native install prompt when it is available; otherwise, it gives a short manual-install hint.

- **One shared logo:** `logo.svg` is the Scriptly brand mark, browser favicon, and install icon. It is a lightweight vector asset that stays sharp at different sizes.
- **Install metadata:** `manifest.json` defines the app name, standalone display, theme, launch URL, scope, and icon.
- **Offline shell:** `service-worker.js` caches the core HTML, CSS, JavaScript, manifest, and logo after the first successful online visit. It also uses a network-first strategy for page navigation and cache-first for local static assets.
- **No build step:** everything remains plain HTML, CSS, and vanilla JavaScript; no framework or npm dependency is required.
- **HTTPS required:** service workers and installability require a secure context. GitHub Pages supplies HTTPS. Opening the HTML file directly with `file://` does not enable PWA installation or offline caching.
- **Install on desktop/Android:** use the in-page **Install** button when the browser offers installation, or its menu's **Install app** option.
- **Install on iPhone/iPad:** in Safari, tap **Share → Add to Home Screen**. iOS does not expose the same `beforeinstallprompt` flow as Chromium browsers.
- **Offline limitations:** the app shell and bundled lessons are cached; external web fonts may not be available offline. Progress remains in the current browser's local storage and does not sync automatically across devices.

### Responsive and accessibility upgrades

The interface includes dedicated layout adjustments for large monitors, tablets, small phones, and short landscape screens; touch-friendly controls; safe-area padding; visible keyboard focus; and reduced-motion support. Test at several widths and on an actual device before relying on a particular browser's install prompt.


## Deep theory + practical-heavy lessons

**All 75 lessons now include a substantial study path and a topic-specific project brief.** A short code example is a starting point—not the entire lesson.

Every lesson includes:

- **Mental model:** a memorable analogy to make the concept easier to picture.
- **Formal theory:** the computer-science or mathematical idea behind the analogy.
- **Common failure mode:** a realistic misconception or mistake to watch for.
- **Expanded topic breakdowns:** open each lesson objective to read the explanation, reason about the rule, and complete a practical check.
- **Reasoning routine:** identify the goal and inputs, apply rules one step at a time, verify independently, and state limitations.
- **A project brief matched to the topic:** a concrete build or investigation rather than a generic one-line snippet.
- **Build milestones:** plan the model, implement the core, test the behaviour, and explain the design.
- **Hands-on tasks:** modify the example, deliberately debug a safe mistake, transfer the idea to a new scenario, test edge cases, and complete a stretch challenge.
- **Reflection:** explain what you built, which bug or calculation was difficult, what evidence proved the result, and what you would improve.

### Suggested lesson workflow

1. Read the mental model and formal theory.
2. Open every topic breakdown and answer the reasoning question in your own words.
3. Predict what the example will do before running it.
4. Load the example into the practice lab and modify at least three inputs or rules.
5. Complete the lesson's project brief in stages.
6. Test an ordinary case, a boundary case, and an invalid or unusual case.
7. Debug one deliberate mistake and rerun the earlier tests.
8. Finish the reflection, then take the knowledge check.

The studio project briefs cover the complete curriculum: JavaScript fundamentals and browser work, programming patterns and asynchronous APIs, maths for JavaScript, maths from zero, advanced JavaScript, and advanced mathematics. They are designed to make learners build, test, and explain—not simply copy and paste.
