import { test, expect } from '@playwright/test'

test.describe.parallel('Cross browser tests', () => {
	test('Cross browser test', async ({ page, browserName }) => {
		// Test Chrome
		if (browserName === 'chromium') {
			await page.goto('https://www.saucedemo.com/')
			// log in
			await page.locator('[data-test="username"]').fill('standard_user')
			await page.locator('[data-test="password"]').fill('secret_sauce')
			await page.locator('[data-test="login-button"]').click()
			// verify
			await expect(page.locator('[data-test="title"]')).toHaveText(/Products/)

			// Test Firefox
		} else if (browserName === 'firefox') {
			await page.goto('https://www.saucedemo.com/')
			// log in
			await page.locator('[data-test="username"]').fill('locked_out_user')
			await page.locator('[data-test="password"]').fill('secret_sauce')
			await page.locator('[data-test="login-button"]').click()
			// verify
			await expect(page.locator('[data-test="error"]')).toHaveText(
				/Epic sadface: Sorry, this user has been locked out./
			)

			// Test Safari
		} else if (browserName === 'webkit') {
			await page.goto('https://www.saucedemo.com/')
			// log in
			await page.locator('[data-test="username"]').fill('performance_glitch_user')
			await page.locator('[data-test="password"]').fill('secret_sauce')
			await page.locator('[data-test="login-button"]').click()
			// verify
			await expect(page.locator('[data-test="title"]')).toHaveText(/Products/)
		}
	})
})
