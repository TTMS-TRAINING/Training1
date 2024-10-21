import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://ttms.com/');
  await page.getByTestId('uc-accept-all-button').click();
  await page.locator('#menu-item-2546').getByRole('link', { name: 'Contact' }).click();
  await page.getByLabel('Name *', { exact: true }).click();
  await page.getByLabel('Name *', { exact: true }).fill('Jan');
  await page.getByLabel('Surname *').click();
  await page.getByLabel('Surname *').fill('Kowalski');
  await page.getByLabel('Phone').click();
  await page.getByLabel('Phone').fill('123456');
  await page.getByLabel('E-mail *').click();
  await page.getByLabel('E-mail *').fill('test@test');
  await page.getByLabel('Message').click();
  await page.getByLabel('Message').fill('abc');
});