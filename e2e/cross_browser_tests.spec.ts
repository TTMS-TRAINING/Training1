import { test, expect } from '@playwright/test';
import { defineConfig, devices } from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('https://www.saucedemo.com/');
});

test('successfull login to standard user', async ({ browserName, page }) => {
   
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button').click();

    await expect(page.getByRole('button', {name: "Open Menu"})).toBeVisible();
    
});

test('attempt login on locked out user', async ({ browserName, page }) => {

    await page.getByPlaceholder('Username').fill('locked_out_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button').click();

    expect(page.locator('[data-test="error-button"]')).toBeVisible();
    });

test('attempt login on performance glitch user', async ({ browserName, page }) => {

    await page.getByPlaceholder('Username').fill('performance_glitch_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button').click();

    await expect(page.getByRole('button', {name: "Open Menu"})).toBeVisible();
        });