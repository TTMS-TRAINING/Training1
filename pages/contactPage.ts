import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from "./BasePage";

export class ContactPage extends BasePage{
    page: Page;
    nameInput: Locator;
    surnameInput: Locator;
    emailInput: Locator;
    phoneInput: Locator;
    messageTextarea: Locator;

    constructor(page: Page) {
        super(page);    
        this.page = page;
        this.nameInput = page.locator('[data-name="name-value"]');  //Name
        this.surnameInput = page.locator('input[name="surname-value"]'); // Surname
        this.emailInput = page.locator('input[name="email-value"]'); // E-mail
        this.phoneInput = page.locator('input[name="tel-value"]'); // Phone
        this.messageTextarea = page.locator('textarea[name="message-value"]'); // Message
    }

    async fillForm(name: string, surname: string, email: string, phone: string, message: string) {
        await this.nameInput.fill(name);
        await this.surnameInput.fill(surname);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.messageTextarea.fill(message); // Fill message
    }

    async checkFilledForm(name: string, surname: string, email: string, phone: string, message: string) {
        await expect(this.nameInput).toHaveValue(name);
        await expect(this.surnameInput).toHaveValue(surname);
        await expect(this.emailInput).toHaveValue(email);
        await expect(this.phoneInput).toHaveValue(phone);
        await expect(this.messageTextarea).toHaveValue(message); // Check message
    }
}