import { Page, Locator } from '@playwright/test';

export class BasePage {
  // Chronione pole 'page' dostępne dla klas dziedziczących
  protected page: Page;

  // Prywatne lokalizatory, dostępne tylko wewnątrz tej klasy
  private contrastSwitch: Locator;
  private acceptCookies: Locator;
  private AboutUsMenu: Locator;

  // Konstruktor, który inicjalizuje lokalizatory i przypisuje obiekt 'Page'
  constructor(page: Page) {
    this.page = page;
    this.contrastSwitch = page.locator('#header__nav--contrast-switch'); // Lokalizator przycisku zmiany kontrastu
    this.acceptCookies = page.getByTestId('uc-accept-all-button'); // Lokalizator przycisku akceptacji cookies
    this.AboutUsMenu = page.locator('#menu-item-2567');
  }

  // Metoda do nawigacji na podany URL
  async navigate(url: string) {
    await this.page.goto(url);
  }

  // Metoda do akceptacji wszystkich cookies na stronie
  async acceptCookiesAll(){
    await this.acceptCookies.click();
  }

  // Metoda do zmiany kontrastu na stronie poprzez kliknięcie przycisku
  async changeContrast() {
    await this.contrastSwitch.click();
  }

  // Metoda do sprawdzenia, czy kontrast na stronie został zmieniony
  async isContrastChanged() {
    // Przykładowo sprawdzamy kolor tła strony
    const backgroundColor = await this.page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });

    // Zakładamy, że po zmianie kontrastu kolor tła zmienia się na czarny (można dostosować do rzeczywistej wartości)
    return backgroundColor === 'rgb(0, 0, 0)';
  }
  async aboutUS(){

    await this.AboutUsMenu.hover();

  }
}