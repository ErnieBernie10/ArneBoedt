# Arne Boedt — IT Consultancy Website

A clean, professional, multi-page website for an IT consultant specializing in:

- **C# & .NET Architecture** (Clean Architecture, DDD, microservices, modular monoliths, modernization)
- **AI Evolution in Enterprises** (AI readiness, LLM integration, responsible AI, RAG, governance)

Built with [Astro](https://astro.build).

## Features

- Fully responsive multi-page design
- Modern, minimal aesthetic with excellent typography
- Mobile-friendly hamburger menu on all pages
- Working contact form (simulated)
- Case studies, testimonials, and a blog section driven by an Astro content collection
- Shared layout in `src/layouts/BaseLayout.astro`

## Tech

- Astro 7 (static output)
- Tailwind CSS via CDN (for rapid high-quality styling)
- Vanilla JavaScript
- Font Awesome icons

## How to use

```bash
npm install
npm run dev      # dev server on http://localhost:4321
npm run build    # production build to dist/
npm run preview  # serve the production build
```

## Pages

- `src/pages/index.astro` — Home with hero, services overview, case studies, testimonials, and recent writing
- `src/pages/about.astro` — Detailed biography, experience, and values
- `src/pages/services.astro` — Full service descriptions and engagement models
- `src/pages/blog.astro` — Blog listing page (generated from the blog content collection)
- `src/pages/contact.astro` — Contact form and direct details
- `src/pages/blog/[slug].astro` — Individual blog posts rendered from `src/content/blog/*.md`

## Writing

Blog posts live in `src/content/blog/*.md` with frontmatter for title, category, date, and read time.
`src/content.config.ts` validates the frontmatter schema.

## Amend

`amend.toml` declares which source files Amend may change and protects the content schema and
dynamic article renderer. Its `article` recipe creates routes below `/blog` from the repository-owned
template in `.amend/templates/article.md` and may update only the marked recent-writing region on the
home page. The Amend dev command gives Vite the `/_amend/site` transport base; production builds keep
the site's normal `/` base.

## Customization

- Replace the consultant name (Arne Boedt), contact info, and case studies
- Update colors by editing Tailwind classes or the CSS variables in `src/layouts/BaseLayout.astro`
- Swap avatars and add real images if desired

This site is intentionally generic so it can be adapted quickly for a real consultancy practice.

Built as a clean, professional demo.
