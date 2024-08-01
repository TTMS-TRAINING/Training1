import { test, expect } from '@playwright/test';

test('login and purchase on saucedemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Authentication dialog login as standard user
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Check if user was moved to the shopping page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  
  // Add some items to the cart
  await page.click('#add-to-cart-sauce-labs-bike-light');
  await page.click('#add-to-cart-sauce-labs-fleece-jacket');

  // Move to shopping cart
  await page.click('.shopping_cart_link');

  // Check the amount of items in the shopping cart
  await expect(page.locator('.cart_item')).toHaveCount(2);

  // Navigate to checkout page
  await page.click('#checkout');

  // Provide user data
  await page.fill('#first-name', 'Krzysztof');
  await page.fill('#last-name', 'Jarzyna');
  await page.fill('#postal-code', '11111');
  await page.click('#continue');

  // Check if user was moved to the checkout page
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

  // Click the finish button
  await page.click('#finish');

  // Check if operation ends with success
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

});  