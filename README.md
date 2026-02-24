# Positivus — Digital Marketing Agency Landing Page

A pixel-faithful recreation of the **Positivus** design using **React + Tailwind CSS**, built with Vite.

---

## 🗂 Project Structure

```
positivus/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              ← React entry point
    ├── App.jsx               ← Root component (composes all sections)
    ├── index.css             ← Tailwind directives + global styles
    └── components/
        ├── Navbar.jsx        ← Sticky nav with mobile hamburger menu
        ├── Hero.jsx          ← Hero section with headline + CTA
        ├── LogoBar.jsx       ← Partner logo strip (dark background)
        ├── SectionHeader.jsx ← Reusable green-tag section header
        ├── Services.jsx      ← 6-card services grid (light/dark/green variants)
        ├── CTABanner.jsx     ← "Let's make things happen" promo block
        ├── CaseStudies.jsx   ← Dark 3-column case study panel
        ├── WorkingProcess.jsx← Interactive accordion (01–06 steps)
        ├── Team.jsx          ← 3-col team member cards
        ├── Testimonials.jsx  ← Testimonial cards with dot navigation
        ├── Contact.jsx       ← Contact form with radio toggle
        └── Footer.jsx        ← Dark footer with nav, socials, newsletter
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

---

## 🎨 Design Tokens

| Token       | Value     | Usage                       |
|-------------|-----------|------------------------------|
| Dark base   | `#191919` | Backgrounds, borders, text   |
| Green accent| `#B9FF66` | Highlights, tags, CTAs       |
| Light bg    | `#F3F3F3` | Card backgrounds             |
| White       | `#FFFFFF` | Main page background         |

## 📱 Responsive Breakpoints

- **Mobile** (`< 640px`): Single column, hamburger nav
- **Tablet** (`640px–1024px`): Two-column grids
- **Desktop** (`> 1024px`): Full layout with decorative elements

---

## 🛠 Tech Stack

- **React 18** — Component architecture
- **Tailwind CSS 3** — Utility-first styling
- **Vite 5** — Lightning-fast dev server & build
- **DM Sans** — Clean, modern typeface (Google Fonts)
