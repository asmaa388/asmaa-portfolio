// Captures a full-page screenshot of every project into public/projects/<slug>.jpg
// Usage:  npm i -D playwright && npx playwright install chromium && npm run shots
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { projects } from "../app/data.js";

const slug = (url) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "").replace(/[^a-z0-9]+/gi, "-").toLowerCase();

mkdirSync("public/projects", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const p of projects) {
  const file = `public/projects/${slug(p.url)}.jpg`;
  try {
    await page.goto(p.url, { waitUntil: "networkidle", timeout: 60000 });
    // scroll through the page so lazy-loaded images appear
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 150));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1000);
    const height = await page.evaluate(() => document.documentElement.scrollHeight);
    // cap very long pages so images stay light
    await page.screenshot({
      path: file, fullPage: true, type: "jpeg", quality: 65,
      clip: { x: 0, y: 0, width: 1280, height: Math.min(height, 6000) },
    });
    console.log("✓", file);
  } catch (e) {
    console.log("✗", p.url, e.message);
  }
}
await browser.close();
