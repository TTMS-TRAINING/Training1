import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Home Page Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigateToHomePage();
        await homePage.acceptCookies();
        await page.waitForTimeout(10000);
    });

    test('should verify the title of the home page', async () => {
        const title = await homePage.getPageTitle();
        expect(title).toBe('IT Services Provider | TTMS');
    }); 
});