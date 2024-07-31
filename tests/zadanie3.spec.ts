import { test, expect } from '@playwright/test';

test('Name/Surname/Phone/Email', async ({ page }) => {
    await page.goto('https://ttms.com/contact/');
    await page.getByTestId('uc-accept-all-button').click();
    await page.waitForTimeout(1000);
    await page.getByLabel('Name *', { exact: true }).fill('Adrian');
    await page.waitForTimeout(1000);
    await page.getByLabel('Surname *').fill('Jurczuk');
    await page.waitForTimeout(1000);
    await page.getByLabel('Phone').fill('555444333');
    await page.waitForTimeout(1000);
    await page.getByLabel('E-mail *').fill('adrian.jurczuk@ttms.pl');
    await page.waitForTimeout(1000);
  });