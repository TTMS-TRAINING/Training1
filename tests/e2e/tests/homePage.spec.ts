import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ContactPage } from '../pages/contactPage';
import { BasePage } from '../pages/basePage';

test.describe('TTMS Home Page', () => {
  let homePage: HomePage;
  let contactPage: ContactPage;
  let basePage: BasePage;

  // Setup przed każdym testem
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page); // Inicjalizacja obiektu HomePage
    contactPage = new ContactPage(page);
    basePage = new BasePage(page);
    await homePage.navigate(); // Nawigacja do strony głównej i akceptacja cookies
  });

  // Test przejścia do strony kontaktowej
  test('should navigate to Contact page', async ({ page }) => {
    await homePage.clickContact(); // Kliknięcie linku kontaktowego

  });

  test('schould navigate to Career page', async ({ page }) => {

    await homePage.clickCareer();

  });

  test('schould navigate to Blog', async ({ page }) => {

    await homePage.clickBlog();

  });

  // Test zmiany kontrastu i jego weryfikacji
  test('should change contrast and verify it', async ({ page }) => {
    await homePage.changeContrast(); // Zmiana ustawień kontrastu

    // Zweryfikuj konkretną zmianę, np. kolor tła
    const isContrastChanged = await homePage.isContrastChanged();

    // Sprawdź, czy kontrast rzeczywiście się zmienił
    expect(isContrastChanged).toBe(true); // Oczekujemy, że kontrast zmienił się na oczekiwany
  });


  //test('Contact page inside home page', async ({ page }) => {

  //  await contactPage.navigate();


  //});
});