# Design notes

What the site looks like, why it looks that way, and where to change things.
The audience is recruiters and hiring managers; the page's one job is to get
them to open a project link or the CV.

## Concept: a Rails app answering requests

The site is built with Rails and exported statically, and its owner sells
full-stack Rails + JSON:API work, so the page presents itself as a running
app. Every structural device follows from that:

- Section headers are request lines: `GET /projects` answered by
  `200 OK · 6 rendered`. The status annotations are computed from the real
  data in `data/portfolio.yml`, not hard-coded, so they stay honest.
- The contact section is `POST /contact` → `202 Accepted · replies within a day`.
- Nav links are written as routes (`/projects`, `/experience`) in the mono face.
- Skills render as `tree`-style directory listings (`frontend/`, `backend/`,
  with `├──`/`└──` branches), in `app/views/pages/home.html.erb`.
- The footer states the architecture plainly: "Rails 8 · rendered once,
  served static from GitHub Pages."

## Palette: the Bangladesh flag

The owner is in Dhaka; the palette is the flag, used structurally rather
than decoratively:

- **Field** `#05392b` (deep bottle green): full-bleed hero band, nav bar and
  contact band. The two bands bookend the page.
- **Sun disc** `#f42a41` (flag red): a soft-blurred disc behind the name in
  the hero, plus small accents (timeline dots, bullet markers, the cv.pdf
  pill, the featured card's top rule). Red is reserved for emphasis.
- **Paper** `#f4f7f3` (green-tinted off-white): the reading surface between
  the bands.

All colors are CSS custom properties in `app/assets/stylesheets/application.css`
with a full dark-mode set behind `prefers-color-scheme`.

Text that sits on the bands uses the `--band-*` variables; the kicker and
title in the hero are near-white with a slight shadow, and the disc darkens
toward its edge, because text crosses the red circle at several widths and
must stay readable there.

## Type

- **Bricolage Grotesque** (variable, optical sizing): display and body. One
  characterful family across both roles keeps the page cohesive; the huge
  hero name uses the high optical sizes.
- **IBM Plex Mono**: everything that is "machine text" in the metaphor —
  request lines, routes, chips, tree listings, periods, the footer meta line.

The split is semantic: if the text belongs to the app (routes, statuses,
data), it is mono; if it belongs to the person, it is Bricolage.

## Layout decisions

- Single column, `--max: 46rem`, with full-bleed color bands (sections wrap
  their content in `.wrap`; the band backgrounds run edge to edge).
- Projects: 2-column grid. The first card (the flagship multi-app suite) and
  the last card (the personal project) span full width, bookending the four
  standard client cards; the featured card carries a red top rule.
- Experience: a timeline rail with red disc markers per role.
- Mobile (≤40rem): one column everywhere; the nav reduces to brand + cv.pdf
  (a phone user scrolls a single page, section links add noise); bullet
  indents tighten.

## Motion

One orchestrated moment: the hero content rises in a 0.55s stagger on load
(kicker → name → title → tagline → buttons → icon links). Everything else is
micro (hover lifts). All animation is wrapped in
`prefers-reduced-motion: no-preference`.

## Contact modal

A native `<dialog>` pops 9s after landing: a short open invitation with
LinkedIn and email buttons. Constraints that keep it polite:

- Fires once per browser session (`sessionStorage` flag), so reloads and
  return visits inside a session are never interrupted twice.
- Dismissible three ways: close button, Esc, backdrop click.
- Progressive enhancement: browsers without `<dialog>` never see it, and the
  page carries no other JavaScript.

The message text is `profile.contact_prompt` in `data/portfolio.yml`; the
delay lives in the inline script at the bottom of `home.html.erb`.

## Content principles

- Everything renders from `data/portfolio.yml`; no copy lives in templates.
- Projects are curated (six), not exhaustive; each card leads with what a
  recruiter scans for: what it is, the stack chips, a live link when public.
- The CV buttons point at a Google Drive file (`profile.resume_path`) so the
  PDF can be replaced without a deploy.
- No em-dashes in site copy; counts and dates come from the data.

## Accessibility floor

- Request lines and tree connectors are `aria-hidden` decoration; groups and
  icon links carry `aria-label`s.
- Focus is visible everywhere (red outline), including inside the modal.
- Light and dark schemes both derive from the same variable set.
- Chips and muted text were bumped in size/contrast after review; if adding
  new muted text, check it against the paper background first.
