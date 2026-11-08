# Asmaa Elrefai — Portfolio

Next.js 15 (App Router) + plain CSS, static export.

## Run locally
```bash
npm install
npm run dev
```

## Edit content
Everything (bio, experience, skills, projects) lives in `app/data.js`.
Project screenshots are generated automatically from each live URL.

## Deploy to Vercel
1. Push this folder to a new GitHub repo.
2. vercel.com → Add New → Project → import the repo → Deploy (no settings needed).

Or from the terminal: `npx vercel` then `npx vercel --prod`.

## Project screenshots (scrolling cards)
Cards scroll through a full-page screenshot on hover. To generate real full-page screenshots:
```bash
npm i -D playwright && npx playwright install chromium
npm run shots
```
They are saved to `public/projects/`. Without them, cards fall back to an automatic online preview.
