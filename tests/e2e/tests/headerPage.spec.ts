import { test, expect } from '@playwright/test';
import { HeaderPage } from '../pages/headerPage';

test.describe('TTMS Header Page', () => {
    let headerPage: HeaderPage;

    // Setup przed każdym testem
    test.beforeEach(async ({ page }) => {
        headerPage = new HeaderPage(page); // Inicjalizacja obiektu HeaderPage
        await headerPage.navigate('https://ttms.com'); // Nawigacja do strony TTMS
        await headerPage.acceptCookiesAll(); // Akceptacja cookies
    });

    // Test sprawdzający menu "About Us" na nagłówku
    test('Check About Us element on Header', async ({ page }) => {
        await headerPage.aboutUS(); // Weryfikacja menu "About Us"
    });

    // Test weryfikujący linki submenu "About Us"
    test('Verify submenu links from About Us', async ({ page }) => {
        await headerPage.clickAndVerifySubmenuLink1(); // Weryfikacja linku "Who we are"
        await headerPage.clickAndVerifySubmenuLink2(); // Weryfikacja linku "Pressroom"
        await headerPage.clickAndVerifySubmenuLink3(); // Weryfikacja linku "Sustainable TTMS"
    });

    // Test weryfikujący działanie logo TTMS
    test('Verify TTMS Logo', async ({ page }) => {
        await headerPage.clickAndVerifyLogo(); // Weryfikacja przekierowania po kliknięciu logo TTMS
    });

    // Test weryfikujący menu "Specializations"
    test('Verify Specializations menu item', async ({ page }) => {
        await headerPage.Specializations(); // Sprawdzenie, czy menu "Specializations" jest poprawne
    });

    // Test weryfikujący menu "Industries"
    test('Verify Industries menu item', async ({ page }) => {
        await headerPage.Industries(); // Sprawdzenie, czy menu "Industries" jest poprawne
    });

    // Test weryfikujący menu "Case Studies"
    test('Verify Case Studies menu item', async ({ page }) => {
        await headerPage.CaseStudies(); // Sprawdzenie, czy menu "Case Studies" jest poprawne
    });

    // Test weryfikujący menu "Blog"
    test('Verify Blog menu item', async ({ page }) => {
        await headerPage.Blog(); // Sprawdzenie, czy menu "Blog" jest poprawne
    });

    // Test weryfikujący menu "Career"
    test('Verify Career menu item', async ({ page }) => {
        await headerPage.Career(); // Sprawdzenie, czy menu "Career" jest poprawne
    });

    test('Verify LanguageSwitcher', async ({ page }) => {
        await headerPage.LangugaeSwitchCheck();

    });
});