import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;
  private contrastSwitch: Locator;
  private acceptCookies: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contrastSwitch = page.locator('#header__nav--contrast-switch');
    this.acceptCookies = page.getByTestId('uc-accept-all-button');
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async acceptCookiesAll(){
    await this.acceptCookies.click();
  }

  async changeContrast() {
    await this.contrastSwitch.click();
  }

  async isContrastChanged() {
    // Przykładowo sprawdzamy kolor tła strony
    const backgroundColor = await this.page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
  
    // Zakładamy, że po zmianie kontrastu kolor tła zmienia się z białego na czarny (lub inny)
    return backgroundColor === 'rgb(0, 0, 0)'; // Zaktualizuj ten warunek do rzeczywistej wartości
  }
}