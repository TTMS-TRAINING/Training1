import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';
import { ContactTestData } from '../testData/contactTestData';


test.describe('Contact form tests', () => {
    let contactPage: ContactPage;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.navigateAndAcceptCookies('https://ttms.com/contact/');            
    })

    test('Empty fields', async ({ page }) => {
        await contactPage.validateAndSend();                
        await expect(page.locator('span[data-name="name-value"]').getByText('Please complete this field')).toBeVisible();
        await expect(page.locator('span[data-name="surname-value"]').getByText('Please complete this field')).toBeVisible();
        await expect(page.locator('span[data-name="tel-value"]').getByText('Please enter your phone number')).toBeHidden();
        await expect(page.locator('span[data-name="email-value"]').getByText('Please complete this field')).toBeVisible();
        await expect(page.locator('span[data-name="email-value"]').getByText('Please enter your email address.')).toBeHidden();
        await expect(page.locator('span[data-name="acceptance-value"]').getByText('You must accept the terms and conditions before sending your message.')).toBeVisible();
        await expect(page.locator('.wpcf7-response-output').getByText('At least one field contains an error. Please check what you entered and try again.')).toBeVisible();
    });

    test('Correct all data', async ({ page }) => {
        await contactPage.fillContactForm(ContactTestData.CorrectAllData);
        //await contactPage.validateAndSend();
        //without checking validation to not spam company email
        await expect(page.locator('input[name="name-value"]')).toHaveValue('Lucas');
        await expect(page.locator('input[name="surname-value"]')).toHaveValue('Vasquez');
        await expect(page.locator('input[name="tel-value"]')).toHaveValue('0700');
        await expect(page.locator('input[name="email-value"]')).toHaveValue('lv17@rm.com');
        await expect(page.locator('textarea[name="message-value"]')).toHaveValue('Test\nmessage');
        await expect(page.locator('.wpcf7-list-item-label')).toBeChecked();
    });

    test('Correct required data', async ({ page }) => {
        await contactPage.fillContactForm(ContactTestData.CorrectRequiredData);
        //await contactPage.validateAndSend();
        //without checking validation to not spam company email
        await expect(page.locator('input[name="name-value"]')).toHaveValue('Lucas');
        await expect(page.locator('input[name="surname-value"]')).toHaveValue('Vasquez');
        await expect(page.locator('input[name="tel-value"]')).toHaveValue('');
        await expect(page.locator('input[name="email-value"]')).toHaveValue('lv17@rm.com');
        await expect(page.locator('textarea[name="message-value"]')).toHaveValue('');
        await expect(page.locator('.wpcf7-list-item-label')).toBeChecked();
    });

    test('No consent', async ({ page }) => {
        await contactPage.fillContactForm(ContactTestData.NoConsent);
        await contactPage.validateAndSend();                
        await expect(page.locator('span[data-name="name-value"]').getByText('Please complete this field')).toBeHidden();
        await expect(page.locator('span[data-name="surname-value"]').getByText('Please complete this field')).toBeHidden();
        await expect(page.locator('span[data-name="tel-value"]').getByText('Please enter your phone number')).toBeHidden();
        await expect(page.locator('span[data-name="email-value"]').getByText('Please complete this field')).toBeHidden();
        await expect(page.locator('span[data-name="email-value"]').getByText('Please enter your email address.')).toBeHidden();
        await expect(page.locator('span[data-name="acceptance-value"]').getByText('You must accept the terms and conditions before sending your message')).toBeVisible();
        await expect(page.locator('.wpcf7-response-output').getByText('At least one field contains an error. Please check what you entered and try again')).toBeVisible();
    });

    test('Incorrect phone', async ({ page }) => {
        await contactPage.fillContactForm(ContactTestData.IncorrectPhone);
        await contactPage.validateAndSend();                
        await expect(page.locator('span[data-name="name-value"]').getByText('Please complete this field')).toBeHidden();
        await expect(page.locator('span[data-name="surname-value"]').getByText('Please complete this field')).toBeHidden();
        await expect(page.locator('span[data-name="tel-value"]').getByText('Please enter your phone number')).toBeVisible();
        await expect(page.locator('span[data-name="email-value"]').getByText('Please complete this field')).toBeHidden();
        await expect(page.locator('span[data-name="email-value"]').getByText('Please enter your email address.')).toBeHidden();
        await expect(page.locator('span[data-name="acceptance-value"]').getByText('You must accept the terms and conditions before sending your message')).toBeHidden();
        await expect(page.locator('.wpcf7-response-output').getByText('At least one field contains an error. Please check what you entered and try again')).toBeVisible();
    });

    test('Incorrect email', async ({ page }) => {
        await contactPage.fillContactForm(ContactTestData.IncorrectEmail);
        await contactPage.validateAndSend();                
        await expect(page.locator('span[data-name="name-value"]').getByText('Please complete this field')).toBeHidden();
        await expect(page.locator('span[data-name="surname-value"]').getByText('Please complete this field')).toBeHidden();
        await expect(page.locator('span[data-name="tel-value"]').getByText('Please enter your phone number')).toBeHidden();
        await expect(page.locator('span[data-name="email-value"]').getByText('Please complete this field')).toBeHidden();
        await expect(page.locator('span[data-name="email-value"]').getByText('Please enter your email address.')).toBeVisible();
        await expect(page.locator('span[data-name="acceptance-value"]').getByText('You must accept the terms and conditions before sending your message')).toBeHidden();
        await expect(page.locator('.wpcf7-response-output').getByText('At least one field contains an error. Please check what you entered and try again')).toBeVisible();
    });
});