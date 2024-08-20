import { Locator, Page } from '@playwright/test';

export class Header {
    private page: Page;
    private homeLink: Locator;
    private aboutUsLink: Locator;
    private servicesLink: Locator;
    private contactLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.locator('nav a[href="/"]'); // Przykładowy selektor dla linku do strony głównej
        this.aboutUsLink = page.locator('nav a[href="/about-us"]'); // Przykładowy selektor dla linku "O nas"
        this.servicesLink = page.locator('nav a[href="/services"]'); // Przykładowy selektor dla linku "Usługi"
        this.contactLink = page.locator('nav a[href="/kontakt"]'); // Przykładowy selektor dla linku "Kontakt"
    }



    
    async clickHome() {
        await this.homeLink.click();
    }

    async clickAboutUs() {
        await this.aboutUsLink.click();
    }

    async clickServices() {
        await this.servicesLink.click();
    }

    async clickContact() {
        await this.contactLink.click();
    }
}