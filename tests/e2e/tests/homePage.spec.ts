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
  test('should navigate to Contact page i wypelni wszystkie pola', async ({ page }) => {
    await homePage.clickContact(); // Kliknięcie linku kontaktowego
    await contactPage.fillContactForm(testData.);
    await contactPage.verifyFormValues(dane!);
  });

  // Test przejścia do strony kontaktowej
  test('should navigate to Contact page i wypelni wszystkie pola1', async ({ page }) => {
    await homePage.clickContact(); // Kliknięcie linku kontaktowego
    await contactPage.fillContactForm(testData.);
    await contactPage.verifyFormValues(dane!);
  });
});