import { Frame, Locator } from "@playwright/test";

export class BaseFrame {
  protected frame: Frame;

  constructor(frame: Frame) {
    this.frame = frame;
  }

  async fillField(selector: string, text: string) {
    const field = this.frame.locator(selector);
    await field.fill(text);
  }
}

