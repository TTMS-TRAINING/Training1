import { Page, Locator, expect } from '@playwright/test';

export class ContactPage {
    page: Page;
    nameInput: Locator;
    surnameInput: Locator;
    emailInput: Locator;
    phoneInput: Locator;
    messageTextarea: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('[data-name="name-value"]');
        this.surnameInput = page.locator('input[name="surname-value"]');
        this.emailInput = page.locator('input[name="email-value"]'); 
        this.phoneInput = page.locator('input[name="tel-value"]'); 
        this.messageTextarea = page.locator('textarea[name="message-value"]'); 
    }

    async acceptCookies() {
        const acceptButton = this.page.locator('button:has-text("Zaakceptuj wszystko")');
        await acceptButton.waitFor({ state: 'visible', timeout: 20000 });
        if (await acceptButton.isVisible()) {
            await acceptButton.click();
        } else {
            console.log('Przycisk akceptacji polityki prywatności nie jest widoczny.');
        }
    }

    async fillForm(name: string, surname: string, email: string, phone: string, message: string) {
        await this.nameInput.fill(name);
        await this.surnameInput.fill(surname);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.messageTextarea.fill(message); // Wypełnianie pola wiadomości
    }

    async checkIfFormIsCorrectlyFilled(name: string, surname: string, email: string, phone: string, message: string) {
        await expect(this.nameInput).toHaveValue(name);
        await expect(this.surnameInput).toHaveValue(surname);
        await expect(this.emailInput).toHaveValue(email);
        await expect(this.phoneInput).toHaveValue(phone);
        await expect(this.messageTextarea).toHaveValue(message); // Sprawdzanie pola wiadomości
    }
}
