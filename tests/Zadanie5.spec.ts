import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {

  //login for standard_user
      await page.goto('https://www.saucedemo.com/');
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
 //login for secret_user
      await page.goto('https://www.saucedemo.com/');
      await page.locator('[data-test="username"]').fill('locked_out_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await page.locator('[data-test="error"]').click();
  //login for performance_glitch_user
      await page.goto('https://www.saucedemo.com/');
      await page.locator('[data-test="username"]').fill('performance_glitch_user');
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
  //wait for next page with products
      await expect(page.locator('#header_container')).toBeVisible();
});
