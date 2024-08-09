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
        this.name = this.page.getByRole('textbox', { name: 'Name' });
        this.surname = this.page.getByRole('textbox', { name: 'Surname' })
        this.phone = this.page.getByRole('textbox', { name: 'Phone' })
        this.email = this.page.getByRole('textbox', { name: 'E-mail' });
        this.message = this.page.getByRole('textbox', { name: 'Message' });
        this.consent = this.page.getByText('I consent to the processing');
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
