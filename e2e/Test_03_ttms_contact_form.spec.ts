import { test, expect } from '@playwright/test';

test('fill contact form', async ({ page }) => {

await page.goto('https://ttms.com/');

// go to contact page
await page.getByRole('link', { name: 'Contact' }).first().click();

// fill in the name field 
await page.fill('input[name="name-value"]', 'Tester');

// fill in the surname field 
await page.fill('input[name="surname-value"]', 'Tester');

// fill in the phone number field 
await page.fill('input[name="tel-value"]', '123 456 789');

// fill in the email field 
await page.fill('input[name="email-value"]', 'test@test.com');

// fill in the message field 
await page.getByRole('textbox',{ name: 'Message' }).fill('Test message');
});