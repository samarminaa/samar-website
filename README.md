# samar-website

Personal website built with Astro. Features projects and guides with markdown-based content.

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be available at `http://localhost:4321`.

## Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── pages/           # Route pages
├── content/         # Markdown content (projects, guides)
├── layouts/         # Page layouts
└── components/      # Reusable components

public/
├── images/          # Static images
└── downloads/       # PDFs and other files
```

## Adding Content

### Projects

Create a new `.md` file in `src/content/projects/`:

```yaml
---
title: Project Name
description: Short description
cover: /images/project-cover.jpg
---

Markdown content here...
```

### Guides

Create a new `.md` file in `src/content/guides/`:

```yaml
---
title: Guide Name
description: Short description
cover: /images/guide-cover.jpg
pdf: /downloads/guide.pdf  # optional
---

Markdown content here...
```

## Deployment

Update `site` in `astro.config.mjs` to your domain before deploying. Build output is in `dist/`.
