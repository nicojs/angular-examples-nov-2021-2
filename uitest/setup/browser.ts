import { Browser, chromium } from 'playwright';

export let browser!: Browser;

beforeAll(async () => {
  browser = await chromium.launch({ headless: Boolean(process.env.CI) });
});

afterAll(async () => {
  await browser.close();
});
