# M. Ashrafujjaman — Portfolio

Personal portfolio site: a single-page Rails 8 app, no database, all content
in [`data/portfolio.yml`](data/portfolio.yml). Hand-written CSS via Propshaft.

## Develop

    mise install       # Ruby (see mise.toml)
    bundle install
    bin/rails server   # http://localhost:3000

## Test

    bin/rails test

## Edit content

Change `data/portfolio.yml` and push — the page is fully data-driven.
The CV served at `/resume.pdf` lives in `public/resume.pdf`.

## Deploy

Live at <https://sadek-1801.github.io/portfolio/>. Every push to `main`
runs `.github/workflows/pages.yml`: tests, `assets:precompile`, then
`bin/rails static:export` renders the page to `site/` and publishes it to
GitHub Pages. No server, no cold starts.
