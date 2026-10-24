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

1. Push these files to the repository's default branch.
2. Open the repository on GitHub and go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your default branch and the `/ (root)` folder, then save.
5. Wait for GitHub Pages to publish the site. The URL will appear on the Pages settings screen.

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
