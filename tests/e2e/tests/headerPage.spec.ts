import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { HeaderPage } from '../pages/headerPage';

test.describe('TTMS Header Page', () => {
    let headerPage: HeaderPage;

    // Setup przed każdym testem
    test.beforeEach(async ({ page }) => {
        headerPage = new HeaderPage(page); // Inicjalizacja obiektu ContactPage
        await headerPage.navigate('https://ttms.com'); // Nawigacja do strony 
        await headerPage.acceptCookiesAll();
    });

    test('Check About us element on Header', async ({ page }) => {

        await headerPage.aboutUS();

    });

    test('Verify submenu links from About Us', async ({ page }) => {

        await headerPage.clickAndVerifySubmenuLink1();
        await headerPage.clickAndVerifySubmenuLink2();
        await headerPage.clickAndVerifySubmenuLink3();


    });



});