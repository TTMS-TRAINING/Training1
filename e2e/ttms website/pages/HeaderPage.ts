import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HeaderPage extends BasePage {
    private contactButton: Locator;

    constructor(page: Page) {
        super(page);
        this.contactButton = page.locator('#menu-item-2546');
    }

    async navigateContactPageViaHeader() {
        await this.contactButton.click();
    }

}