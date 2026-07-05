# Portfolio Website — Design Spec

**Date:** 2026-07-06
**Owner:** M. Ashrafujjaman (Sadek, GitHub `Sadek-1801`)
**Deadline:** Live before 2026-07-07
**Location:** `~/projects/portfolio`

## Goal

A single-page personal portfolio website built with Rails 8, deployed free on
Render.com. The site itself doubles as evidence that Sadek — a frontend
engineer (Ember.js/React) — is growing into backend/Rails development.

## Architecture

- **Rails 8**, fresh app, **no ActiveRecord** (`rails new` with
  `--skip-active-record`, plus skip Action Mailer/Mailbox/Cable/Storage/Job
  extras that need a DB). No database anywhere — nothing to provision on
  Render's free tier.
- **One controller**: `PagesController#home`, root route `/`. No other routes
  besides `/up` (health check, Rails default).
- **Styling**: hand-written modern CSS (custom properties, grid/flex, light +
  dark via `prefers-color-scheme`) served by **Propshaft**. No Node, no
  bundler, no build step. No CSS framework — the visual design is part of the
  portfolio.
- **JS**: minimal or none. Importmap stays available; only use it if a small
  progressive enhancement (e.g. mobile nav toggle) needs it. No SPA behavior.
- **Content**: a `Portfolio` module (`app/models/portfolio.rb`, plain Ruby)
  loads `data/portfolio.yml` once and memoizes it (reload per-request in
  development). Views read only from this module — no content hardcoded in
  templates.

## Content model (`data/portfolio.yml`)

```yaml
profile:
  name, title, tagline, bio, location, email, whatsapp, github, linkedin,
  resume_path (/resume.pdf)
experience:        # list
  - company, url, role, period, bullets[], tech[]
projects:          # list, curated
  - name, description, tech[], repo_url (optional), live_url (optional),
    label (e.g. "Open source" / "Client work")
skills:            # grouped
  - group, items[]
education:
  - degree, institution, year, detail
```

Seed content comes from the resume (`~/Downloads/resume-full-stack-dev.pdf`,
copied into `public/resume.pdf`):

- **Profile**: M. Ashrafujjaman; Software Engineer I; frontend-strong
  (Ember.js, React, TypeScript), growing full-stack with Rails; Dhaka,
  Bangladesh; hmashrafujjaman@gmail.com; WhatsApp +880 1533 63 25 62;
  github.com/Sadek-1801; LinkedIn.
- **Experience**: Corpovisuals (Jan 2025–present, 12+ Ember.js apps against
  Rails/JSONAPI backends, 350k+ visitors/month site) and OniKanji LLC
  (part-time, React + TypeScript + Tailwind, Sentence Assembly Quiz component,
  Python audit scripts).
- **Projects**: public GitHub work with repo links (quran-web-app,
  webp-converter) plus selected client work with live URLs where available and
  "Client work" labels where repos are private (e.g. Cholo Bangladesh, MEMOs,
  Open Academy London, Law Lab, Desi Events GO).
- **Skills**: Frontend / Backend (working knowledge) / Testing & QA / Tools,
  as grouped on the resume.
- No photo exists on disk: the hero is typographic. A photo can be added to
  the YAML later without design rework.

## Page structure (single scrolling page)

1. Sticky top nav — name, anchor links (Projects, Experience, Skills,
   Contact), CV download.
2. Hero — name, title, one-line pitch, CTA buttons (View Projects /
   Download CV).
3. About — short bio.
4. Featured projects — responsive card grid; each card: name, description,
   tech chips, repo/live links or "Client work" label.
5. Experience — timeline of the two roles with resume bullets.
6. Skills — grouped chip lists.
7. Contact footer — email, WhatsApp, GitHub, LinkedIn, CV link.

Responsive from mobile up; honors `prefers-color-scheme`. Implementation uses
the `frontend-design` skill for a distinctive, non-templated look.

## Error handling

Static content, no user input, no DB. Only failure mode is malformed YAML,
which fails loudly at boot/test time. Rails default error pages suffice.

## Testing

Deliberately minimal (deadline-driven):

- Request/system smoke test: `/` returns 200 and contains the profile name
  and key section headings.
- A test that `data/portfolio.yml` parses and satisfies the expected shape
  (required profile keys, non-empty projects/experience).

## Deployment

- Public GitHub repo under `Sadek-1801` (e.g. `portfolio`).
- Render.com **free** web service connected to the repo:
  - Build: `bundle install && bundle exec rails assets:precompile`
  - Start: `bundle exec rails server -p $PORT -e production`
  - Env: `RAILS_MASTER_KEY` (from `config/master.key`)
- Live at `https://<name>.onrender.com`; custom domain can be attached later.
- Known trade-off: free tier sleeps when idle; first request after sleep takes
  ~30s.

## Out of scope (YAGNI)

Admin panel, database, auth, blog, contact form, analytics, i18n, per-project
detail pages. All can be added later without fighting this design.
