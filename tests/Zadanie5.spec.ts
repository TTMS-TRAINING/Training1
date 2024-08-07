import { test, expect } from '@playwright/test';

// test.only('test', async ({ page }) => {


//login for standard_user
test('correct login', async ({ page, browserName }) => {
  if (browserName !== 'chromium') test.skip();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('#header_container')).toBeVisible();
});

//login for locked_out_user
test('locked login', async ({ page, browserName }) => {
  if (browserName !== 'firefox') test.skip()
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="error"]').click();
});

//login for performance_glitch_user 
test('performance glitch login', async ({ page, browserName }) => {
  if (browserName !== 'webkit') test.skip()
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('performance_glitch_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('#header_container')).toBeVisible();
});