import { test, expect } from '@playwright/test';

test('shopping test on SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  // login
  await page.getByRole('textbox',{ name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox',{ name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login'}).click();
  // add to cart 
  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('#shopping_cart_container');
  await page.click('#checkout');
  // fill your data 
  await page.getByRole('textbox',{ name: 'First Name' }).fill('Kamila');
  await page.getByRole('textbox',{ name: 'Last Name' }).fill('Socha-Hys');
  await page.getByRole('textbox',{ name: 'Zip/Postal Code' }).fill('0001');
  await page.click('#continue');
  await page.click('#finish');
  
 // check that your order is succeeded
  await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();
  await page.close();

});

