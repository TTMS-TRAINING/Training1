import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://ttms.com/');
  await page.getByRole('link', { name: 'Contact' }).first().click();

  await page.getByRole('textbox',{ name: 'Name' }).first().fill('Kamila');
  await page.getByRole('textbox',{ name: 'Surname' }).fill('Socha-Hys');
  await page.getByRole('textbox',{ name: 'Phone' }).fill('48666455444');
  await page.getByRole('textbox',{ name: 'E-mail' }).fill('kamila@test.com');
  await page.getByRole('textbox',{ name: 'Message' }).fill('Test message');



});

