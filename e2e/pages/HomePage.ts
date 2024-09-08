import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  private header: Locator;
  private contactLink: Locator;
  private yourSolutions: Locator;
  private aboutUs: Locator;
  private whoWeAre: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.locator("h1");
    this.contactLink = page.locator('.menu a[href*="/contact/"]');
    this.yourSolutions = page.getByRole('link', { name: 'Your AI Solutions' });
    this.aboutUs = page.locator('#menu-item-2567').getByRole('link', { name: 'About us' });
    this.whoWeAre = page.getByRole('link', { name: 'Who we are' });

  }

 

  
  async getHeaderText() {
    return this.header.textContent();
  }

  async clickContactLink() {
    await this.contactLink.click();
  }

  async clickYourAISolutions(){
    await this.yourSolutions.click();
  }

  async hoverAboutUs(){
    await this.aboutUs.hover();
  }

  async clickWhoWeAre(){
    await this.whoWeAre.click();
  }
}