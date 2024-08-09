import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';
import { testData } from "../utils/testData";

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
    const name = 'Test';
    const surname = 'Testalski';
    const phone = '123123123';
    const email = 'pawel@example.com';
    const message = 'Wiadomość testowa';

    // Wprowadzenie danych do formularza
    await contactPage.fillContactForm(name, surname, phone, email, message);

    // Weryfikacja wartości pól formularza
    await contactPage.verifyFormValues(name, surname, phone, email, message);
  });
});