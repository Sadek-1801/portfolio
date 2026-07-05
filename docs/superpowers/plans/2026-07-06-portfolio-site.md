# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A single-page Rails 8 portfolio site for M. Ashrafujjaman, YAML-driven content, no database, live on Render free tier.

**Architecture:** Fresh Rails 8 app with ActiveRecord and all DB-adjacent frameworks skipped. One controller/route renders one view whose content comes entirely from `data/portfolio.yml` via a plain-Ruby `Portfolio` module. Hand-written CSS via Propshaft, no Node.

**Tech Stack:** Ruby 4.0.1 (linuxbrew), Rails 8.1.3, Propshaft, importmap-rails (unused unless needed), Minitest.

## Global Constraints

- Project root: `/home/sadek/projects/portfolio` (git already initialized, spec + plan committed).
- Rails binary lives at `/home/linuxbrew/.linuxbrew/lib/ruby/gems/4.0.0/bin/rails` (not on PATH). After Task 1, always use `bin/rails`.
- No database, no ActiveRecord, anywhere. Nothing may require one at boot.
- All page content comes from `data/portfolio.yml` — no names, URLs, or copy hardcoded in views except structural labels.
- Personal data (verbatim, from resume): name `M. Ashrafujjaman`, email `hmashrafujjaman@gmail.com`, WhatsApp `+880 1533 63 25 62`, GitHub `https://github.com/Sadek-1801`, LinkedIn `http://www.linkedin.com/in/moh-ashrafujjaman`, employers `https://corpovisuals.com/` and `https://onikanji.com/`.
- Commit after every task with the trailer `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`.

---

### Task 1: Rails app skeleton

**Files:**
- Create: entire Rails app tree in `/home/sadek/projects/portfolio` (via generator)

**Interfaces:**
- Produces: a bootable Rails app; `bin/rails` binstub used by every later task.

- [ ] **Step 1: Generate the app into the existing directory**

```bash
cd /home/sadek/projects/portfolio
/home/linuxbrew/.linuxbrew/lib/ruby/gems/4.0.0/bin/rails new . \
  --name=portfolio \
  --skip-active-record --skip-active-storage --skip-active-job \
  --skip-action-mailer --skip-action-mailbox --skip-action-text \
  --skip-action-cable --skip-hotwire --skip-jbuilder \
  --skip-system-test --skip-kamal --skip-solid --skip-git
```

`--skip-git` because the repo already exists; the generator must not reinit it. If prompted about conflicting files, there should be none (only `docs/` exists).

- [ ] **Step 2: Verify the app boots without a database**

Run: `cd /home/sadek/projects/portfolio && bin/rails runner "puts Rails.version"`
Expected: prints `8.1.3` (or the generated version), no errors about database connections.

- [ ] **Step 3: Verify the test harness runs**

Run: `bin/rails test`
Expected: `0 runs, 0 assertions, 0 failures` (green, empty suite).

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "Generate Rails 8 app skeleton (no ActiveRecord)"
```

---

### Task 2: Portfolio content module

**Files:**
- Create: `data/portfolio.yml`
- Create: `app/models/portfolio.rb`
- Test: `test/models/portfolio_test.rb`

**Interfaces:**
- Produces: `Portfolio.data` → `ActiveSupport::HashWithIndifferentAccess` with keys `profile`, `experience`, `projects`, `skills`, `education`. Views call e.g. `Portfolio.data[:profile][:name]`, `Portfolio.data[:projects]` (array of hashes).

- [ ] **Step 1: Write the failing test**

```ruby
# test/models/portfolio_test.rb
require "test_helper"

class PortfolioTest < ActiveSupport::TestCase
  test "loads profile with required keys" do
    profile = Portfolio.data[:profile]
    %i[name title tagline bio location email whatsapp github linkedin resume_path].each do |key|
      assert profile[key].present?, "profile.#{key} missing"
    end
  end

  test "has non-empty experience, projects, skills, education" do
    %i[experience projects skills education].each do |key|
      assert Portfolio.data[key].is_a?(Array), "#{key} not an array"
      assert Portfolio.data[key].any?, "#{key} empty"
    end
  end

  test "every project has name, description and tech" do
    Portfolio.data[:projects].each do |p|
      assert p[:name].present? && p[:description].present? && p[:tech].is_a?(Array),
             "bad project entry: #{p.inspect}"
    end
  end
