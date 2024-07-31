import { test, expect } from '@playwright/test';

test('zadanie 3', async ({ page }) => {

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

    // Add elements to the basket
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

    // Go to the basket
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Go to checkout
    await page.locator('[data-test="checkout"]').click();

    // Fill in the First name
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Jan');

    // Fill in the Last name
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('Testowy');

    // Fill in the postal code
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('123-456');

    // Continue to checkout 
    await page.locator('[data-test="continue"]').click();

    // Finish the purchase
    await page.locator('[data-test="finish"]').click();

    // Verifying the positive outcome
    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');

    // Going back to the page
    await page.locator('[data-test="back-to-products"]').click();
  });