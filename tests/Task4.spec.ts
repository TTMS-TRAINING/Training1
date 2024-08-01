import { test, expect } from '@playwright/test';

test('buy at www.saucedemo.com', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    //Login
    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();


    //Add to cart
    await page.locator('//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    await page.locator('//*[@id="add-to-cart-sauce-labs-fleece-jacket"]').click();

    //Go to cart
    await page.locator('//*[@id="shopping_cart_container"]/a').click();

    await page.getByRole('button', { name: 'Checkout' }).click();

    //Information
    await page.getByPlaceholder('First Name').fill('Zxcv');
    
    await page.getByPlaceholder('Last Name').fill('Asdf');
    
    await page.getByPlaceholder('Zip/Postal Code').fill('12-345');

    await page.getByRole('button', { name: 'Continue' }).click();

    //Overview
    await expect(page.locator('//*[@id="item_1_title_link"]/div')).toHaveText('Sauce Labs Bolt T-Shirt');
    await expect(page.locator('//*[@id="item_5_title_link"]/div')).toHaveText('Sauce Labs Fleece Jacket');

    await page.getByRole('button', { name: 'Finish' }).click();

    //Finish
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
    await expect(page.getByText('Back Home')).toBeEnabled();

});