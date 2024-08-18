import { Page, Locator, test, expect } from "@playwright/test";

export class BasePage {
  protected page: Page;
  protected acceptAllButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptAllButton = this.page.getByRole("button", {
      name: "Accept All",
    });
  }

  async navigateTo(url: string) {
    await this.page.goto(url, { waitUntil: "networkidle" });
  }

  async acceptAllCookies() {
    await this.page.waitForFunction(() => document.readyState === "complete");

    try {
      await this.acceptAllButton.waitFor({ state: "visible", timeout: 60000 });
      await this.acceptAllButton.click();
    } catch (error) {
      console.error("Przycisk 'Accept All' nie pojawił się w ciągu 60 sekund.");
      throw error;
    }
  }
}
