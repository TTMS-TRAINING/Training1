import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Home Page Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigateToHomePage();
        await homePage.acceptCookies();
    });

    test('should verify the title of the home page', async () => {
        const title = await homePage.verifyPageTitle();
        expect(title).toBe('TTMS - The Future is Yours');
    });
});
