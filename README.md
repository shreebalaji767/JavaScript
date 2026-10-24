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

Edit the `lessons` array near the top of `app.js`. Each lesson has an ID, unit, title, description, duration, explanation sections, an example, expected output, and a quiz. Keep IDs unique and ensure quiz answer indexes point to an existing option.

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
