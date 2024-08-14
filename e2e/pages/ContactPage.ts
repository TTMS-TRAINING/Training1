import { Page, Locator } from '@playwright/test'
import { BasePage } from './BasePage'

export class ContactPage extends BasePage {
	private nameField: Locator
	private surnameField: Locator
	private phoneField: Locator
	private emailField: Locator
	private messageField: Locator

	constructor(page: Page) {
		super(page)

		this.nameField = page.locator('input[name="name-value"]')
		this.surnameField = page.locator('input[name="surname-value"]')
		this.phoneField = page.locator('input[name="tel-value"]')
		this.emailField = page.locator('input[name="email-value"]')
		this.messageField = page.locator('textarea[name="message-value"]')
	}

	// Wypełnianie pól

	async fillNameField(name: string) {
		// Metoda do wypełniania pola imienia
		await this.nameField.fill(name) // Wypełnia pole imienia wartością przekazaną jako argument
	}

	async fillSurnameField(surname: string) {
		await this.surnameField.fill(surname)
	}

	async fillPhoneField(phone: string) {
		await this.phoneField.fill(phone)
	}

	async fillEmailField(email: string) {
		await this.emailField.fill(email)
	}

	async fillMessageField(message: string) {
		await this.messageField.fill(message)
	}

	// Asercje

	getNameField() {
		return this.nameField
	}

	getSurnameField() {
		return this.surnameField
	}

	getPhoneField() {
		return this.phoneField
	}

	getEmailField() {
		return this.emailField
	}

	getMessageField() {
		return this.messageField
	}
}
