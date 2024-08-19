import { expect, Frame, Locator } from "@playwright/test";
import { BaseFrame } from "./BaseFrame";

export class IframeInShadowDOMPage extends BaseFrame {
  private densityInput: Locator;
  
  constructor(frame: Frame) {
    super(frame);
    this.densityInput = frame.locator('#glaf'); 
  }

  async fillDensityField(text: string) {
    await this.densityInput.click();
    await this.densityInput.fill(text);
  }

  async checkDensityField(text: string) {
    await expect(this.densityInput).toHaveText(text);
  }
}
