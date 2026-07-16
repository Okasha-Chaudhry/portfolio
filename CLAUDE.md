# Portfolio — Okasha Chaudhry

Personal portfolio site. Owner: Okasha Chaudhry (github.com/Okasha-Chaudhry), CS student at Air University Islamabad, freelance developer.

## Stack
- Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS v4 (CSS-first config in globals.css, NO tailwind.config file)
- Framer Motion (animations), react-icons (Simple Icons for tech logos, FaGithub/FaLinkedin for socials), lucide-react (UI icons — note: Lucide has NO brand icons)
- Deployed on Vercel from GitHub repo Okasha-Chaudhry/portfolio, branch main. Every push to main auto-deploys.

## Architecture (IMPORTANT — follow this, do not restructure)
- src/app/ — routes only, kept thin. page.tsx just composes sections.
- src/components/ui/ — dumb reusable primitives (ProjectCard, SectionTitle). They receive data via props, never import from data/.
- src/components/layout/ — Navbar, Footer, ThemeToggle.
- src/components/sections/ — Hero, Projects, About, Journey, Skills, Contact. These import from data/ and compose ui/.
- src/data/ — ALL content lives here as typed constants (site.ts, projects.ts, skills.ts, experience.ts, education.ts). Content changes = edit these files only, no JSX changes needed.
- src/types/index.ts — shared interfaces (Project, Skill, Experience, Education, SiteConfig). The contract everything implements.
- src/hooks/ — custom hooks (useActiveSection: IntersectionObserver-based navbar highlighting).

## Design system (STRICT)
- Colors are semantic CSS variables defined in globals.css (:root = light, .dark = dark) and mapped via @theme inline.
- Components use ONLY token classes: bg-background, bg-surface, text-foreground, text-muted, border-border, bg-accent, text-accent, font-sans, font-display.
- Raw palette classes (bg-zinc-900 etc.) are BANNED in components.
- Fonts: Inter (font-sans, body) + Space Grotesk (font-display, headings) via next/font with CSS variables.
- Dark mode: user-controlled .dark class on <html>. Inline script in layout.tsx <head> applies it pre-hydration (prevents flash). ThemeToggle uses useSyncExternalStore + MutationObserver (NOT useState+useEffect — that violates react-hooks/set-state-in-effect lint rule). localStorage key: "theme".

## Common tasks
- Add a project: add an entry to src/data/projects.ts implementing the Project interface. Set featured: true to show on homepage. Screenshot goes in public/projects/<slug>.png, referenced as imageUrl: "/projects/<slug>.png". Cards without imageUrl show a designed gradient fallback automatically. No GitHub/live URL = icons simply don't render (conditional).
- Add a skill: entry in src/data/skills.ts with an icon from react-icons/si (verify the export name compiles — icon names change between versions).
- Update experience/education: src/data/experience.ts / education.ts.
- Change name/role/tagline/email/socials: src/data/site.ts (flows into Hero, Navbar, Contact, Footer, SEO metadata, and OG image automatically).
- OG image: src/app/opengraph-image.tsx — JSX rendered to PNG via ImageResponse (satori: inline styles only, display:flex required on multi-child divs).

## Conventions
- Conventional Commits: feat:/fix:/style:/refactor:/chore:/docs:, imperative mood, one logical change per commit.
- Verify before commit: npx tsc --noEmit && npm run lint (both must be silent). Vercel fails builds on lint errors.
- import type for type-only imports. No `any`.
- Owner works on Windows, PowerShell 5.1, files written via [System.IO.File]::WriteAllText with BOM-less UTF-8 ([System.Text.UTF8Encoding]::new($false)). NEVER Set-Content -Encoding UTF8 (writes BOM). For long files, use base64 + [Convert]::FromBase64String + WriteAllBytes (classic console mangles multi-line pastes).

## Known TODOs
- resume.pdf does not exist yet; resumeUrl in site.ts points to /resume.pdf but no download button is rendered (avoid dead links). Build ATS resume, then add button.
- Blood Bridge project card uses gradient fallback (no screenshot yet): public/projects/blood-bridge.png.
- Contact form (real, with email service + env vars) planned post-launch; currently mailto CTA.
- metadataBase / sitemap.ts / robots.ts contain expected URL https://okasha-chaudhry.vercel.app — sync with real Vercel URL after deploy.
- Content pass pending: hero stats numbers, About voice, "Let us" → "Let's" (use &apos;).
- Repo READMEs of RepoMind / Blood-Bridge / beauty-salon-platform need rewrites; RepoMind requirements.txt is UTF-16 + duplicated (PowerShell pip freeze artifact). Blood-Bridge had a hardcoded OneSignal REST API key committed — rotate it in OneSignal dashboard.
