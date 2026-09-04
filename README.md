# Akash Kumar — Portfolio

Hi — I'm Akash Kumar, a Full‑Stack Web Developer (MERN) building modern, responsive web applications with a focus on clean UI and scalable engineering.

Demo: (add your live site URL here)  
Email: (add your email) · GitHub: https://github.com/Akash138170 · LinkedIn: (add your LinkedIn)

---

## Table of contents
- [About](#about)
- [Tech stack](#tech-stack)
- [Highlights / Features](#highlights--features)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Environment & integrations](#environment--integrations)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About
I build user‑centric web applications using React, TypeScript, Tailwind CSS and Node.js. I am pursuing a B.E. in Computer Science & Engineering at LNCT College (expected 2027). I enjoy turning ideas into polished products — from prototyping to production deployment.

This repository is my personal portfolio site that demonstrates:
- A responsive landing / hero section
- About / tech stack / skills
- Projects showcase
- Contact form / email integration

---

## Tech stack
- Languages: TypeScript, JavaScript, HTML, CSS
- Framework / runtime: React (Vite), TypeScript
- Styling: Tailwind CSS
- State & data: react-query (@tanstack/react-query)
- UI / icons: shadcn-ui style components, lucide-react
- Build / tooling: Vite, ESLint, PostCSS
- Integrations: EmailJS, Cloudinary / ImageKit, (Google Gemini noted in code)

Notable packages (from package.json): @emailjs/browser, @tanstack/react-query, lucide-react, react-router-dom, tailwindcss, vite

---

## Highlights / Features
- Responsive, mobile-first layout
- Modern UI components and animations
- Sections: Hero, About, Projects, Contact
- Contact form integration (EmailJS)
- Image handling and cloud storage hooks (Cloudinary / ImageKit)
- Ready for deployment to Vercel / Render

---

## Project structure
```text
src/
├── components/        # UI components: Navigation, HeroSection, AboutSection, ProjectsSection, ContactSection, etc.
├── pages/             # Page entry(s), e.g. Index, NotFound
├── assets/            # Images, icons, static assets (contains image.png used on hero)
├── hooks/             # Custom hooks (API, forms, cloud upload helpers)
├── lib/               # Utility functions, API clients
├── App.tsx            # App root: providers, router
└── main.tsx           # App bootstrap (React DOM)
public/
  ├── image.png
  └── favicon.png
package.json
tailwind.config.ts
vite.config.ts
```

How it fits together:
- main.tsx mounts App which wraps providers (react-query, tooltip/toaster) and BrowserRouter.
- Index page composes sections (Hero → About → Projects → Contact).
- Contact uses EmailJS for sending messages; projects and images reference cloud storage helpers.

---

## Getting started
Prerequisites:
- Node.js (v18+) and npm or compatible package manager

Install and run locally:
```bash
# clone
git clone https://github.com/Akash138170/-Portfolio.git
cd -Portfolio

# install
npm install

# start dev server
npm run dev
```

Build for production:
```bash
npm run build
npm run preview   # preview built output locally
```

---

## Available scripts
Extracted from package.json:
- npm run dev — start Vite dev server
- npm run build — production build
- npm run build:dev — build in development mode
- npm run lint — run ESLint
- npm run preview — preview production build

---

## Environment & integrations
The project includes integrations that may require keys/configuration. Add these to your environment (or .env) as needed:

- EmailJS (frontend): service ID, template ID and public/user ID — used by the contact form (@emailjs/browser).
- Cloudinary / ImageKit: API key / upload preset if you use cloud storage for project images.
- Any other API keys (e.g., for analytics or AI integrations like Google Gemini) — keep secrets out of the repo.

Notes:
- If the contact form uses EmailJS, set RBAC/IDs in the contact form component.
- Double-check CORS/security settings for any client-side uploads.

---

## Deployment
Recommended: Vercel (easy for Vite + React). Alternative: Render, Netlify.

Quick Vercel steps:
1. Connect GitHub repo in Vercel dashboard.
2. Set environment variables (EmailJS keys, Cloudinary, etc.) in the Vercel project settings.
3. Deploy — Vercel will run the build script.

---

## Contributing
- Open an issue or PR for fixes or improvements.
- Keep PRs small and focused; update README and add notes for any config changes.
- Run linting before opening PR: npm run lint

---

## License
This project — add your license (MIT recommended) or replace with your preferred license.

---

## Contact
Akash Kumar — (add email)  
GitHub: https://github.com/Akash138170  
LinkedIn: (add your LinkedIn)
