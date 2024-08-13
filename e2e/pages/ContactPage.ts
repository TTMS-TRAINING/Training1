import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { ContactData } from '../models/contactData';

export class ContactPage extends BasePage {
    private name: Locator;
    private surname: Locator;
    private phone: Locator;
    private email: Locator;
    private message: Locator;
    private consent: Locator;
    private sendButton: Locator;

    constructor(page: Page) {
        super(page);
    }

    async initFields() {
        this.name = this.page.getByLabel("Name *", { exact: true });
        this.surname = this.page.getByLabel("Surname *", { exact: true });
        this.phone = this.page.getByLabel("Phone", { exact: true });
        this.email = this.page.getByLabel("E-mail *", { exact: true });
        this.message = this.page.getByLabel("Message", { exact: true });
        this.consent = this.page.locator('.wpcf7-list-item-label')
        this.sendButton = this.page.getByRole('button', { name: 'Send a message' });
    }
    async fillForm(contact: ContactData) {
        this.initFields();
        await this.name.first().fill(contact.name);
        await this.surname.fill(contact.surname);
        await this.phone.fill(contact.phone);
        await this.email.fill(contact.email);
        await this.message.fill(contact.message);
        if (contact.consent) {
            await this.consent.check();
         } else { this.consent.uncheck() };
    }

    async checkValidation() {
        await this.sendButton.click();

    }
}
