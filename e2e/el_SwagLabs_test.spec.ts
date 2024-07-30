import { test, expect } from '@playwright/test';

test('add an item to the cart and check out', async ({ page }) => {

//go to SwagLab page
await page.goto('https://www.saucedemo.com/');

//Log in as standard user
await page.getByPlaceholder('Username').fill('standard_user')
await page.getByPlaceholder('Password').fill('secret_sauce')
await page.getByRole('button').click();

//Add an item to the cart
await page.locator('#add-to-cart-sauce-labs-backpack').click();

//Go to the cart
await page.locator('.shopping_cart_link').click();

//Check out
await page.getByRole('button', {name:'checkout'}).click();

//Fill in the checkout form and continue
await page.getByPlaceholder('First Name').fill('John');
await page.getByPlaceholder('Last Name').fill('Snow');
await page.getByPlaceholder('Zip/Postal Code').fill('20-543')
await page.getByRole('button', {name:'continue'}).click();

//Finish the checkout
await page.getByRole('button', {name:'finish'}).click();

//Verify
await expect(page.getByRole('heading')).toHaveText('Thank you for your order!');
});