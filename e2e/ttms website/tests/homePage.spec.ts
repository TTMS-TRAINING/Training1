import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home Page Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigateAndAcceptCookies('https://ttms.com');
    });

    test('Checking page title and text in "h1" header', async () => {
        const pageTitle = await homePage.getTitle();
        expect(pageTitle).toBe('IT Services Provider | TTMS')        
        const headerText = await homePage.getHeaderText();
        expect(headerText).toBe('AI-powered IT systems at your fingertips. We are trusted and modern IT partner.');        
    });
});