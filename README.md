# hxruya.github.io

Personal website built with [Astro](https://astro.build), Tailwind CSS 4 and TypeScript, deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check and build to dist/
```

## Edit content

Most content lives in plain data files, so you rarely need to touch the layout:

| File | What it holds |
| --- | --- |
| `src/data/site.ts` | Name, headline, location, email, social links, nav |
| `src/data/skills.ts` | Skill groups and levels |
| `src/data/projects.ts` | Featured projects |
| `src/data/experience.ts` | Roles, education, service |

Search for `PLACEHOLDER` and `TODO` to find what still needs real content.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions** once.