end
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bin/rails test test/models/portfolio_test.rb`
Expected: FAIL — `uninitialized constant Portfolio` (or NameError).

- [ ] **Step 3: Write the content file**

```yaml
# data/portfolio.yml
profile:
  name: "M. Ashrafujjaman"
  short_name: "Sadek"
  title: "Software Engineer I"
  tagline: "Frontend engineer — Ember.js, React & TypeScript — growing full-stack with Ruby on Rails."
  bio: >
    I'm a frontend developer in Dhaka with a year of professional experience
    shipping production web applications. At Corpovisuals I've built and
    shipped 12+ Ember.js applications against Rails/JSON:API backends,
    including a site serving 350k+ visitors a month. Part-time at OniKanji
    (US-based SaaS) I build React + TypeScript features for a kanji-learning
    platform. I care about pixel-perfect, responsive UI backed by tests —
    and I'm deliberately expanding into backend work with Rails and
    PostgreSQL. This site is part of that: it's a Rails 8 app I designed and
    built myself.
  location: "Dhaka, Bangladesh"
  email: "hmashrafujjaman@gmail.com"
  whatsapp: "+880 1533 63 25 62"
  whatsapp_url: "https://wa.me/8801533632562"
  github: "https://github.com/Sadek-1801"
  github_handle: "Sadek-1801"
  linkedin: "http://www.linkedin.com/in/moh-ashrafujjaman"
  resume_path: "/resume.pdf"

experience:
  - company: "Corpovisuals"
    url: "https://corpovisuals.com/"
    role: "Software Engineer I"
    period: "Jan 2025 — present"
    bullets:
      - "Built and shipped 12+ Ember.js front-end applications integrated with JSON:API Rails backends, including a website with 350k+ visitors per month."
      - "Implemented modular, reusable components and UI patterns for pixel-perfect layouts across 4K, 2K, FHD, tablet and mobile screens."
      - "Wrote unit and acceptance tests with Ember QUnit to keep dashboards stable; reduced visual regressions through careful QA."
      - "Worked in Git feature-branch/PR workflows with code review."
    tech: ["Ember.js", "JavaScript", "SCSS", "Bootstrap", "QUnit"]
  - company: "OniKanji LLC"
    url: "https://onikanji.com/"
    role: "Software Engineer (part-time)"
    period: "2025 — present"
    bullets:
      - "Built a production Sentence Assembly Quiz component in React + TypeScript + Tailwind: drag-and-drop UI, dynamic state, conditional validation and real-time feedback."
      - "Implemented kanji search handling, bug fixes and UI improvements across the app."
      - "Wrote AI-integrated Python audit scripts for reading and auditing CSV data."
      - "Collaborated remotely with a US-based engineering team via GitHub and Discord."
    tech: ["React", "TypeScript", "Tailwind CSS", "Python", "REST APIs"]

projects:
  - name: "Quran Web App"
    description: "A web application for reading and exploring the Qur'an, built on a structured JSON dataset of the full text."
    tech: ["JavaScript", "Next.js", "JSON data pipeline"]
    repo_url: "https://github.com/Sadek-1801/quran-web-app"
    label: "Open source"
  - name: "WebP Converter"
    description: "A command-line tool that batch-converts images to WebP, built to speed up asset optimization for client sites."
    tech: ["Python", "CLI", "Image processing"]
    repo_url: "https://github.com/Sadek-1801/webp-converter"
    label: "Open source"
  - name: "This portfolio"
    description: "The site you're reading — a Rails 8 app with YAML-driven content, no database, hand-written CSS, deployed on Render."
    tech: ["Ruby on Rails 8", "Propshaft", "CSS"]
    repo_url: "https://github.com/Sadek-1801/portfolio"
    label: "Open source"
  - name: "Cholo Bangladesh"
    description: "Frontend for a Bangladesh travel platform — one of 12+ production Ember.js apps delivered at Corpovisuals."
    tech: ["Ember.js", "SCSS", "JSON:API"]
    label: "Client work"
  - name: "MEMOs"
    description: "Web application frontend for MEMOs, built and maintained as part of the Corpovisuals engineering team."
    tech: ["Ember.js", "JavaScript", "Bootstrap"]
    label: "Client work"
  - name: "Open Academy London"
    description: "Frontend for an education platform, with responsive layouts across desktop, tablet and mobile."
    tech: ["Ember.js", "SCSS", "Responsive design"]
    label: "Client work"

