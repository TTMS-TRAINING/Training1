import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://ttms.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/TTMS/);
});

test('Contact us link', async ({ page }) => {
  await page.goto('https://ttms.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Contact us' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*contact/);
});
