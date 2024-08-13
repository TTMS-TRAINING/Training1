import { BasePage } from './basePage';
import { Page } from '@playwright/test';

export class ContactPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToContactPage() {
    await this.navigateTo('https://ttms.com/contact/');
  }

  async fillContactForm(name: string, surname: string, email: string, phone: string, message: string) {
    await this.page.fill('#name', name);
    await this.page.fill('#surname', surname);
    await this.page.fill('#email', email);
    await this.page.fill('#phone', phone);
    await this.page.fill('#message', message);
  }

  async getFormValues() {
    const nameValue = await this.page.inputValue('#name');
    const surnameValue = await this.page.inputValue('#surname');
    const emailValue = await this.page.inputValue('#email');
    const phoneValue = await this.page.inputValue('#phone');
    const messageValue = await this.page.inputValue('#message');
    return { nameValue, surnameValue, emailValue, phoneValue, messageValue };
  }
}
