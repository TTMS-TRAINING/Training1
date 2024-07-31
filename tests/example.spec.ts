import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://ttms.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/TTMS/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://ttms.com/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
// test('has white background', async({page})=>{
// await page.goto('https://ttms.com/');
// await expect(page).toHaveScreenshot()

// });