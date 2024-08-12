import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
    // Chronione pole 'page' dostępne dla klas dziedziczących
    protected page: Page;

    // Prywatne lokalizatory, dostępne tylko wewnątrz tej klasy
    private contrastSwitch: Locator;    // Lokalizator przycisku zmiany kontrastu
    private acceptCookies: Locator;     // Lokalizator przycisku akceptacji cookies


    // Konstruktor, który inicjalizuje lokalizatory i przypisuje obiekt 'Page'
    constructor(page: Page) {
        this.page = page;
        this.contrastSwitch = page.locator('#header__nav--contrast-switch');   // Inicjalizacja lokalizatora przycisku zmiany kontrastu
        this.acceptCookies = page.getByTestId('uc-accept-all-button');         // Inicjalizacja lokalizatora przycisku akceptacji cookies
    }

    // Metoda do nawigacji na podany URL
    async navigate(url: string) {
        await this.page.goto(url);
    }

    // Metoda do akceptacji wszystkich cookies na stronie
    async acceptCookiesAll() {
        await this.acceptCookies.click();  // Kliknięcie przycisku akceptacji cookies
    }

    // Metoda do zmiany kontrastu na stronie poprzez kliknięcie przycisku
    async changeContrast() {
        await this.contrastSwitch.click(); // Kliknięcie przycisku zmiany kontrastu
    }

    // Metoda do sprawdzenia, czy kontrast na stronie został zmieniony
    async isContrastChanged(): Promise<boolean> {
        // Sprawdzamy kolor tła strony po zmianie kontrastu
        const backgroundColor = await this.page.evaluate(() => {
            return window.getComputedStyle(document.body).backgroundColor;
        });

        // Zakładamy, że po zmianie kontrastu kolor tła zmienia się na czarny
        return backgroundColor === 'rgb(0, 0, 0)';
    }


}