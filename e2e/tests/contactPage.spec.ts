import { test, expect } from "@playwright/test";
import { ContactPage } from "../pages/ContactPage";
import { testDataContact1 } from "../fixtures/TestData";

test.describe("Contact Page Tests", () => {
  let contactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigateTo("https://ttms.com/contact");
    await contactPage.acceptAllCookies();
  });

  // test.afterEach(async( {page}) => {
  // page.close();});

  test("should correctly fill the form and do not subbmit", async ({
    page,
  }) => {
    await contactPage.page.waitForSelector('form', { state: 'visible' });
    await contactPage.fillForm(
      testDataContact1.name,
      testDataContact1.surname,
      testDataContact1.phone,
      testDataContact1.email,
      testDataContact1.message
    );
    await contactPage.checkIfFormIsCorrectlyFilled(
      testDataContact1.name,
      testDataContact1.surname,
      testDataContact1.phone,
      testDataContact1.email,
      testDataContact1.message
    );
  });
});
