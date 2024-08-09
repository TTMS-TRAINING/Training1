import { test, expect } from '@playwright/test';


test('Login into Standard User', async ({ page }) => {
    // Go to page Saucedemo
    await page.goto('https://saucedemo.com/');
  
    // Insert login
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');

    // Insert password
    await page.locator('[data-test="password"]').click()
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click login button
    await page.locator('[data-test="login-button"]').click();
  });

  test('Login into Locked Out User', async ({ page }) => {
    // Go to page Saucedemo
    await page.goto('https://saucedemo.com/');
  
    // Insert login
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('locked_out_user');

    // Insert password
    await page.locator('[data-test="password"]').click()
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click login button
    await page.locator('[data-test="login-button"]').click();

    // Verifying the Locked out user
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
  });

  test('Login into Performance Glitch user', async ({ page }) => {
    // Go to page Saucedemo
    await page.goto('https://saucedemo.com/');
  
    // Insert login
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('performance_glitch_user');

    // Insert password
    await page.locator('[data-test="password"]').click()
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click login button
    await page.locator('[data-test="login-button"]').click();
  });
