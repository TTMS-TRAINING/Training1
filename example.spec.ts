import { test, expect } from '@playwright/test';

test('Zakupy', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.click('#add-to-cart-sauce-labs-backpack');
  await expect('.cart_item').not.toEqual(0);
  await page.click('.shopping_cart_link');

  await page.click('#checkout');
 await page.getByText('Checkout').click();
  await page.fill('#first-name', 'Michał');
  await page.fill('#last-name', 'Wróblewski');
  await page.fill('#postal-code', '24100');
  await page.click('#continue');
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
  await page.click('#finish');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');


})