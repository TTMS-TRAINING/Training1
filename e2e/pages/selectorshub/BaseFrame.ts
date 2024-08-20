import { Page, FrameLocator, Locator } from "@playwright/test";

export class BaseFrame {
  protected frameLocator: FrameLocator;
  protected page: Page;

  constructor(frameLocator: FrameLocator, page: Page) {
    this.frameLocator = frameLocator;
    this.page = page;
  }

  async fillField(selector: string, text: string) {
    const field = this.frameLocator.locator(selector);
    await field.fill(text);
  }
  async ensureIframeLoaded() {
    // Symuluj ruch myszki nad stroną, aby wymusić załadowanie iframe
    await this.page.mouse.move(1, 1);
  }

}

