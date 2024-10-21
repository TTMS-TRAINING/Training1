import { test, expect } from '@playwright/test';



test('test', async ({ page }) => {
  await page.goto('https://ttms.com/');
  await page.getByTestId('uc-accept-all-button').click();
  await page.locator('#menu-item-2546').getByRole('link', { name: 'Contact' }).click();
  await page.getByLabel('Name *', { exact: true }).click();
  await page.getByLabel('Name *', { exact: true }).fill('Jan');
  await page.getByLabel('Name *', { exact: true }).press('Tab');
  await page.getByLabel('Surname *').fill('Kowalski');
  await page.getByLabel('Surname *').press('Tab');
  await page.getByLabel('Phone').fill('134589');
  await page.getByLabel('Phone').press('Tab');
  await page.getByLabel('E-mail *').fill('dd@kowalski');
  await page.getByLabel('E-mail *').press('Tab');
  await page.getByLabel('Message').fill('123456');
});