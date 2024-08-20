import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/contactPage';
import { contactPageTestData } from '../data/testData';

test.describe('Contact Page Tests', () => {
    let contactPage: ContactPage;

    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.page.goto('https://ttms.com/pl/kontakt/');
        await contactPage.acceptCookies();
    });

    test('should correctly fill the form and do not submit', async () => {
        await contactPage.page.waitForSelector('form', { state: 'visible' });
        await contactPage.fillForm(
            contactPageTestData.name,
            contactPageTestData.surname,
            contactPageTestData.email,
            contactPageTestData.phone,
            contactPageTestData.message
        );

        // Możesz dodać więcej asercji, jeśli potrzebujesz
        await expect(contactPage.nameInput).toHaveValue(contactPageTestData.name);
        await expect(contactPage.surnameInput).toHaveValue(contactPageTestData.surname);
        await expect(contactPage.emailInput).toHaveValue(contactPageTestData.email);
        await expect(contactPage.phoneInput).toHaveValue(contactPageTestData.phone);
        await expect(contactPage.messageTextarea).toHaveValue(contactPageTestData.message);
    });
});
