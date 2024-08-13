import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';
import { ContactData } from '../models/contactData';
import { ContactTestData } from '../testData/contactTestData';

test.describe('Contacts Page Tests', () => {
    let contactPage: ContactPage;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.navigateAndAcceptCookies('https://ttms.pl/contact');
    });

    test('fill fields properly', async ({ page }) => {
        await contactPage.fillForm(ContactTestData.FullCorrectData);
    });

    test('use wrong email ', async ({ page }) => {
        await contactPage.fillForm(ContactTestData.WrongEmail);
        await expect(page.getByText('Please enter your email address.').first()).toBeVisible();
    });

    test('empty all fields', async ({ page }) => {
        await contactPage.fillForm(ContactTestData.EmptyFields);
        await contactPage.checkValidation();
        await expect(page.getByText('At least one field contains an error. Please check what you entered and try again.').first()).toBeVisible();

    });
    test('use wrong phone', async ({ page }) => {
        await contactPage.fillForm(ContactTestData.WrongPhone);
        await expect(page.getByText('Please enter your phone number').first()).toBeVisible();

    });

});
