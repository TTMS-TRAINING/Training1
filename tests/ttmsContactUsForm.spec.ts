import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://ttms.com/');

  await page.getByTestId('uc-accept-all-button').click();
  // Open Contact us form
  await page.locator('#menu-item-2546').getByRole('link', { name: 'Contact' }).click();

  // Filling out the contact form
    await page.getByLabel('Name *', { exact: true }).fill('Jarek');
    await page.waitForTimeout(1000);
    await page.getByLabel('Surname *').fill('Krawczyk');
    await page.waitForTimeout(1000);
    await page.getByLabel('Phone').fill('1234567890');
    await page.waitForTimeout(1000);
    await page.getByLabel('E-mail *').fill('test@test.test');
    await page.waitForTimeout(1000);
    await page.getByLabel('Message').fill('Pick locator rulez');
    // await page.waitForTimeout(30000);
}); 