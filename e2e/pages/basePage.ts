import { Page, Locator } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async acceptCookies() {
        const acceptCookiesButton: Locator = this.page.locator('#onetrust-accept-btn-handler');
        if (await acceptCookiesButton.isVisible()) {
            await acceptCookiesButton.click();
        }
    }

    async getPageTitle(): Promise<string> {
        return this.page.title();
    }
}

