import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';


export class HeaderPage extends BasePage {

    protected page: Page;

    // Prywatne lokalizatory, dostępne tylko wewnątrz tej klasy

    private AboutUsMenu: Locator;       // Lokalizator dla menu "About Us"

    // Publiczny lokalizator, dostępny dla wszystkich klas, które dziedziczą z BasePage
    private AboutUsSubmenu: Locator;
    private AboutUsSubmenuLink1: Locator;
    private AboutUsSubmenuLink2: Locator;
    private AboutUsSubmenuLink3: Locator;
    private LogoTTMS: Locator;
    private SpecializationsMenu: Locator;
    private IndustriesMenu: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.AboutUsMenu = page.locator('#menu-item-2567 > a');                // Inicjalizacja lokalizatora menu "About Us"
        //this.AboutUsMenu = page.locator('a', { hasText: 'About Us' });         // alterantywny lokator
        this.AboutUsSubmenu = page.locator('#menu-item-2567 .sub-menu');
        this.AboutUsSubmenuLink1 = page.getByRole('link', { name: 'Who we are' });
        this.AboutUsSubmenuLink2 = page.getByRole('link', { name: 'Pressroom' });
        this.AboutUsSubmenuLink3 = page.getByRole('link', { name: 'Sustainable TTMS' });
        this.LogoTTMS = page.getByRole('link', { name: 'ttms-logo-white' });
        this.SpecializationsMenu = page.getByRole('link', { name: 'Specializations' });
        this.IndustriesMenu = page.getByRole('link', { name: 'Industries' });
    }


    async aboutUS() {
        await this.AboutUsMenu.hover();  // Najechanie na menu "About Us"
        await expect(this.AboutUsMenu).toHaveText('About us');
        await expect(this.AboutUsSubmenuLink1).toContainText('Who we are');
        await expect(this.AboutUsSubmenuLink2).toContainText('Pressroom');
        await expect(this.AboutUsSubmenuLink3).toContainText('Sustainable TTMS');
    }

    async clickAndVerifySubmenuLink1() {
        await this.AboutUsMenu.hover();  // Upewnij się, że submenu jest widoczne
        await this.AboutUsSubmenuLink1.click();
        await expect(this.page).toHaveURL(/about-us/);  // Sprawdź, czy URL zawiera "who-we-are"
    }

    async clickAndVerifySubmenuLink2() {
        await this.AboutUsMenu.hover();  // Upewnij się, że submenu jest widoczne
        await this.AboutUsSubmenuLink2.click();
        await expect(this.page).toHaveURL(/pressroom/);  // Sprawdź, czy URL zawiera "pressroom"
    }

    async clickAndVerifySubmenuLink3() {
        await this.AboutUsMenu.hover();  // Upewnij się, że submenu jest widoczne
        await this.AboutUsSubmenuLink3.click();
        await expect(this.page).toHaveURL(/sustainable-ttms/);  // Sprawdź, czy URL zawiera "sustainable-ttms"
    }
    async clickAndVerifyLogo() {
        await this.LogoTTMS.click();
        await expect(this.page).toHaveURL('https://ttms.com/');
        await expect(this.LogoTTMS).toHaveClass('header__logo');
    }
    async Specializations() {
        await expect(this.SpecializationsMenu).toHaveText('Specializations');
    }

    async Industries() {
        await expect(this.IndustriesMenu).toHaveText('Industries');

    }

}