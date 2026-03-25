# Ersan Stone

Corporate website for **Ersan Stone**, a Turkish natural stone and marble company based in Isparta. The site is a single-page application showcasing the company's portfolio, services, and contact information.

**Live site:** [ersanstone.com](https://ersanstone.com)

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org) | Framework (App Router, static export) |
| [React 18](https://react.dev) | UI library |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & parallax |
| [yet-another-react-lightbox](https://yet-another-react-lightbox.com) | Image lightbox |
| [react-icons](https://react-icons.github.io/react-icons/) | Icon set |

---

## Project Structure

```
ersanstone/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata, GA
│   ├── page.tsx          # Page assembly
│   └── globals.css       # Tailwind base styles
├── components/
│   ├── Header.tsx        # Sticky nav, transparent → white on scroll, mobile menu
│   ├── Hero.tsx          # Full-screen parallax hero with CTAs
│   ├── About.tsx         # Who we are, mission/vision, why us
│   ├── Portfolio.tsx     # Tabbed gallery with lightbox (6 categories, 66 images)
│   ├── Contact.tsx       # Contact cards and WhatsApp CTA
│   └── Footer.tsx        # Footer with copyright
├── public/
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── mezarlar/     # r1.jpg – r40.jpg  (40 images)
│   │   └── mutfak/       # kitchen, bathroom, hamam, stairs, balcony images
│   ├── CNAME             # Custom domain for GitHub Pages
│   └── favicon.ico
├── next.config.js        # Static export config
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

---

## Getting Started

**Requirements:** Node.js 18+

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at localhost:3000 |
| `npm run build` | Build static site to `out/` |
| `npm start` | Serve the production build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## Deployment

The site is deployed to **GitHub Pages** with a custom domain (`ersanstone.com`). The `CNAME` file in `public/` is automatically included in the static export so GitHub Pages recognises the custom domain.

```bash
npm run deploy
```

This runs `next build` (output goes to `out/`) then `gh-pages -d out` to push to the `gh-pages` branch.

---

## Portfolio Categories

| Category | Turkish | Images |
|---|---|---|
| Cemetery Monuments | Mezar Anıtları | 40 |
| Kitchen Countertops | Mutfak | 13 |
| Bathroom | Banyo | 2 |
| Hammam | Hamam | 2 |
| Stairs | Merdiven | 4 |
| Balcony | Balkon | 5 |

---

## Adding New Portfolio Images

1. Drop the image into the relevant folder under `public/images/`.
2. Open `components/Portfolio.tsx` and update the corresponding category's `images` array.
3. Run `npm run build` to verify, then `npm run deploy`.

---

## Contact & Social

- **WhatsApp / GSM:** +90 545 145 32 00
- **Instagram:** [@ersanstone](https://instagram.com/ersanstone)
- **Facebook:** [Ersan Stone](https://www.facebook.com/Ersan-Stone-107310218253862)
