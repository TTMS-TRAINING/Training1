import { Page, Locator, expect } from "@playwright/test";

export class BasePage {
  protected page: Page;
  private acceptAllButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptAllButton = this.page.getByRole("button", {
      name: "Accept All",
    });
  }

  async navigateTo(url: string) {
    await this.page.goto(url, {
      waitUntil: "networkidle",
    });
  }

  async acceptAllCookies() {
    if (this.acceptAllButton) await this.acceptAllButton.click();
  }
}
