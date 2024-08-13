import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async acceptCookies() {
    await this.page.click('#onetrust-accept-btn-handler');

  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }
}
