import { test, expect } from '@playwright/test';

test('Cross Browser Testing - Standard User', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
});

test('Cross Browser Testing - Locked Out User', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
});

test('Cross Browser Testing - Performance Glitch User', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('performance_glitch_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForLoadState;
});