skills:
  - group: "Frontend"
    items: ["JavaScript (ES6+)", "TypeScript", "Ember.js", "React", "HTML5", "CSS3 / SCSS", "Tailwind CSS"]
  - group: "Backend"
    items: ["Ruby on Rails (learning in production)", "Node.js", "Express", "MongoDB", "PostgreSQL (learning)", "REST / JSON:API"]
  - group: "Testing & QA"
    items: ["Ember QUnit", "Acceptance testing", "Minitest", "Manual QA"]
  - group: "Tools"
    items: ["Git / GitHub / GitLab", "Linux & terminal", "AI-assisted workflows", "Figma (basic)", "npm / pnpm"]

education:
  - degree: "BA (Hons) in English"
    institution: "Bangladesh Islami University"
    year: "2024"
    detail: "Major: English Literature — CGPA 3.36"
```

- [ ] **Step 4: Write the minimal implementation**

```ruby
# app/models/portfolio.rb
module Portfolio
  FILE = Rails.root.join("data", "portfolio.yml")

  def self.data
    if Rails.env.development?
      load_file
    else
      @data ||= load_file
    end
  end

  def self.load_file
    YAML.load_file(FILE).with_indifferent_access
  end
  private_class_method :load_file
end
```

- [ ] **Step 5: Run test to verify it passes**

Run: `bin/rails test test/models/portfolio_test.rb`
Expected: PASS, 3 runs, 0 failures.

- [ ] **Step 6: Commit**

```bash
git add data/portfolio.yml app/models/portfolio.rb test/models/portfolio_test.rb
git commit -m "Add YAML-driven portfolio content and Portfolio module"
```

---

### Task 3: Home page — route, controller, view

**Files:**
- Create: `app/controllers/pages_controller.rb`
- Create: `app/views/pages/home.html.erb`
- Modify: `config/routes.rb`
- Test: `test/controllers/pages_controller_test.rb`

**Interfaces:**
- Consumes: `Portfolio.data` from Task 2.
- Produces: `root_path` renders the full page; section ids `#about`, `#projects`, `#experience`, `#skills`, `#contact` are anchor targets used by the nav in Task 4's layout.

- [ ] **Step 1: Write the failing test**

```ruby
# test/controllers/pages_controller_test.rb
require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "home page renders with all sections" do
    get root_url
    assert_response :success
    assert_includes response.body, "M. Ashrafujjaman"
    %w[about projects experience skills contact].each do |section|
      assert_select "section##{section}, footer##{section}", true, "missing ##{section}"
    end
    assert_select "a[href=?]", "/resume.pdf"
  end
end
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bin/rails test test/controllers/pages_controller_test.rb`
Expected: FAIL — `undefined local variable or method 'root_url'` / routing error.

- [ ] **Step 3: Implement route, controller, view**

```ruby
# config/routes.rb
Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check
  root "pages#home"
end
```

```ruby
# app/controllers/pages_controller.rb
class PagesController < ApplicationController
  def home
    @portfolio = Portfolio.data
  end
end
```

