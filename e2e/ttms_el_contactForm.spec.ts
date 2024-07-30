
import { test, expect } from '@playwright/test';

test('complete contact form', async ({ page }) => {
	await page.goto('https://ttms.com/');
    //click Accept button on Popup
    await page.getByTestId('uc-accept-all-button').click();
    //click Contact button
    await page.getByRole('link', {name: 'Contact'}).first().click();
    //fill in the name value
    await page.fill('input[name="name-value"]','John');
    //fill in the surname value
    await page.fill('input[name="surname-value"]','Snow');
    //fill in the phone value
    await page.fill('input[name="tel-value"]', '777888999');
    //fill in the email value
    await page.fill('input[name="email-value"]', 'johnsnow@test.com');
    //fill in the message value
    //await page.fill('input[name="message-value"]', 'I know nothing!');
    await page.getByLabel('Message').fill('I know nothing!')
});