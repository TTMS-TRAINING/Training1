import { test, expect } from '@playwright/test'

test('Contact form', async ({ page }) => {
	await page.goto('https://ttms.pl/')

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/TTMS/)

	// Go to Contact
	await page.locator('#menu-item-2546 a[href="https://ttms.com/contact/"]').click()

	// Accept privacy settings
	await page.locator('button[data-testid="uc-accept-all-button"]').click()

	// Name field in the Contact form.
	await page.locator('input[name="name-value"]').fill('Jan')

	// Surname field in the Contact form.
	await page.locator('input[name="surname-value"]').fill('Kowalski')

	// Phone field in the Contact form.a
	await page.fill('input[name="tel-value"]', '100200300')

	// Email field in the Contact form.
	await page.fill('input[name="email-value"]', 'test@test.pl')

	// Message field in the Contact form.
	await page.fill('textarea[name="message-value"]', 'Wiadomość testowa.')
})
