import { test, expect } from '@playwright/test';

test('Accept privacy policy, select contact, and fill the form', async ({ page }) => {
    // Go to TTMS webside
    await page.goto('https://ttms.com/contact', { timeout: 30000 });

    // Accept privacy policy
    await page.getByRole('button', { name: 'Accept All' }).click({ timeout: 5000 });

    // Select Contact
    await page.getByRole('link', { name: 'Contact' }).click({ timeout: 5000 });

    // Fill form
    await page.getByRole('textbox', { name: 'Name*' }).fill('AGA', { timeout: 5000 });
    await page.getByRole('textbox', { name: 'Surname*' }).fill('Gatak', { timeout: 5000 });
    await page.getByRole('textbox', { name: 'Phone' }).fill('123456789', { timeout: 5000 });
    await page.getByRole('textbox', { name: 'E-mail*' }).fill('AGA@example.com', { timeout: 5000 });
    await page.getByRole('textbox', { name: 'Message' }).fill('This is a test message.', { timeout: 5000 });

});
