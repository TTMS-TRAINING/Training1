import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
    // Chronione pole 'page' dostępne dla klas dziedziczących
    protected page: Page;

    // Prywatne lokalizatory, dostępne tylko wewnątrz tej klasy
    private contrastSwitch: Locator;    // Lokalizator przycisku zmiany kontrastu
    private acceptCookies: Locator;     // Lokalizator przycisku akceptacji cookies
    private AboutUsMenu: Locator;       // Lokalizator dla menu "About Us"

    // Publiczny lokalizator, dostępny dla wszystkich klas, które dziedziczą z BasePage
    public AboutUsSubmenu: Locator;     // Lokalizator dla submenu "About Us"

    // Konstruktor, który inicjalizuje lokalizatory i przypisuje obiekt 'Page'
    constructor(page: Page) {
        this.page = page;
        this.contrastSwitch = page.locator('#header__nav--contrast-switch');   // Inicjalizacja lokalizatora przycisku zmiany kontrastu
        this.acceptCookies = page.getByTestId('uc-accept-all-button');         // Inicjalizacja lokalizatora przycisku akceptacji cookies
        this.AboutUsMenu = page.locator('#menu-item-2567 > a');                // Inicjalizacja lokalizatora menu "About Us"
        //this.AboutUsMenu = page.locator('a', { hasText: 'About Us' });         // alterantywny lokator
        this.AboutUsSubmenu = page.locator('#menu-item-2567 .sub-menu');       // Inicjalizacja lokalizatora submenu "About Us"
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

    // Metoda do najechania na element "About Us" w menu i sprawdzenia widoczności submenu
    async aboutUS() {
        await this.AboutUsMenu.hover();  // Najechanie na menu "About Us"
        await expect(this.AboutUsMenu).toHaveText('About us');
        // Można odkomentować poniższą linię, aby sprawdzać widoczność submenu
        // await expect(this.AboutUsSubmenu).toBeVisible();
    }
}