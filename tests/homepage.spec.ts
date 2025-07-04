import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('http://localhost:4173');   // dev server URL if you have one
  await expect(page).toHaveTitle(/My Site/);
});
