import { Page, Locator, expect } from "@playwright/test";

export class BasePage {
  protected page: Page;
  private acceptAllButton: Locator;
  private homeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptAllButton = this.page.getByRole("button", {
      name: "Accept All",
    });
    this.homeButton = page.getByRole('link', { name: 'ttms-logo-white' });
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }
  
  async clickHomeButton(){
    await this.homeButton.click();
  }
  async acceptAllCookies() {
    if (this.acceptAllButton) await this.acceptAllButton.click();
  }
};