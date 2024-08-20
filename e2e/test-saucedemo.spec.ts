import { test, expect } from '@playwright/test';

test('Complete purchase on SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Zaloguj się jako standardowy użytkownik
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Poczekaj na załadowanie strony głównej
  await page.waitForSelector('.inventory_list');

  // Dodaj plecak do koszyka
  await page.click('button[id="add-to-cart-sauce-labs-backpack"]');

  // Przejdź do koszyka
  await page.click('.shopping_cart_link');

  // Poczekaj na załadowanie strony koszyka
  await page.waitForSelector('.cart_list');

  // Przejdź do procesu checkout
  await page.click('#checkout');

  // Poczekaj na załadowanie strony checkout
  await page.waitForSelector('#checkout_info_container');

  // Wprowadź dane do formularza
  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '12345');
  await page.click('#continue');

  // Poczekaj na załadowanie strony podsumowania zamówienia
  await page.waitForSelector('.summary_info');

  // Ukończ zakup
  await page.click('#finish');

  // Poczekaj na załadowanie strony potwierdzenia zamówienia
  await page.waitForSelector('.complete-header');

  // Asercja weryfikująca, czy zakup został ukończony poprawnie
  const confirmationMessage = await page.textContent('.complete-header');
  expect(confirmationMessage).toContain("Thank you for your order!");
});

