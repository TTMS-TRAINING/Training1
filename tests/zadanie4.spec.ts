import { test, expect } from '@playwright/test';

test('zadanie4', async ({ page }) => {

// go to contact page
await page.goto('https://www.saucedemo.com/');

// fill in the user name field 
await page.fill('input[name="user-name"]', 'standard_user');

// fill in the password field 
await page.fill('input[name="password"]', 'secret_sauce');

// click login button
await page.click('[data-test="login-button"]');

// check visibility of element 
await expect(page.locator('[data-test="title"]')).toHaveText('Products');

// click "add to cart" button
await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

// click cart icon
await page.click('[data-test="shopping-cart-link"]'); 

// click 'checkout' button
await page.click('[data-test="checkout"]');

// check text on checkout page
await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Your Information');

// fill in the first name field 
await page.fill('input[data-test="firstName"]', 'Karol');

// fill in the last name field 
await page.fill('input[data-test="lastName"]', 'Kamieński');

// fill in the postal code field 
await page.fill('input[data-test="postalCode"]', '666');

// click 'continue' button
await page.click('[data-test="continue"]');

// click 'finish' button
await page.click('[data-test="finish"]');

//check text on finish page
await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');

//gitignore, sprawdzenie działania 

});