import { Page } from '@playwright/test';

export class BlogPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://ttms.com/pl/blog/');
    }

    async readFirstBlogPost() {
        await this.page.click('.blog-post-title'); 
    }
}
