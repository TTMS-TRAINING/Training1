import { test, expect } from '@playwright/test';


test.describe('chromium only', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');
    test('login as standard_user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Authentication dialog login as standard_user
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Check if user was moved to the shopping page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });  
});

test.describe('firefox only', () => {
  test.skip(({ browserName }) => browserName !== 'firefox', 'Firefox only!');
    test('login as locked_out_user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    // Authentication dialog login as standard_user
    await page.fill('#user-name', 'locked_out_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Check if login error message is displayed
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });  
}); 

test.describe('webkit only', () => {
  test.skip(({ browserName }) => browserName !== 'webkit', 'Webkit only!');
    test('login as performance_glitch_user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    // Authentication dialog login as standard_user
    await page.fill('#user-name', 'performance_glitch_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // do a timeout as for this user page loads slower
    test.setTimeout(10000);

    // Check if user was moved to the shopping page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });  
}); 