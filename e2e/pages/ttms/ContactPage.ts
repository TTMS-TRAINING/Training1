import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ContactPage extends BasePage {
  private name: Locator;
  private surname: Locator;
  private phone: Locator;
  private email: Locator;
  private message: Locator;

  constructor(page: Page) {
    super(page);
    this.name = page.getByLabel("Name *", { exact: true });
    this.surname = page.getByLabel("Surname *", { exact: true });
    this.phone = page.getByLabel("Phone", { exact: true });
    this.email = page.getByLabel("E-mail *", { exact: true });
    this.message = page.getByLabel("Message", { exact: true });
  }

  public getPage() {
    return this.page;
  }

  async fillName(text: string) {
    await this.name.click();
    await this.name.fill(text);
  }
  async fillSurname(text: string) {
    await this.surname.click();
    await this.surname.fill(text);
  }

  async fillPhone(text: string) {
    await this.phone.click();
    await this.phone.fill(text);
  }

  async fillEmail(text: string) {
    await this.email.click();
    await this.email.fill(text);
  }

  async fillMessage(text: string) {
    await this.message.click();
    await this.message.fill(text);
  }

  async fillForm(
    nameText: string,
    surnameText: string,
    phoneText: string,
    emailText: string,
    messageText: string
  ) {
    this.fillName(nameText);
    this.fillSurname(surnameText);
    this.fillPhone(phoneText);
    this.fillEmail(emailText);
    this.fillMessage(messageText);
  }

  async checkIfFormIsCorrectlyFilled(
    nameText: string,
    surnameText: string,
    phoneText: string,
    emailText: string,
    messageText: string
  ) {
    await expect(this.name).toHaveValue(nameText);
    await expect(this.surname).toHaveValue(surnameText);
    await expect(this.phone).toHaveValue(phoneText);
    await expect(this.email).toHaveValue(emailText);
    await expect(this.message).toHaveValue(messageText);
  }
}
