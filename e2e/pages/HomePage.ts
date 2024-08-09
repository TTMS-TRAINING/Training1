import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    private header: Locator;
    private contactLink: Locator;

    constructor(page: Page) {
        super(page);
        this.header = page.locator('h1'); // Definicja locatora w konstruktorze
        this.contactLink = page.locator('#menu-item-2546');
    }

    async getHeaderText() {
        return this.header.textContent();
    }

    async clickContactLink() {
        await this.contactLink.click();
    }
}