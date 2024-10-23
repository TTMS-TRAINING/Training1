import { test, expect } from '@playwright/test';



test('test', async ({ page }) => {
  await page.goto('https://saucedemo.com/');
  // login
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: /Login/i }).click();
  // choose item and add it to the cart
  await page.getByText('Sauce Labs Fleece Jacket').click();
  await page.getByRole('button', { name: /Add to cart/i }).click();
  // open cart
  await page.click('[data-test="shopping-cart-link"]'); 
  // checkout
  await page.getByRole('button', { name: /Checkout/i }).click();
  // fille checkout form
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Jan');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Testowy');
  await page.getByPlaceholder('Zip/Postal Code').click();
  await page.getByPlaceholder('Zip/Postal Code').fill('14896');
  await page.getByRole('button', { name: /Continue/i }).click();
  await page.getByRole('button', { name: /Finish/i }).click();
  await page.getByRole('button', { name: /Back Home/i }).click()
});