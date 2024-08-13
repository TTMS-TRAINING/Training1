import { Locator, Page } from '@playwright/test';

export class BasePage {
    protected page: Page;
    private cookies:Locator;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateAndAcceptCookies(url: string) {
        await this.page.goto(url);
        this.cookies= this.page.getByRole('button', {name:'Accept All'});
        if (this.cookies) {
            await this.cookies.click();
            }
    }

}