```erb
<%# app/views/pages/home.html.erb %>
<% profile = @portfolio[:profile] %>

<header class="hero" id="top">
  <p class="hero-kicker"><%= profile[:location] %></p>
  <h1 class="hero-name"><%= profile[:name] %></h1>
  <p class="hero-title"><%= profile[:title] %></p>
  <p class="hero-tagline"><%= profile[:tagline] %></p>
  <div class="hero-actions">
    <a class="btn btn-primary" href="#projects">View projects</a>
    <a class="btn" href="<%= profile[:resume_path] %>" download>Download CV</a>
  </div>
</header>

<section id="about" class="section">
  <h2>About</h2>
  <p class="about-bio"><%= profile[:bio] %></p>
</section>

<section id="projects" class="section">
  <h2>Projects</h2>
  <div class="project-grid">
    <% @portfolio[:projects].each do |project| %>
      <article class="project-card">
        <div class="project-head">
          <h3><%= project[:name] %></h3>
          <span class="label label-<%= project[:label].parameterize %>"><%= project[:label] %></span>
        </div>
        <p><%= project[:description] %></p>
        <ul class="chip-list">
          <% project[:tech].each do |t| %><li class="chip"><%= t %></li><% end %>
        </ul>
        <div class="project-links">
          <% if project[:repo_url] %><a href="<%= project[:repo_url] %>" target="_blank" rel="noopener">Source ↗</a><% end %>
          <% if project[:live_url] %><a href="<%= project[:live_url] %>" target="_blank" rel="noopener">Live ↗</a><% end %>
        </div>
      </article>
    <% end %>
  </div>
</section>

<section id="experience" class="section">
  <h2>Experience</h2>
  <% @portfolio[:experience].each do |job| %>
    <article class="job">
      <div class="job-head">
        <h3><%= job[:role] %> · <a href="<%= job[:url] %>" target="_blank" rel="noopener"><%= job[:company] %></a></h3>
        <p class="job-period"><%= job[:period] %></p>
      </div>
      <ul class="job-bullets">
        <% job[:bullets].each do |b| %><li><%= b %></li><% end %>
      </ul>
      <ul class="chip-list">
        <% job[:tech].each do |t| %><li class="chip"><%= t %></li><% end %>
      </ul>
    </article>
  <% end %>
  <% @portfolio[:education].each do |edu| %>
    <p class="education"><strong><%= edu[:degree] %></strong> — <%= edu[:institution] %> (<%= edu[:year] %>). <%= edu[:detail] %></p>
  <% end %>
</section>

<section id="skills" class="section">
  <h2>Skills</h2>
  <% @portfolio[:skills].each do |group| %>
    <div class="skill-group">
      <h3><%= group[:group] %></h3>
      <ul class="chip-list">
        <% group[:items].each do |item| %><li class="chip"><%= item %></li><% end %>
      </ul>
    </div>
  <% end %>
</section>

<footer id="contact" class="section footer">
  <h2>Contact</h2>
  <p>Open to full-time roles — frontend or full-stack.</p>
  <ul class="contact-list">
    <li><a href="mailto:<%= profile[:email] %>"><%= profile[:email] %></a></li>
    <li><a href="<%= profile[:whatsapp_url] %>" target="_blank" rel="noopener">WhatsApp <%= profile[:whatsapp] %></a></li>
    <li><a href="<%= profile[:github] %>" target="_blank" rel="noopener">github.com/<%= profile[:github_handle] %></a></li>
    <li><a href="<%= profile[:linkedin] %>" target="_blank" rel="noopener">LinkedIn</a></li>
    <li><a href="<%= profile[:resume_path] %>" download>Résumé (PDF)</a></li>
  </ul>
</footer>
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bin/rails test`
Expected: PASS — all tests green (model + controller).

- [ ] **Step 5: Commit**

```bash
git add config/routes.rb app/controllers/pages_controller.rb app/views/pages/home.html.erb test/controllers/pages_controller_test.rb
git commit -m "Add home page rendering portfolio content"
```

---

### Task 4: Layout, visual design, resume PDF

**Files:**
- Modify: `app/views/layouts/application.html.erb`
- Create: `app/assets/stylesheets/portfolio.css` (replace default `application.css` usage)
- Create: `public/resume.pdf` (copied)

**Interfaces:**
- Consumes: section ids from Task 3, `Portfolio.data[:profile]` for nav/title/meta.

**Note for implementer:** invoke the `frontend-design:frontend-design` skill before styling; the CSS below is the concrete baseline design — refine per the skill's guidance, don't genericize it.

- [ ] **Step 1: Copy the resume**

```bash
cp /home/sadek/Downloads/resume-full-stack-dev.pdf /home/sadek/projects/portfolio/public/resume.pdf
```

- [ ] **Step 2: Write the layout**

```erb
<%# app/views/layouts/application.html.erb %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <% profile = Portfolio.data[:profile] %>
    <title><%= profile[:name] %> — <%= profile[:title] %></title>
    <meta name="description" content="<%= profile[:tagline] %>">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="color-scheme" content="light dark">
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>
    <%= stylesheet_link_tag :app %>
  </head>
  <body>
    <nav class="site-nav">
      <a class="nav-name" href="#top"><%= profile[:short_name] %>.</a>
      <div class="nav-links">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a class="nav-cv" href="<%= profile[:resume_path] %>" download>CV</a>
      </div>
    </nav>
    <main><%= yield %></main>
  </body>
</html>
```

- [ ] **Step 3: Write the stylesheet**

Replace the contents of `app/assets/stylesheets/application.css` with the design below (keeping the filename Propshaft already serves):

