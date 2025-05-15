import { test, expect } from '@playwright/test';

// Test 1: Simulates a real user doing a search.
test('search for Playwright on Wikipedia', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
  await page.locator('#searchInput').fill('Playwright (software)');
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveTitle(/Playwright/i);
});
