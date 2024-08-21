import { test, expect } from '@playwright/test'
import { ContactPage } from '../pages/ContactPage'
import { testData } from '../utils/testData'

test.describe('Contact Page Test', () => {
	test('Filling in the contact fields', async ({ page }) => {
		const contactPage = new ContactPage(page)
		await contactPage.navigateTo('https://ttms.com/contact/')

		await contactPage.fillNameField('testData.name')
		await contactPage.fillSurnameField('testData.surname')
		await contactPage.fillPhoneField('testData.phone')
		await contactPage.fillEmailField('testData.email')
		await contactPage.fillMessageField('testData.message')

		// Sprawdzenie, czy pola zostały poprawnie wypełnione
		await expect(contactPage.getNameField()).toHaveValue('testData.name')
		await expect(contactPage.getSurnameField()).toHaveValue('testData.surname')
		await expect(contactPage.getPhoneField()).toHaveValue('testData.phone')
		await expect(contactPage.getEmailField()).toHaveValue('testData.email')
		await expect(contactPage.getMessageField()).toHaveValue('testData.message')
	})
})
