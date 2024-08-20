import { expect, FrameLocator, Locator, Page } from "@playwright/test";
import { BaseFrame } from "./BaseFrame";

export class IframeInShadowDOMPage extends BaseFrame {
  private iframeLocator: FrameLocator;
  private densityInput: Locator;

  constructor(page: Page) {
    const frameLocator = page.frameLocator("#pact1");
    super(frameLocator, page);
    this.densityInput = frameLocator.locator("#glaf");
    this.iframeLocator = frameLocator; //.locator("#pact1");
  }

  public getIframeLocator(): FrameLocator {
    return this.iframeLocator;
  }

  public getDensityLocator(): Locator {
    return this.densityInput;
  }

  async fillDensityField(text: string) {
    await this.ensureIframeLoaded();
    await this.densityInput.click();
    await this.densityInput.fill(text);
  }

  async checkDensityField(text: string) {
    await this.ensureIframeLoaded();
    await expect(this.densityInput).toHaveValue(text);
  }
}
