import { test, expect } from '@playwright/test';

// Test 1: Simulates a real user doing a search.
test('search for Playwright on Wikipedia', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
  await page.locator('#searchInput').fill('Playwright (software)');
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveTitle(/Playwright/i);
});

// Test 2: Check if GitHub link leads to Playwright repo
test('click GitHub link from Wikipedia Playwright page and verify URL', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Playwright_(software)');

  const githubLink = page.locator('a[href*="github.com/microsoft/playwright"]').first();

  // Click and wait for navigation in the same tab
  await Promise.all([
    page.waitForNavigation(),
    githubLink.click()
  ]);

  await expect(page).toHaveURL(/github\.com\/microsoft\/playwright/);
});


