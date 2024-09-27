import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { homePageTestData } from '../data/testData';

test.describe("Home Page Tests", () => {
  test("should display the correct header", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateTo("https://ttms.com");
    const headerText = await homePage.getHeaderText();
    expect(headerText).toBe(
      homePageTestData.expectedTitle
    );
  });

  test("should navigate to the contact page", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateTo("https://ttms.com");
    await homePage.clickContactLink();
    await expect(page).toHaveURL("https://ttms.com/contact/");
  });
});