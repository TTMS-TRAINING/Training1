import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { ContactData } from '../models/contactData';

export class ContactPage extends BasePage {
    private nameInput: Locator;
    private surnameInput: Locator;
    private phoneInput: Locator;
    private emailInput: Locator;
    private messageInput: Locator;
    private consentCheckbox: Locator;
    private sendButton: Locator;

    constructor(page: Page) {
        super(page);
        this.nameInput = this.page.locator('input[name="name-value"]');
        this.surnameInput = this.page.locator('input[name="surname-value"]');
        this.phoneInput = this.page.locator('input[name="tel-value"]');
        this.emailInput = this.page.locator('input[name="email-value"]');
        this.messageInput = this.page.locator('textarea[name="message-value"]');
        this.consentCheckbox = this.page.locator('.wpcf7-list-item-label');
        this.sendButton = this.page.locator('input[value="Send a message"]');                                
    }

    async fillContactForm(contact: ContactData): Promise<void> {        
        await this.nameInput.fill(contact.name);
        await this.surnameInput.fill(contact.surname);
        await this.phoneInput.fill(contact.phone);
        await this.emailInput.fill(contact.email);
        await this.messageInput.fill(contact.message);
        await this.consentCheckbox.setChecked(contact.consent);        
    }

    async validateAndSend(): Promise<void> {
        await this.sendButton.click();
    }
    
}