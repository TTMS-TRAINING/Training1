import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/contactPage';

test.describe('TTMS Contact Page', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigate();
  });

  test('should fill and assert the contact form', async ({ page }) => {
    const name = 'Paweł';
    const surname = 'Kowalski';
    const phone = '123123123';
    const email = 'pawel@example.com';
    const message = 'Wiadomość testowa';

    await contactPage.fillContactForm(name, surname, phone, email, message); // Wprowadzenie danych
    await contactPage.verifyFormValues(name, surname, phone, email, message);  // Weryfikacja wartości pól

   
  });
});