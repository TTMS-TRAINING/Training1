import { test, expect } from '@playwright/test';

test('Name/Surname/Phone/Email', async ({ page }) => {
    await page.goto('https://ttms.com/contact/');
    await page.getByTestId('uc-accept-all-button').click();

  });