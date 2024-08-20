import { BasePage } from './BasePage';
import { Page, Locator } from '@playwright/test';

export class HomePage extends BasePage {
    private header: Locator;

    constructor(page: Page) {
        super(page);
        this.header = page.locator('h1');
    }

    async navigateToHomePage() {
        await this.navigateTo('https://ttms.com/pl');
    }

    async getHeaderText(): Promise<string | null> {
        return this.header.textContent();
    }
}
