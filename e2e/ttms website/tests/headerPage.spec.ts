import { test, expect } from '@playwright/test';
import { HeaderPage } from '../pages/HeaderPage';

test.describe('Header Tests', () => {
    let headerPage: HeaderPage;

    test.beforeEach(async ({ page }) => {
        headerPage = new HeaderPage(page);
        await headerPage.navigateAndAcceptCookies('https://ttms.com');
    });

    test('Navigate to the Contact page and verify', async ({page}) => {        
        await headerPage.navigateContactPageViaHeader();
        await expect(page).toHaveTitle('Contact us | TTMS');
        await expect(page).toHaveURL('https://ttms.com/contact/');
    });
});