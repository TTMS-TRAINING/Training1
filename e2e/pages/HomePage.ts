import { BasePage } from "./BasePage";
import { Page, Locator } from '@playwright/test';

export class HomePage extends BasePage {
    private header: Locator;
    private contactLink: Locator;

    constructor(page: Page) {
        super(page);
        this.header = page.locator('h1');
        this.contactLink = page.locator('a[href="https://ttms.com/contact/"]');
    }

    async getHeaderText() {
        return this.header.textContent();
    }
    
    async clickContactLink() {
        await this.contactLink.click();
    }

}