import { test, expect } from '@playwright/test';

test('Accept privacy policy, select contact, and fill the form', async ({ page }) => {
    // Go to TTMS webside
    await page.goto('https://ttms.com/contact', { timeout: 60000 });

    // Accept privacy policy
    await page.getByRole('link', { name: 'Contact' }).first().click({ timeout: 50000 });

    // Fill form
    await page.fill('input[name="name-value"]', 'Aga', { timeout: 50000 });
    await page.fill('input[name="surname-value"]', 'Aga', { timeout: 50000 });
    await page.fill('input[name="tel-value"]', '123456789', { timeout: 50000 });
    await page.fill('input[name="email-value"]', 'test@test.com', { timeout: 50000 });
    await page.getByRole('textbox', { name: 'Message' }).fill('This is a test message', { timeout: 50000 });

});
