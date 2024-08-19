import { test, expect } from '@playwright/test';

//standard user Chrome login
test('correct login', async ({ page, browserName }) => {
  if (browserName !== 'chromium') test.skip();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

//blocked user Firefox login
test('locked login', async ({ page, browserName }) => {
  if (browserName !== 'firefox') test.skip()
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error-button"]')).toBeVisible();
});

//glitch user Safari login
test('performance glitch login', async ({ page, browserName }) => {
  if (browserName !== 'webkit') test.skip()
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('performance_glitch_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});