import { test, expect} from '@playwright/test';

// first test on chrome, login as standard user
test('correct login', async ({page, browserName }) => {
  if (browserName !=='chromium')test.skip();
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.close();
  });

// second test on firefox, login on blocked user
test('blocked login', async ({ page, browserName }) => {
  if (browserName !=='firefox')test.skip()
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'locked_out_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.getByRole('heading', { name: 'Epic sadface: Sorry, this user has been locked out.' })).toBeVisible();
    await page.close();
  });

// third test on edge, login on glitch user
test('performance glitch login', async ({ page, browserName }) => {
  if (browserName !=='webkit')test.skip()
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'performance_glitch_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.close();
  }); 
