import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    private textHeader: Locator;
    
    constructor(page: Page) {
        super(page);
        this.textHeader = page.locator('h1');        
    }

    async getHeaderText(): Promise<string | null> {
      return this.textHeader.textContent();
    }

    async getTitle(): Promise<string | null> {
      return this.page.title();
    }  
}