import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ContactPage } from '../pages/contactPage';

test.describe('TTMS Home Page', () => {
  let homePage: HomePage;
  let contactPage: ContactPage;

  // Setup przed każdym testem
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page); // Inicjalizacja obiektu HomePage
    contactPage = new ContactPage(page);
    await homePage.navigate(); // Nawigacja do strony głównej i akceptacja cookies
  });


  test('schould navigate to Career page', async ({ page }) => {

    await homePage.clickCareer();
    await contactPage.aboutUS();

  });
});