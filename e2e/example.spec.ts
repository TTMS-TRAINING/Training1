import { test, expect } from '@playwright/test';

test('fill contact form', async ({ page }) => {

// go to contact page
await page.goto('https://ttms.com/pl/kontakt/');

// fill in the name field 
await page.fill('input[name="name-value"]', 'Karol');

// fill in the surname field 
await page.fill('input[name="surname-value"]', 'Kamieński');

// fill in the phone number field 
await page.fill('input[name="tel-value"]', '6666666-66');

// fill in the email field 
await page.fill('input[name="email-value"]', 'karol@test.com');

// fill in the message field 
await page.fill('textarea[name="message-value"]', 'test test');

});
