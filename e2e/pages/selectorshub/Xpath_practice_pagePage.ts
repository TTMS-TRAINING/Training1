import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { IframeInShadowDOMPage } from "./iframe_in_shadow_DOMPage";

export class XpathPracticePage extends BasePage {
  private UserNameInput: Locator;
  private PizzaNameInput: Locator;
  private ClickToPracticeIframeInsideShadowDomScenarioButton: Locator;

  constructor(page: Page) {
    super(page);
    this.UserNameInput = page.locator('#userName #kils');
    this.PizzaNameInput = page.locator('#app2 #pizza');
   // this.ClickToPracticeIframeInsideShadowDomScenarioButton = page.locator("a[href='https://selectorshub.com/iframe-in-shadow-dom/']");
   this.ClickToPracticeIframeInsideShadowDomScenarioButton = page.getByRole('link', { name: 'Click to practice iframe' });
  }
  async getUserNameInput(): Promise<Locator>{
    return this.UserNameInput;
  }
  async getPizzaNameInput(): Promise<Locator>{
    return this.PizzaNameInput;
  }
  
  async fillField(locator: Locator, text: string) {
    await locator.click();
    await locator.fill(text);
  }
  

  // TODO 
  async clickPracticeIframeLink() {
    const locator = this.page.frameLocator(`a[href='https://selectorshub.com/iframe-in-shadow-dom/']`).getByText('Click to practice iframe inside shadow dom scenario');
await locator.click();
//    await this.ClickToPracticeIframeInsideShadowDomScenarioButton.click();
  }
    


}