```css
/* app/assets/stylesheets/application.css */
:root {
  --bg: #faf7f2;
  --ink: #1c1917;
  --muted: #6f675e;
  --accent: #b45309;
  --accent-ink: #fff;
  --card: #ffffff;
  --line: #e5ddd2;
  --chip: #f0e9df;
  --max: 46rem;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #16130f;
    --ink: #ece5da;
    --muted: #9d948a;
    --accent: #e8873a;
    --accent-ink: #16130f;
    --card: #1f1b16;
    --line: #322c24;
    --chip: #2a251e;
  }
}
* { box-sizing: border-box; margin: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--ink);
  font: 17px/1.65 ui-serif, "Iowan Old Style", Georgia, serif;
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3, .site-nav, .btn, .chip, .label, .hero-kicker, .job-period {
  font-family: ui-sans-serif, system-ui, "Inter", sans-serif;
}
a { color: var(--accent); text-decoration-thickness: 1px; text-underline-offset: 3px; }

.site-nav {
  position: sticky; top: 0; z-index: 10;
  display: flex; justify-content: space-between; align-items: baseline;
  max-width: var(--max); margin: 0 auto; padding: 1rem 1.25rem;
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(8px);
}
.nav-name { font-weight: 800; font-size: 1.15rem; text-decoration: none; color: var(--ink); }
.nav-links { display: flex; gap: 1rem; font-size: .92rem; }
.nav-links a { text-decoration: none; color: var(--muted); }
.nav-links a:hover { color: var(--accent); }
.nav-cv { border: 1px solid var(--accent); border-radius: 999px; padding: .1rem .7rem; color: var(--accent) !important; }

main { max-width: var(--max); margin: 0 auto; padding: 0 1.25rem 4rem; }

.hero { padding: 5.5rem 0 4rem; }
.hero-kicker { color: var(--muted); letter-spacing: .12em; text-transform: uppercase; font-size: .78rem; }
.hero-name { font-size: clamp(2.4rem, 7vw, 3.8rem); line-height: 1.05; letter-spacing: -.02em; margin: .5rem 0; }
.hero-title { font-size: 1.25rem; color: var(--accent); font-weight: 600; font-family: ui-sans-serif, system-ui, sans-serif; }
.hero-tagline { margin-top: .75rem; color: var(--muted); max-width: 34rem; }
.hero-actions { display: flex; gap: .75rem; margin-top: 1.75rem; flex-wrap: wrap; }
.btn {
  display: inline-block; padding: .55rem 1.2rem; border-radius: 999px;
  border: 1.5px solid var(--accent); color: var(--accent);
  text-decoration: none; font-weight: 600; font-size: .95rem;
}
.btn-primary { background: var(--accent); color: var(--accent-ink); }
.btn:hover { transform: translateY(-1px); }

.section { padding: 3rem 0; border-top: 1px solid var(--line); }
.section h2 {
  font-size: .85rem; letter-spacing: .16em; text-transform: uppercase;
  color: var(--muted); margin-bottom: 1.5rem;
}
.about-bio { font-size: 1.08rem; max-width: 40rem; }

.project-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); gap: 1rem; }
.project-card {
  background: var(--card); border: 1px solid var(--line); border-radius: .9rem;
  padding: 1.15rem; display: flex; flex-direction: column; gap: .7rem;
}
.project-head { display: flex; justify-content: space-between; align-items: start; gap: .5rem; }
.project-card h3 { font-size: 1.05rem; }
.project-card p { font-size: .93rem; color: var(--muted); flex: 1; }
.label { font-size: .68rem; letter-spacing: .06em; text-transform: uppercase; white-space: nowrap;
  padding: .15rem .55rem; border-radius: 999px; border: 1px solid var(--line); color: var(--muted); }
.label-open-source { border-color: var(--accent); color: var(--accent); }
.project-links { display: flex; gap: 1rem; font-size: .9rem; font-family: ui-sans-serif, system-ui, sans-serif; }

.chip-list { display: flex; flex-wrap: wrap; gap: .4rem; list-style: none; padding: 0; }
.chip { background: var(--chip); border-radius: 999px; padding: .12rem .65rem; font-size: .78rem; color: var(--muted); }

.job { margin-bottom: 2.25rem; }
.job-head { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; flex-wrap: wrap; }
.job h3 { font-size: 1.1rem; }
.job-period { color: var(--muted); font-size: .85rem; }
.job-bullets { margin: .6rem 0 .8rem 1.1rem; display: grid; gap: .35rem; font-size: .96rem; }
.education { color: var(--muted); font-size: .95rem; }

.skill-group { margin-bottom: 1.25rem; }
.skill-group h3 { font-size: .95rem; margin-bottom: .5rem; }

.footer p { color: var(--muted); margin-bottom: 1rem; }
.contact-list { list-style: none; padding: 0; display: grid; gap: .45rem; font-size: 1rem; }
```

