import { test, expect } from '@playwright/test';

test('Logginto different users on SauceDemo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    //logg to standard_user

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // wait to loaded
    await page.waitForSelector('.inventory_list');
    //logg to locked_out_user
    await page.fill('#user-name', 'locked_out_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // wait to loaded
    await page.waitForSelector('.inventory_list');
    //logg to performance_glitch_user
    await page.fill('#user-name', 'performance_glitch_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    // wait to loaded
    await page.waitForSelector('.inventory_list');


});