import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/contactPage';
import { formData } from '../data/dataTest';

test.describe('Contact Page Tests', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigateToContactPage();
    await contactPage.acceptCookies(); // Akceptowanie cookies
  });

  test('should fill the contact form correctly without submitting', async () => {
  
    await contactPage.fillContactForm(formData.name, formData.surname, formData.email, formData.phone, formData.message);

    const { nameValue, surnameValue, emailValue, phoneValue, messageValue } = await contactPage.getFormValues();

    // Weryfikacja, czy pola formularza zostały poprawnie wypełnione
    expect(nameValue).toBe(formData.name);
    expect(surnameValue).toBe(formData.surname);
    expect(emailValue).toBe(formData.email);
    expect(phoneValue).toBe(formData.phone);
    expect(messageValue).toBe(formData.message);
  });
});
