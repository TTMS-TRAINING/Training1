import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('TTMS Home Page', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate('https://ttms.pl');  // Użycie metody navigate z homePage
    //await page.getByTestId('uc-accept-all-button').click();  // Akceptacja cookies
    await homePage.acceptCookiesAll();
  });

  test('should navigate to Contact page', async ({ page }) => {
    await homePage.clickContact();
    await expect(page).toHaveURL(/.*contact/);
  });

  test('should change contrast and verify it', async ({ page }) => {
    await homePage.changeContrast();
  
    // Zweryfikuj konkretną zmianę, np. kolor tła
    const isContrastChanged = await homePage.isContrastChanged();
    
    // Sprawdź, czy kontrast rzeczywiście się zmienił
    expect(isContrastChanged).toBe(true); // Oczekujemy, że kontrast zmienił się na oczekiwany
  });
});