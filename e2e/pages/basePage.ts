import { Page, Locator } from '@playwright/test';

export class BasicPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async acceptCookies() {
        const acceptCookiesButton: Locator = this.page.locator('[data-testid="uc-accept-all-button"]');
        if (await acceptCookiesButton.isVisible()) {
            await acceptCookiesButton.click();
        }
    }

    async getPageTitle(): Promise<string> {
        return this.page.title();
    }
}


