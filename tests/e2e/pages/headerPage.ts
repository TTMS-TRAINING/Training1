import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class HeaderPage extends BasePage {

    protected page: Page;

    // Prywatne lokalizatory, dostępne tylko wewnątrz tej klasy
    private AboutUsMenu: Locator;       // Lokalizator dla menu "About Us"

    // Publiczne lokalizatory, dostępne dla wszystkich klas, które dziedziczą z BasePage
    private AboutUsSubmenu: Locator;
    private AboutUsSubmenuLink1: Locator;
    private AboutUsSubmenuLink2: Locator;
    private AboutUsSubmenuLink3: Locator;
    private LogoTTMS: Locator;
    private SpecializationsMenu: Locator;
    private IndustriesMenu: Locator;
    private CaseStudiesMenu: Locator;   // Lokalizator dla menu "Case Studies"
    private BlogMenu: Locator;          // Lokalizator dla menu "Blog"
    private CareerMenu: Locator;        // Lokalizator dla menu "Career"
    private LanguageSwitch: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;

        // Inicjalizacja lokalizatorów nagłówka
        this.AboutUsMenu = page.locator('#menu-item-2567 > a');                // Lokalizator dla menu "About Us"
        this.AboutUsSubmenu = page.locator('#menu-item-2567 .sub-menu');       // Lokalizator submenu dla "About Us"
        this.AboutUsSubmenuLink1 = page.getByRole('link', { name: 'Who we are' }); // Lokalizator linku "Who we are"
        this.AboutUsSubmenuLink2 = page.getByRole('link', { name: 'Pressroom' });  // Lokalizator linku "Pressroom"
        this.AboutUsSubmenuLink3 = page.getByRole('link', { name: 'Sustainable TTMS' }); // Lokalizator linku "Sustainable TTMS"
        this.LogoTTMS = page.getByRole('link', { name: 'ttms-logo-white' });   // Lokalizator dla logo TTMS
        this.SpecializationsMenu = page.getByRole('link', { name: 'Specializations' });  // Lokalizator dla menu "Specializations"
        this.IndustriesMenu = page.getByRole('link', { name: 'Industries' });  // Lokalizator dla menu "Industries"
        this.CaseStudiesMenu = page.getByRole('link', { name: 'Case studies' });  // Lokalizator dla menu "Case Studies"
        this.BlogMenu = page.locator('#menu-item-2544').getByRole('link', { name: 'Blog' });            // Lokalizator dla menu "Blog"
        this.CareerMenu = page.locator('#menu-item-7258').getByRole('link', { name: 'Career' });
        this.LanguageSwitch = page.locator('#container > header > div > div > div.header__content--right > div.header__nav--lang-switch > div > ul > li > a');         // Lokalizator dla menu "Career"
    }

    // Metoda do sprawdzania menu "About Us"
    async aboutUS() {
        await this.AboutUsMenu.hover();  // Najechanie na menu "About Us"
        await expect(this.AboutUsMenu).toHaveText('About us');  // Sprawdzenie, czy menu ma tekst "About us"
        await expect(this.AboutUsSubmenuLink1).toContainText('Who we are');  // Sprawdzenie, czy link submenu zawiera tekst "Who we are"
        await expect(this.AboutUsSubmenuLink2).toContainText('Pressroom');  // Sprawdzenie, czy link submenu zawiera tekst "Pressroom"
        await expect(this.AboutUsSubmenuLink3).toContainText('Sustainable TTMS');  // Sprawdzenie, czy link submenu zawiera tekst "Sustainable TTMS"
    }

    // Metoda do sprawdzania klikania i weryfikacji przekierowania dla linku "Who we are"
    async clickAndVerifySubmenuLink1() {
        await this.AboutUsMenu.hover();  // Upewnij się, że submenu jest widoczne
        await this.AboutUsSubmenuLink1.click();
        await expect(this.page).toHaveURL(/about-us/);  // Sprawdzenie, czy URL zawiera "who-we-are"
    }

    // Metoda do sprawdzania klikania i weryfikacji przekierowania dla linku "Pressroom"
    async clickAndVerifySubmenuLink2() {
        await this.AboutUsMenu.hover();  // Upewnij się, że submenu jest widoczne
        await this.AboutUsSubmenuLink2.click();
        await expect(this.page).toHaveURL(/pressroom/);  // Sprawdzenie, czy URL zawiera "pressroom"
    }

    // Metoda do sprawdzania klikania i weryfikacji przekierowania dla linku "Sustainable TTMS"
    async clickAndVerifySubmenuLink3() {
        await this.AboutUsMenu.hover();  // Upewnij się, że submenu jest widoczne
        await this.AboutUsSubmenuLink3.click();
        await expect(this.page).toHaveURL(/sustainable-ttms/);  // Sprawdzenie, czy URL zawiera "sustainable-ttms"
    }

    // Metoda do sprawdzania klikania w logo TTMS
    async clickAndVerifyLogo() {
        await this.LogoTTMS.click();
        await expect(this.page).toHaveURL('https://ttms.com/');  // Sprawdzenie, czy nastąpiło przekierowanie na stronę główną
        await expect(this.LogoTTMS).toHaveClass('header__logo'); // Sprawdzenie, czy logo ma odpowiednią klasę CSS
    }

    // Metoda do sprawdzania menu "Specializations"
    async Specializations() {
        await expect(this.SpecializationsMenu).toHaveText('Specializations');  // Sprawdzenie, czy menu ma tekst "Specializations"
    }

    // Metoda do sprawdzania menu "Industries"
    async Industries() {
        await expect(this.IndustriesMenu).toHaveText('Industries');  // Sprawdzenie, czy menu ma tekst "Industries"
    }

    // Metoda do sprawdzania menu "Case Studies"
    async CaseStudies() {
        await expect(this.CaseStudiesMenu).toHaveText('Case studies');  // Sprawdzenie, czy menu ma tekst "Case Studies"
        await this.CaseStudiesMenu.click();
        await expect(this.page).toHaveURL(/case-studies/);
    }

    // Metoda do sprawdzania menu "Blog"
    async Blog() {
        await expect(this.BlogMenu).toHaveText('Blog');  // Sprawdzenie, czy menu ma tekst "Blog"
        await this.BlogMenu.click();
        await expect(this.page).toHaveURL(/blog/);
    }

    // Metoda do sprawdzania menu "Career"
    async Career() {
        await expect(this.CareerMenu).toHaveText('Career');  // Sprawdzenie, czy menu ma tekst "Career"
        await this.CareerMenu.click();
        await expect(this.page).toHaveURL(/career/);
    }
    async LangugaeSwitchCheck() {
        await expect(this.LanguageSwitch).toHaveText('EN');
        await this.LanguageSwitch.click();



    }

}