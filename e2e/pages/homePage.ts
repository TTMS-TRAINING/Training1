import { BasePage } from './basePage';
import { Page } from '@playwright/test';

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigateToHomePage() {
        await this.navigateTo('https://ttms.com/');
    }

    async verifyPageTitle() {
        return this.getPageTitle();
    }
}
