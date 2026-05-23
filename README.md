# Diego A. de la Cruz · Portfolio

Single-page professional portfolio for a Fullstack Developer. Built with **React 18 + Vite**.

![Tech stack](https://img.shields.io/badge/React-18-61DAFB) ![Vite](https://img.shields.io/badge/Vite-6-646CFF)

---

## ✦ Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server (hot reload at http://localhost:5173)
npm run dev

# 3. Build for production (output in /dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

You need **Node.js ≥ 18**. Verify with `node -v`.

---

## ✦ Project structure

```
portfolio-react/
├── index.html                 # HTML entry — loads Google Fonts + /src/main.jsx
├── package.json
├── vite.config.js
├── public/
│   ├── portrait.jpg           # Hero photo (replace with your own)
│   └── favicon.svg
└── src/
    ├── main.jsx               # React mount + image-slot registration
    ├── App.jsx                # Root: theme state, scroll-spy nav, layout
    ├── data.js                # All resume content (single source of truth)
    ├── styles.css             # Design tokens + every component style
    ├── components/
    │   ├── Chrome.jsx         # TopBar, SideNav, Footer, SectionHeader
    │   ├── Intro.jsx          # 01 · Hero + photo + tech stack
    │   ├── Experience.jsx     # 02 · Expandable timeline
    │   ├── Learning.jsx       # 03 · Courses · education · awards · languages
    │   ├── OffHours.jsx       # 04 · Hobbies grid
    │   └── Icons.jsx          # Original abstract SVG tech icons
    └── web-components/
        └── image-slot.js      # Drag-and-drop photo slot (vanilla web component)
```

---

## ✦ Editing your content

All resume content lives in **`src/data.js`** — change anything there and the UI updates:

```js
export const RESUME = {
  name: "Your Name",
  title: "Your Title",
  about: "Your intro paragraph…",
  stack: [...],
  experience: [...],
  courses: [...],
  education: [...],
  awards: [...],
  hobbies: [...],
  // …
};
```

### Replacing the portrait photo

Drop a new image at `public/portrait.jpg` (any size — best as a **square JPG/PNG ≥ 800px**). The image-slot renders at 1:1 aspect ratio.

### Changing the accent color

Edit `--accent` in `src/styles.css` (look for `:root { … }`). Default is `#C2410C` (warm rust).

### Tweaking type

The display/body/mono fonts are CSS variables in `src/styles.css`:

```css
--display-font: "Space Grotesk", system-ui, sans-serif;
--body-font:    "Geist", "Inter", system-ui, sans-serif;
--mono-font:    "JetBrains Mono", ui-monospace, monospace;
```

Swap to any Google Font — just update the `<link>` tag in `index.html` to load it.

---

## ✦ Deploying

The site is a **static SPA** — any static host works.

### Vercel (recommended, 1-click)

```bash
npm install -g vercel
vercel
```

Or push the repo to GitHub and import in the Vercel dashboard — zero config.

### Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Set `base: '/your-repo-name/'` in `vite.config.js`.
2. Build, then push `/dist` to the `gh-pages` branch:

```bash
npm run build
npx gh-pages -d dist
```

3. Enable Pages on the `gh-pages` branch in your repo settings.

### Custom domain

After deploying, point your domain's DNS to the host's docs (Vercel/Netlify provide CNAME + A records). Both auto-provision SSL.

---

## ✦ Notes

- The `<image-slot>` web component lets you drag-and-drop a different photo at runtime — drops persist in `localStorage` keyed by the slot `id`.
- Tech icons are **original abstract glyphs** (not branded logos) — concept-level representations of Java, Spring, React, AWS, AI, Scrum, etc.
- Theme toggle (top-right) persists across reloads.
- Smooth-scroll nav + scroll-spy active state on the left side.

---

© 2026 · Diego A. de la Cruz Rojas
