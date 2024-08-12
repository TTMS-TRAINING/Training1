import { Page, Locator, expect } from "@playwright/test";

export class BasePage {
  protected page: Page;
  private acceptAllButtona: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptAllButtona = this.page.getByRole("button", {
      name: "Accept All",
    });
  }

  async navigateTo(url: string) {
    await this.page.goto(url, {
      waitUntil: "networkidle",
    });
  }

  async acceptAllCookies() {
    if (this.acceptAllButtona) await this.acceptAllButtona.click();
  }
}
