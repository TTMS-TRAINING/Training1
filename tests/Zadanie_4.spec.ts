import { test, expect } from '@playwright/test'

test('Zadanie 4', async ({ page }) => {
	//Open page
	await page.goto('https://www.saucedemo.com/')

	// log in
	await page.locator('[data-test="username"]').fill('standard_user')
	await page.locator('[data-test="password"]').fill('secret_sauce')
	await page.locator('[data-test="login-button"]').click()

	// add backpack to cart
	await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()

	// go to cart
	await page.locator('[data-test="shopping-cart-link"]').click()

	// verify that the item is in the basket
	await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText(/Sauce Labs Backpack/)

	// Proceed to checkout
	await page.locator('[data-test="checkout"]').click()

	// fill in your information
	await page.locator('[data-test="firstName"]').fill('R')
	await page.locator('[data-test="lastName"]').fill('G')
	await page.locator('[data-test="postalCode"]').fill('00-000')
	await page.locator('[data-test="continue"]').click()

	// verify the checkout overview page
	await expect(page.locator('[data-test="title"]')).toHaveText(/Checkout: Overview/)

	// finish the transaction
	await page.locator('[data-test="finish"]').click()

	// Verify the success message
	await expect(page.locator('[data-test="title"]')).toHaveText(/Checkout: Complete!/)
})
