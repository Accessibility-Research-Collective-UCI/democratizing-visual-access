# Democratizing Visual Access

A minimal Next.js, Tailwind CSS, and TypeScript site hosted on GitHub Pages.

## Local development

Use Node.js 22 and pnpm 12.16.1.

```sh
pnpm install
pnpm run dev
```

Open http://localhost:3000. Edit `app/page.tsx` to change the page.

Installation enables Husky. Before each commit, lint-staged runs ESLint and
Prettier on staged files and applies automatic fixes. Errors block the commit.

## Checks and build

```sh
pnpm run lint
pnpm run format:check
pnpm run typecheck
pnpm run build
```

Use `pnpm run format` to format files. The production build exports static files
to `out/` and uses `/democratizing-visual-access` as its base path.
If the repository name changes, update `basePath` in `next.config.ts` and the
static export assertion in `.github/workflows/deploy.yml`.

## GitHub Pages

In the repository, open **Settings → Pages** and select **GitHub Actions** as
the build and deployment source. Push to `main` to run checks, build the site,
and deploy it. Pull requests run the same checks without deployment.

The published URL is:
https://accessibility-research-collective-uci.github.io/democratizing-visual-access/
