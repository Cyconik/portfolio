# Nikhil Singh — Official Professional Portfolio Website

> Modern, high-performance personal portfolio and professional identity web application for **Nikhil Singh** (@Cyconik).
> Business Analyst • Product & Operations Analyst • Software Developer • Entrepreneur

[![Live Site](https://img.shields.io/badge/Live-Demo-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://github.com/Cyconik)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Tailwind%20CSS-0A192F?style=for-the-badge)](package.json)
[![SEO](https://img.shields.io/badge/SEO-Schema.org%20JSON--LD-059669?style=for-the-badge)](index.html)

---

## 🌟 Highlights & Architecture

- **Linear & Vercel Design Language**: Deep navy typography (`#0A192F`), clean slate accents, subtle glassmorphic cards, crisp typography, and fluid micro-interactions.
- **10 Core Sections**:
  1. **Hero Section**: Value proposition, verified metrics (+1,027% organic traffic growth, 4+ years BA experience), and interactive resume CTA.
  2. **About Me**: Professional narrative bridging Aircraft Maintenance Engineering rigor and Computer Science foundations, operating philosophy, and core disciplines.
  3. **My Journey**: Vertical milestone timeline tracking education, internships, leadership roles, and independent ventures.
  4. **Professional Experience**: Expandable experience cards for Opalspace, Creative Tura (Turbo Auto Parts), Prodemy India, Krinvi Technologies, and Careerguide.com.
  5. **Skills & Technologies**: 6-category verified skills matrix without arbitrary percentage bars.
  6. **Featured Projects**: Verified projects including QuickChat (offline BLE mesh messenger with APK download), Job Auto Apply, WebPConverter, CyberZip, and Leads Scraper.
  7. **Products & Entrepreneurship**: Dedicated venture showcase highlighting ScanSecure, SpillX, Galigram, and WebPConverter.
  8. **Awards & Education**: Mahindra All India Talent Scholarship, Krinvi Technologies Appreciation Letter, B.Tech CSE (AKTU), and AME Diploma (BTEUP 80%).
  9. **Contact**: Direct verified phone (`+91 6388693276`), location (`Noida, UP`), GitHub link, and interactive messaging form.
  10. **Footer**: Quick navigation, copyright, and smooth back-to-top scroll.
  11. **Interactive Resume Modal**: Built-in curriculum vitae viewer with 1-click printable / PDF format.

- **Modular Data Architecture**:
  - `src/data/profile.ts`
  - `src/data/experience.ts`
  - `src/data/projects.ts`
  - `src/data/products.ts`
  - `src/data/achievements.ts`
  - `src/data/skills.ts`

- **Technical SEO**:
  - Full Schema.org JSON-LD structured data for `Person` and `WebSite`.
  - Canonical URL, Open Graph metadata, and Twitter Card tags.
  - Pre-generated `sitemap.xml` and `robots.txt`.
  - Custom `404.html` page.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/Cyconik/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start local dev server
npm run dev
```

### Production Build
```bash
npm run build
# Outputs optimized static bundle into dist/
```

---

## 📦 Deployment Options

This portfolio is 100% static and zero-dependency at runtime:
1. **Vercel**: Run `vercel` or link this repository to Vercel for continuous deployment.
2. **GitHub Pages**: Push `dist/` or enable GitHub Actions workflow.
3. **Netlify**: Connect repository or run `netlify deploy --prod --dir=dist`.

---

© 2026 Nikhil Singh (@Cyconik). All rights reserved.
