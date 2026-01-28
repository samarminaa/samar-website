# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build/Dev Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production (output in dist/)
npm run preview    # Preview production build
```

## Architecture

Astro 5 static site with markdown-based content collections.

**Content Collections** (`src/content.config.ts`):
- `projects` - Portfolio items with title, description, optional cover image
- `guides` - Travel/how-to guides with title, description, optional cover and PDF

**Pages**:
- `/` - Home, lists all projects from `src/content/projects/`
- `/about` - Static about page
- `/guides` - Lists all guides from `src/content/guides/`
- `/guides/[slug]` - Individual guide with PDF download if available
- `/projects/[slug]` - Individual project page

**Layout**: Single `BaseLayout.astro` handles HTML structure, nav, footer, and global styles. CSS uses custom properties defined in `:root`.

**Sitemap**: Auto-generated via `@astrojs/sitemap`. Update `site` in `astro.config.mjs` before deploying.
