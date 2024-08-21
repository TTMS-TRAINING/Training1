import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { IframeInShadowDOMPage } from "./iframe_in_shadow_DOMPage";

export class XpathPracticePage extends BasePage {
  private UserNameInput: Locator;
  private PizzaNameInput: Locator;
  private ClickToPracticeIframeInsideShadowDomScenarioButton: Locator;

  constructor(page: Page) {
    super(page);
    this.UserNameInput = page.locator("#userName #kils");
    this.PizzaNameInput = page.locator("#app2 #pizza");
    this.ClickToPracticeIframeInsideShadowDomScenarioButton = page.getByRole(
      "link",
      { name: "Click to practice iframe inside shadow dom scenario" }
    );
  }
  async getPage(): Promise<Page> {
    return this.page;
  }
  async getUserNameInput(): Promise<Locator> {
    return this.UserNameInput;
  }
  async getPizzaNameInput(): Promise<Locator> {
    return this.PizzaNameInput;
  }
  async getClickToPracticeIframeInsideShadowDomScenarioButton(): Promise<Locator> {
    return this.ClickToPracticeIframeInsideShadowDomScenarioButton;
  }

  async fillField(locator: Locator, text: string) {
    await locator.click();
    await locator.fill(text);
  }

  // TODO
  async clickPracticeIframeLink() {
    await this.ClickToPracticeIframeInsideShadowDomScenarioButton.press('Enter');
  }
// spr inny
  public getClickToIframeLink(): Locator {
    return this.page.locator('a[href="/iframe-in-shadow-dom/"]');
  }
}
