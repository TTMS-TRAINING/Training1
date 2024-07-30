import { test, expect } from '@playwright/test';

test('check page title', async ({ page }) => {
	await page.goto('https://ttms.com/');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/TTMS/);
});
