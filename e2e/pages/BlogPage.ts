import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';

export class BlogPage extends BasePage {
    private searchInput: Locator;
    private searchButton: Locator;
    private searchResultTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.searchInput = page.locator('input[name="q"]'); // Replace with the actual locator for the search input
        this.searchButton = page.locator('button.searchform__submit'); // Replace with the actual locator for the search button
        this.searchResultTitle = page.locator('h3.cpt-box__desc--title a[href="https://ttms.com/how-does-chatgpt-support-cybersecurity-and-risk-management/"]'); // Replace with the actual locator for search result titles
    }

    async navigateToBlog() {
        await this.page.goto('https://ttms.pl/blog'); // Navigating to the blog page
    }

    async searchForArticle(searchQuery: string) {
        await this.searchInput.fill(searchQuery); // Filling the search input
        await this.searchButton.click(); // Clicking the search button
    }

    async getFirstSearchResultTitle() {
        return await this.searchResultTitle.textContent(); // Getting the text content of the first search result title
    }
}