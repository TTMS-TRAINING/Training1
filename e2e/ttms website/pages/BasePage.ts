import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async navigateAndAcceptCookies(url: string) {
    await this.page.goto(url);
    await this.page.waitForSelector('[data-testid="uc-accept-all-button"]', { state: 'visible'});
    const acceptCookies = this.page.getByTestId('uc-accept-all-button');
    await acceptCookies.click();    
  }  
}
