# 🍳 CELESTIAL — Your Modern Food & Recipe Website Template 🍽️

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License: MIT">
  <img src="https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap" alt="Bootstrap">
</p>

<p align="center"><em>A clean, lightweight, and modern starting point for your delicious food blog or recipe collection — now refactored into React.</em></p>



## ⚠️ Disclaimer

Some images used in this project were obtained from Google Images for educational/demo purposes only. All rights and credits belong to their respective owners. No copyright infringement is intended.



## 📌 About This Project

**CELESTIAL** is a minimal, elegant food & recipe website template inspired by Jamie Oliver’s approach to recipe pages.  
This repository is the React refactor of the original static template (HTML + CSS). The original static site is available at the repository: [`Dendroculus/Food-Recipe-Website`](https://github.com/Dendroculus/Food-Recipe-Website) (HTML/CSS). This repository preserves the same look and user experience — the main difference is that the site’s UI is now implemented using React components and modern frontend conventions.

Key goals of this refactor:
- Convert the static markup into reusable React components.
- Use data-driven rendering (arrays + map) for repeated UI like nav dropdowns and recipe cards.
- Maintain the original visual design and responsive CSS.
- Improve accessibility by using semantic controls (buttons for actions) and ARIA where appropriate.



## 🚀 Live Demo & Preview

To preview locally:
1. Clone this repository.
2. Install dependencies and start the dev server (see Getting Started).
3. Open the app in your browser (typically http://localhost:3000).



## ⚙️ Getting Started & Local Development

### Prerequisites
- Node.js (14+ recommended)
- npm or yarn

### Install & Run
```bash
git clone https://github.com/Dendroculus/Food-Recipe-Website.git
cd Food-Recipe-Website
npm install
npm start
# or
# yarn
# yarn start
```

The dev server will serve the React app. Open the URL shown in your terminal (commonly http://localhost:3000).

### Build (production)
```bash
npm run build
# or
# yarn build
```



## 📂 Project Structure (overview)

```
Food-Recipe-Website/
├── public/                # static assets (icons, manifest, images referenced by absolute paths)
├── src/
│   ├── pages/
│   │   └── home/
│   │       ├── Home.jsx
│   │       ├── Home.css
│   │       ├── Navbar.jsx
│   │       ├── TodayPicks.jsx
│   │       └── TodayPickCard.jsx
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

Notes:
- The original static version used plain HTML/CSS. This repo keeps the same assets and styles where possible but wraps UI in React components for reusability and easier maintenance.
- Many images are kept in `public/assets/` for simplicity; consider moving frequently-updated UI assets into `src/assets/` later for bundler optimization.



## 🧩 How to Use & Customize

- Change the site title/logo: edit the `Home.jsx` / `Navbar.jsx` component.
- Add or edit navigation and dropdown items: update the data arrays in `Navbar.jsx`.
- Modify "Today's Picks": update the array in `TodayPicks.jsx`.
- Customize styles: edit `Home.css` (or split styles into component-level files if you prefer CSS modules).
- Replace assets: put your images in `public/assets/` (or `src/assets/` if you migrate) and update references.

Accessibility tip: interactive controls that do not navigate should use `<button>` (this repo uses buttons for dropdown labels and other actions to satisfy accessibility linting).



## 🔁 Differences from the Original Static Repo

- Original: static HTML/CSS files.
- This repo: same visual design and structure, rebuilt in React using class components and data-driven rendering.
- Behavioral changes:
  - Dropdowns/menus remain CSS-driven visually, but labels that are actions are implemented as `<button>` for better accessibility.
  - The site structure is componentized (Navbar, TodayPicks, TodayPickCard, etc.), making it easier to extend and maintain.



## 🔍 Notes about assets, fonts & favicons

- Keeping assets in `public/` is fine for simplicity, but for production and better caching/fingerprinting, consider moving UI assets to `src/assets/` so your bundler can optimize and fingerprint them.
- Avoid spaces in folder/filenames (rename `about us` → `about-us`) to prevent issues on some OS/CI systems.
- To replace the favicon, update the files under `public/` (favicon-32x32.png, favicon.ico, etc.) and update `<head>` links in `public/index.html`. Clear cache or version filenames to ensure browsers fetch new icons.



## ♿ Accessibility & Linting

- This refactor addresses common accessibility linter warnings by replacing `href="#"` anchors used as controls with semantic `<button>` elements.
- CSS-only modals in the repo use the `:target` pattern; if your linting flags these anchors, you can:
  - convert modals to React state controlled components, or
  - keep the pattern and add small linter suppressions for those specific lines.

Run linter before committing:
```bash
npm run lint
```



## 🤝 Contributing

Contributions welcome!

1. Fork the repo.
2. Create a branch: `git checkout -b feature/awesome-change`.
3. Make changes, run lint/tests.
4. Commit: `git commit -m "feat: add xxx"`.
5. Push and open a PR.

Please include screenshots for UI changes.



## 📄 License

This project is licensed under the **MIT License**. See the LICENSE file for details.



## 🙏 Acknowledgements

- Original design inspiration: Jamie Oliver recipe pages.
- This repo is a React refactor of the original static project in `Dendroculus/Food-Recipe-Website` (HTML/CSS). The visual look and UX remain the same — the implementation details now use React components and modern dev workflow.



## 👤 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Dendroculus">
        <img src="https://github.com/Dendroculus.png?size=100" width="100" height="100" alt="Hans 展豪" />
      </a>
      <br />
      <a href="https://github.com/Dendroculus"><strong>Hans 展豪</strong></a>
    </td>
    <td align="center">
      <a href="https://github.com/Jess2Jes">
        <img src="https://github.com/Jess2Jes.png?size=100" width="100" height="100" alt="Jess2Jes" />
      </a>
      <br />
      <a href="https://github.com/Jess2Jes"><strong>Jess2Jes</strong></a>
    </td>
    <td align="center">
      <a href="https://github.com/Solynixx">
        <img src="https://github.com/Solynixx.png?size=100" width="100" height="100" alt="Solynixx" />
      </a>
      <br />
      <a href="https://github.com/Solynixx"><strong>Solynixx</strong></a>
    </td>
    <td align="center">
      <a href="https://github.com/StevNard">
        <img src="https://github.com/StevNard.png?size=100" width="100" height="100" alt="StevNard" />
      </a>
      <br />
      <a href="https://github.com/StevNard"><strong>StevNard</strong></a>
    </td>
    <td align="center">
      <a href="https://github.com/Milkdrinker-creator">
        <img src="https://github.com/Milkdrinker-creator.png?size=100" width="100" height="100" alt="Milkdrinker-creator" />
      </a>
      <br />
      <a href="https://github.com/Milkdrinker-creator"><strong>Milkdrinker-creator</strong></a>
    </td>
  </tr>
</table>      

