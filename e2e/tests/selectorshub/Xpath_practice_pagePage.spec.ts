import { test, expect } from "@playwright/test";
import { XpathPracticePage } from "../../pages/selectorshub/Xpath_practice_pagePage";
import { IframeInShadowDOMPage } from "../../pages/selectorshub/iframe_in_shadow_DOMPage";

test.describe("xpathPracticePagePage Tests", () => {
  let xpathPracticePage: XpathPracticePage;
  let iframeInShadowDOMPage: IframeInShadowDOMPage;

  test.beforeEach(async ({ page }) => {
    xpathPracticePage = new XpathPracticePage(page);
    await xpathPracticePage.navigateTo(
      "https://selectorshub.com/xpath-practice-page/"
    );
    await expect(page.url()).toBe(
      "https://selectorshub.com/xpath-practice-page/"
    );
  });

  test("should test User Name field inside an open shadow root", async ({ page }) => {
    const text = "Ania";
    const userNameInput = await xpathPracticePage.getUserNameInput();
    await xpathPracticePage.fillField(userNameInput, text);
    await expect(userNameInput).toHaveValue(text);
  });
  test("should test Pizza Name field in multiple open shadow roots", async ({ page }) => {
    const text = "ananasowa";
    const userPizzaInput = await xpathPracticePage.getUserNameInput();
    await xpathPracticePage.fillField(userPizzaInput, text);
    await expect(userPizzaInput).toHaveValue(text);
  });

  test('should navigate to iframe inside a shadow root and test Density field', async ({ page }) => {
    
    const text = 'pik pik';

  await page.mouse.wheel(1, 1);

  await page.getByPlaceholder('enter name', { exact: true }).click();
  await page.getByPlaceholder('enter name', { exact: true }).press('Tab');
  await page.getByRole('link', { name: 'Click to practice iframe' }).press('Enter');
  await page.mouse.wheel(1, 1);
  await page.frameLocator('#pact1').getByPlaceholder('Destiny').click();
  await page.frameLocator('#pact1').getByPlaceholder('Destiny').fill('pik pik');
  await page.locator('#userName').click();
  await page.frameLocator('#pact1').getByRole('button', { name: 'Close it' }).click();
    
    
  });
});
