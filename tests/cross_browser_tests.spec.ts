import { test, expect } from '@playwright/test';
import { assert } from 'console';

test('test1 standard_user', async ({ page }) => {
  await page.goto('https://saucedemo.com/');

  // login with standard_user credentials
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: /Login/i }).click();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});
  // login with locked_out_user credentials
test('test2 locked_out_user', async ({ page }) => {
  await page.goto('https://saucedemo.com/')  
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('locked_out_user');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: /Login/i }).click();

  await expect(page.locator('[data-test="error"]')).toContainText("locked");

});
// login with performance_glitch_user credentails

test('test3 performance_glitch_user', async ({ page }) => {
  await page.goto('https://saucedemo.com/')
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('performance_glitch_user');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /Login/i }).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});