import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/contactPage';
import { HomePage } from '../pages/homePage';

test.describe('TTMS Contact Page', () => {
  let contactPage: ContactPage;

  // Setup przed każdym testem
  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page); // Inicjalizacja obiektu ContactPage
    await contactPage.navigate(); // Nawigacja do strony kontaktowej
    // await contactPage.acceptCookiesAll(); // Akceptacja cookies (odkomentuj, jeśli jest potrzebna)
  });

  // Test wypełniania i weryfikacji formularza kontaktowego
  test('should fill and assert the contact form', async ({ page }) => {
    // Dane testowe
    const name = 'Paweł';
    const surname = 'Kowalski';
    const phone = '123123123';
    const email = 'pawel@example.com';
    const message = 'Wiadomość testowa';

    // Wprowadzenie danych do formularza
    await contactPage.fillContactForm(name, surname, phone, email, message);

    // Weryfikacja wartości pól formularza
    await contactPage.verifyFormValues(name, surname, phone, email, message);
  });

  // Test zmiany kontrastu i jego weryfikacji
  test('should change contrast and verify it', async ({ page }) => {
    // Zmiana kontrastu
    await contactPage.changeContrast();

    // Zweryfikuj konkretną zmianę, np. kolor tła
    const isContrastChanged = await contactPage.isContrastChanged();

    // Sprawdź, czy kontrast rzeczywiście się zmienił
    expect(isContrastChanged).toBe(true); // Oczekujemy, że kontrast zmienił się na oczekiwany
  });

  test('Czy zadzaiła about us', async ({ page }) => {
    await contactPage.aboutUS();

  });
});