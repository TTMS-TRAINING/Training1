import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { homePageTestData } from '../data/dataTest'; 

test.describe('Home Page Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigateToHomePage();
        await homePage.acceptCookies();
    });

    test('should verify the title of the home page', async () => {
        const title = await homePage.getPageTitle();
        expect(title).toBe(homePageTestData.expectedTitle);
    });

    test('should verify the header text', async () => {
        const headerText = await homePage.getHeaderText();
        expect(headerText).toContain('TTMS');
    });
});

