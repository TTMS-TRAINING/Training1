import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('TTMS Home Page', () => {
  let homePage: HomePage;

  // Setup przed każdym testem
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page); // Inicjalizacja obiektu HomePage
    await homePage.navigate(); // Nawigacja do strony głównej i akceptacja cookies
  });

  // Test przejścia do strony kontaktowej
  test('should navigate to Contact page', async ({ page }) => {
    await homePage.clickContact(); // Kliknięcie linku kontaktowego
    await expect(page).toHaveURL(/.*contact/); // Sprawdzenie, czy URL zawiera "contact"
  });

  // Test zmiany kontrastu i jego weryfikacji
  test('should change contrast and verify it', async ({ page }) => {
    await homePage.changeContrast(); // Zmiana ustawień kontrastu

    // Zweryfikuj konkretną zmianę, np. kolor tła
    const isContrastChanged = await homePage.isContrastChanged();

    // Sprawdź, czy kontrast rzeczywiście się zmienił
    expect(isContrastChanged).toBe(true); // Oczekujemy, że kontrast zmienił się na oczekiwany
  });
});