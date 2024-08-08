import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  private header: Locator;
  private aboutUsLink: Locator;
  private servicesLink: Locator;
  private contactLink: Locator;
  private searchInput: Locator;

  constructor(page: Page) {
    super(page);  // Wywołanie konstruktora klasy bazowej
    this.header = page.locator('header');
    this.aboutUsLink = page.locator('text=O nas');
    this.servicesLink = page.locator('text=Usługi');
    this.contactLink = page.locator('#menu-item-2546');
    this.searchInput = page.locator('input[placeholder="Szukaj"]');
  }

  async clickAboutUs() {
    await this.aboutUsLink.click();
  }

  async clickServices() {
    await this.servicesLink.click();
  }

  async clickContact() {
    await this.contactLink.click();
  }

  async search(text: string) {
    await this.searchInput.fill(text);
    await this.searchInput.press('Enter');
  }
}