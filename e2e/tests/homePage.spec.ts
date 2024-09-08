import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test.describe("Home Page Tests", () => {

  test.beforeEach(async({page}) => {
    const homePage = new HomePage(page);
    await homePage.navigateTo('http://www.ttms.com');
    await homePage.acceptAllCookies();

  });
  
  test("Header text", async ({ page }) => {
    const homePage = new HomePage(page);

    const headerText = await homePage.getHeaderText();
    expect(headerText).toBe('AI-powered IT systems at your fingertips. We are trusted and modern IT partner.')
  
  })
  test("Contact link tests", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.clickContactLink();
    await expect(page).toHaveURL('https://ttms.com/contact/');
  })

  test("Your AI solutions test", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.clickYourAISolutions();
    await expect(page).toHaveURL('https://ttms.com/uk/ai-solutions-for-business/');
  })

  test("About Us test", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.hoverAboutUs();
    await homePage.clickWhoWeAre();
    await expect(page).toHaveURL('https://ttms.com/about-us/');
  
  })
  
  });