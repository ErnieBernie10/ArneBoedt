# Arne Boedt — IT Consultancy Website

A clean, professional, multi-page static website for an IT consultant specializing in:

- **C# & .NET Architecture** (Clean Architecture, DDD, microservices, modular monoliths, modernization)
- **AI Evolution in Enterprises** (AI readiness, LLM integration, responsible AI, RAG, governance)

## Features

- Fully responsive multi-page design
- Modern, minimal aesthetic with excellent typography
- Mobile-friendly hamburger menu on all pages
- Working contact form (simulated)
- Case studies, testimonials, and a blog section with multiple posts
- No build tools required — just open `index.html` or any .html file

## Tech

- Plain HTML + CSS
- Tailwind CSS via CDN (for rapid high-quality styling)
- Vanilla JavaScript
- Font Awesome icons

## How to use

1. Open `index.html` directly in any modern browser, or
2. Serve it locally:
   ```powershell
   # Simple local server (PowerShell)
   python -m http.server 8080
   # or
   npx serve .
   ```

## Pages

- `index.html` — Home with hero, services overview, case studies, testimonials, and recent writing
- `about.html` — Detailed biography, experience, and values
- `services.html` — Full service descriptions and engagement models
- `blog.html` — Blog listing page
- `contact.html` — Contact form and direct details
- `blog/*.html` — Individual blog posts

## Customization

- Replace the consultant name (Arne Boedt), contact info, and case studies
- Update colors by editing Tailwind classes or the CSS variables
- Swap avatars and add real images if desired

This site is intentionally generic so it can be adapted quickly for a real consultancy practice.

Built as a clean, professional demo.