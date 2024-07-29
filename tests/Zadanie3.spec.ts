import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ttms.com/');
  await page.getByTestId('uc-accept-all-button').click();
  await page.locator('#menu-item-2546').getByRole('link', { name: 'Contact' }).click();
  await page.getByLabel('Name *', { exact: true }).click();
  await page.getByLabel('Name *', { exact: true }).fill('Kamila');
  await page.getByLabel('Surname *').click();
  await page.getByLabel('Surname *').fill('Testowa');
  await page.getByLabel('Phone').click();
  await page.getByLabel('Phone').fill('500600700');
  await page.getByLabel('E-mail *').click();
  await page.getByLabel('E-mail *').fill('kamila.testowa@wp.pl');
  await page.getByLabel('Message').click();
  await page.getByLabel('Message').fill('test message');
});