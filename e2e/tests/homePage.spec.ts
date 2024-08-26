import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test.describe("Home Page Tests", () => {
  test("should display the correct header", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateTo("https://ttms.pl");
    const headerText = await homePage.getHeaderText();
    expect(headerText).toBe(
      "AI-powered IT systems at your fingertips. We are trusted and modern IT partner."
    );
  });

  test("should navigate to the contact page", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateTo("https://ttms.pl");
    await homePage.clickContactLink();
    await expect(page).toHaveURL("https://ttms.com/contact/");
  });
});