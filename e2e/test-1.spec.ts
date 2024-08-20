import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ttms.com/');
  await page.getByTestId('uc-accept-all-button').click();
  await page.locator('#menu-item-2546').getByRole('link', { name: 'Contact' }).click();
});