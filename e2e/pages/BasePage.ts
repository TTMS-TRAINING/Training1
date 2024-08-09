import { Page, Locator } from '@playwright/test';

export class BasePage {
    protected page: Page;
    private acceptCookies: Locator;

    constructor(page: Page) {
        this.page = page;
          this.acceptCookies = page.getByTestId('uc-accept-all-button'); // Lokalizator przycisku akceptacji cookies
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

     async acceptCookiesAll(){
        await this.acceptCookies.click();
  }
}