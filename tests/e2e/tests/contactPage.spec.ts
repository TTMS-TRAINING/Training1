import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/contactPage';
import { HomePage } from '../pages/homePage';
import { contactFormData } from '../../resources/testData';

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


    // Wprowadzenie danych do formularza
    await contactPage.fillContactForm(contactFormData.name, contactFormData.surname, contactFormData.phone, contactFormData.email, contactFormData.message);

    // Weryfikacja wartości pól formularza
    await contactPage.verifyFormValues(contactFormData.name, contactFormData.surname, contactFormData.phone, contactFormData.email, contactFormData.message);
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


});