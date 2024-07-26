import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Page to have in title', async ({ page }) => {
  await page.goto('https://ttms.com/');

  await expect(page).toHaveTitle(/TTMS/);
});

test('Name/Surname/Phone/Email', async ({ page }) => {
  await page.goto('https://ttms.com/contact/');
  await page.getByTestId('uc-accept-all-button').click();
  await page.getByLabel('Name *', { exact: true }).fill('Adrian');
  await page.getByLabel('Surname *').fill('Jurczuk');
  await page.getByLabel('Phone').fill('555444333');
  await page.getByLabel('E-mail *').fill('adrian.jurczuk@ttms.pl');
});