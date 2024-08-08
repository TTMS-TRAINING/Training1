import { Page, Locator, expect } from '@playwright/test';


export class ContactPage {
  private page: Page;
  private contactForm: Locator;
  private nameInput: Locator;
  private surnameInput: Locator;
  private phoneInput: Locator;
  private emailInput: Locator;
  private messageTextarea: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.contactForm = page.locator('form#contact-form');
    this.nameInput = page.getByLabel('Name *', { exact: true });
    this.surnameInput = page.getByLabel('Surname *');
    this.phoneInput = page.getByLabel('Phone');
    this.emailInput = page.getByLabel('E-mail *');
    this.messageTextarea = page.getByLabel('Message');
    
    
  }

  async navigate() {
    await this.page.goto('https://ttms.pl/contact');
    await this.page.getByTestId('uc-accept-all-button').click();
  }

  async fillContactForm(name: string, surname: string, phone: string, email: string, message: string) {
    await this.nameInput.fill(name);
    await this.surnameInput.fill(surname);
    await this.phoneInput.fill(phone);
    await this.emailInput.fill(email);
    await this.messageTextarea.fill(message);
  }



  async verifyFormValues(name: string, surname: string, phone: string, email: string, message: string) {
    await expect(this.nameInput).toHaveValue(name);
    await expect(this.surnameInput).toHaveValue(surname);
    await expect(this.phoneInput).toHaveValue(phone);
    await expect(this.emailInput).toHaveValue(email);
    await expect(this.messageTextarea).toHaveValue(message);
  }
}