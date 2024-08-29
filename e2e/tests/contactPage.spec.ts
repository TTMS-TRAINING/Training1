import {test,expect} from '@playwright/test';
import { ContactPage } from '../pages/ContactPage'

test.describe('Contact Page Test',() => {
    test('Filling in the contact fields', async ({page}) => {
        const contactPage = new ContactPage(page);
        await contactPage.navigateTo('https://ttms.com/contact/')

        await contactPage.fillName('Testariusz');
        await contactPage.fillSurname('Testorini');
        await contactPage.fillPhone('1234567890123');
        await contactPage.fillEmail('Testariusz.Testorini@testovo.pl');
        await contactPage.fillMessege('Bijcie masterczułki');

		// Sprawdzenie, czy pola zostały poprawnie wypełnione
		await expect(contactPage.getNameFieldValue()).toHaveValue('Testariusz')
		await expect(contactPage.getSurnameFieldValue()).toHaveValue('Testorini')
		await expect(contactPage.getPhoneFieldValue()).toHaveValue('1234567890123')
		await expect(contactPage.getEmailFieldValue()).toHaveValue('Testariusz.Testorini@testovo.pl')
		await expect(contactPage.getMessageFieldValue()).toHaveValue('Bijcie masterczułki')
    })
});