Keep `stylesheet_link_tag :app` (default) — it already points at `application.css`.

- [ ] **Step 4: Verify visually and re-run tests**

Run: `bin/rails test` → expected PASS.
Then: `bin/rails server -p 3000` in background, fetch `curl -s localhost:3000 | head -30` to confirm markup, and view in browser if available. Check mobile width (nav wraps sanely) and dark scheme.

- [ ] **Step 5: Commit**

```bash
git add app/views/layouts/application.html.erb app/assets/stylesheets/application.css public/resume.pdf
git commit -m "Add layout, visual design and downloadable resume"
```

---

### Task 5: Production config and Render blueprint

**Files:**
- Create: `render.yaml`
- Create: `README.md` (overwrite generated one)
- Modify: `config/environments/production.rb` (verify defaults only)

**Interfaces:**
- Produces: repo deployable on Render via Blueprint or manual web service.

- [ ] **Step 1: Add the Render blueprint**

```yaml
# render.yaml
services:
  - type: web
    name: portfolio
    runtime: ruby
    plan: free
    buildCommand: bundle install && bundle exec rails assets:precompile
    startCommand: bundle exec rails server -e production
    envVars:
      - key: SECRET_KEY_BASE
        generateValue: true
      - key: RAILS_ENV
        value: production
```

`SECRET_KEY_BASE` env var means `config/master.key` is never needed on Render.

- [ ] **Step 2: Verify a production boot locally**

```bash
SECRET_KEY_BASE=$(bin/rails secret) RAILS_ENV=production bin/rails assets:precompile
SECRET_KEY_BASE=$(bin/rails secret) RAILS_ENV=production bin/rails runner "puts :production_boot_ok"
```

Expected: assets compile, `production_boot_ok` printed. Clean up: `rm -rf public/assets && git checkout -- public 2>/dev/null || true`.

- [ ] **Step 3: Write the README**

```markdown
# M. Ashrafujjaman — Portfolio

Personal portfolio site: a single-page Rails 8 app, no database, all content
in [`data/portfolio.yml`](data/portfolio.yml). Hand-written CSS via Propshaft.

## Develop

    bundle install
    bin/rails server   # http://localhost:3000

## Test

    bin/rails test

## Edit content

Change `data/portfolio.yml` and push — the page is fully data-driven.
The CV served at `/resume.pdf` lives in `public/resume.pdf`.

## Deploy

Deployed on [Render](https://render.com) free tier via `render.yaml`
(Blueprint). `SECRET_KEY_BASE` is generated by Render; no master key needed.
```

- [ ] **Step 4: Run full suite and commit**

Run: `bin/rails test` → PASS.

```bash
git add render.yaml README.md
git commit -m "Add Render blueprint and README"
```

---

### Task 6: Publish to GitHub and deploy on Render

**Files:** none (operational task)

**Interfaces:**
- Consumes: the complete committed repo.
- Produces: live site at `https://<name>.onrender.com`.

- [ ] **Step 1: Verify SSH access to GitHub as Sadek-1801**

Run: `ssh -T git@github.com 2>&1`
Expected: `Hi Sadek-1801! You've successfully authenticated...`

- [ ] **Step 2: Create the GitHub repo**

No `gh` CLI on this machine. Either the user creates an empty **public** repo named `portfolio` at github.com/new (no README/gitignore), or use browser automation to do it with the user's logged-in session. Then:

```bash
git remote add origin git@github.com:Sadek-1801/portfolio.git
git push -u origin main
```

- [ ] **Step 3: Create the Render service**

Requires the user's Render account (login in browser). At dashboard.render.com: New → Blueprint → connect `Sadek-1801/portfolio` → Render reads `render.yaml` → Apply. (Or New → Web Service with the same build/start commands and env vars if Blueprint requires a paid feature — it doesn't as of 2025.)

- [ ] **Step 4: Verify live**

Fetch `https://portfolio-<hash>.onrender.com` (URL from Render dashboard): expect 200, page shows "M. Ashrafujjaman", `/resume.pdf` downloads. First request may take ~30s (free tier cold start).

- [ ] **Step 5: Record the live URL**

Add the live URL to the README under the title and to `data/portfolio.yml` if the "This portfolio" project entry should link to it (`live_url`), commit and push (auto-redeploys).
