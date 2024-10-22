import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://ttms.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/TTMS/);
});

test('Contact', async ({ page }) => {
  await page.goto('https://ttms.com/');

  // Click the Contact link.
  await page.getByRole('link', { name: 'Contact us' }).click();

  // Expects page to have a heading with the name of Contact.
  await expect(page.getByRole('heading', { name: 'Contact us' })).toBeVisible();
});
