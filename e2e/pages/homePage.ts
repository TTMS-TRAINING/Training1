import { BasicPage } from "./basePage";
import { Page } from '@playwright/test';

export class HomePage extends BasicPage {
    constructor(page: Page) {
        super(page);
    }

    async navigateToHomePage() {
        await this.navigateTo('http://ttms.pl');
    }

}

