import { test, expect } from '@playwright/test';

// Opis grupy testów, które będą uruchamiane równolegle
test.describe.parallel('Test na trzech przeglądarkach', () => {
  // Definicja pojedynczego testu, który będzie uruchamiany na różnych przeglądarkach
  test('Test w zależności od przeglądarki', async ({ page, browserName }) => {
    // Przejdź do strony logowania
    await page.goto('https://www.saucedemo.com/');

    // Warunki specyficzne dla każdej przeglądarki
    if (browserName === 'chromium') {
      // Wypełnij formularz logowania poprawnymi danymi dla Chromium
      await page.fill('#user-name', 'standard_user');
      await page.fill('#password', 'secret_sauce');
      await page.click('#login-button');
      // Sprawdź, czy użytkownik został przekierowany na stronę z produktami
      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    } else if (browserName === 'firefox') {
      // Wypełnij formularz logowania błędnymi danymi dla Firefox
      await page.fill('#user-name', 'locked_out_user');
      await page.fill('#password', 'secret_sauce');
      await page.click('#login-button');
      // Sprawdź, czy wyświetlił się komunikat o błędzie
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    } else if (browserName === 'webkit') {
      // Wypełnij formularz logowania danymi użytkownika z wolnym ładowaniem strony dla WebKit
      await page.fill('#user-name', 'performance_glitch_user');
      await page.fill('#password', 'secret_sauce');
      await page.click('#login-button');
      // Ustawienie timeoutu dla WebKit, ponieważ strona ładuje się wolniej
      await page.waitForTimeout(5000);
      // Sprawdź, czy użytkownik został przekierowany na stronę z produktami
      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }
  });
});