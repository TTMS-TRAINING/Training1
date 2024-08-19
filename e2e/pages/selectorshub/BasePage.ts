import { Page, Frame, Locator, test, expect } from "@playwright/test";

export class BasePage {
  protected page: Page;
  private loader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loader = page.locator("#loader");
  }

  async navigateTo(url: string) {
    await this.page.goto(url, { waitUntil: "networkidle" });
    // pozbycie się loadera
    await this.page.mouse.wheel(1, 1);
  }

  async fillField(locator: Locator, text: string) {
    await locator.click();
    await locator.fill(text);
  }

  async getFrame(url: string): Promise<Frame | null> {
    // Czeka na załadowanie frame'a i zwraca go, jeśli URL zawiera określoną część
    const frameLocator = this.page.frame(`https://selectorshub.com/iframe-in-shadow-dom/`);
    // Czekaj, aż frame będzie dostępny i zwróć jego contentFrame
    const frames = await this.page.frames();
    for (const frame of frames) {
      if (frame.url().includes(url)) {
        return frame;
      }
    }
    return null;
  }
}