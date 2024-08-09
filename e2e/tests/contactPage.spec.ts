import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';
import { testData } from "../utils/testData";
import { BasePage } from '../pages/BasePage';

test.describe('TTMS Contact Page', () => {
  let contactPage: ContactPage;
  let basePage: BasePage;

  // Setup przed każdym testem
  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    basePage = new BasePage(page) 
    
    await basePage.navigateTo('https://ttms.com/contact/');
    await basePage.acceptCookiesAll();
  });

  // Test wypełniania i weryfikacji formularza kontaktowego
  test('should fill and assert the contact form', async ({ page }) => {

    // Wprowadzenie danych do formularza
    await contactPage.fillContactForm(testData.name, testData.surname, testData.phone, testData.email, testData.message);

    // Weryfikacja wartości pól formularza
    await contactPage.verifyFormValues(testData.name, testData.surname, testData.phone, testData.email, testData.message);
  });
});