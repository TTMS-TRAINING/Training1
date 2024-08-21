import { test, expect } from '@playwright/test'
import { ContactPage } from '../pages/ContactPage'

test.describe('Contact Page Test', () => {
	test('Filling in the contact fields', async ({ page }) => {
		const contactPage = new ContactPage(page)
		await contactPage.navigateTo('https://ttms.com/contact/')

		await contactPage.fillNameField('John')
		await contactPage.fillSurnameField('Kowalsky')
		await contactPage.fillPhoneField('700800900')
		await contactPage.fillEmailField('john.kowalsky@example.com')
		await contactPage.fillMessageField('Test is the best')

		// Sprawdzenie, czy pola zostały poprawnie wypełnione
		await expect(contactPage.getNameField()).toHaveValue('John')
		await expect(contactPage.getSurnameField()).toHaveValue('Kowalsky')
		await expect(contactPage.getPhoneField()).toHaveValue('700800900')
		await expect(contactPage.getEmailField()).toHaveValue('john.kowalsky@example.com')
		await expect(contactPage.getMessageField()).toHaveValue('Test is the best')
	})
})
