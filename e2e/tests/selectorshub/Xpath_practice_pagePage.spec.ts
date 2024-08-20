import { test, expect } from "@playwright/test";
import { XpathPracticePage } from "../../pages/selectorshub/Xpath_practice_pagePage";
import { IframeInShadowDOMPage } from "../../pages/selectorshub/iframe_in_shadow_DOMPage";
import textInputTestData from "../../models/selectorshub/textInputTestData.json";

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

  textInputTestData.forEach((data: { name: string; text: string }) => {
    test(`should test User Name field inside an open shadow root using ${data.name} data`, async () => {
      const userNameInput = await xpathPracticePage.getUserNameInput();
      await xpathPracticePage.fillField(userNameInput, data.text);
      await expect(userNameInput).toHaveValue(data.text);
    });
  });
  
  textInputTestData.forEach((data: { name: string; text: string }) => {
    test(`should test Pizza Name field in multiple open shadow roots using ${data.name} data`, async () => {
      const userPizzaInput = await xpathPracticePage.getUserNameInput();
      await xpathPracticePage.fillField(userPizzaInput, data.text);
      await expect(userPizzaInput).toHaveValue(data.text);
    });
  });

  textInputTestData.forEach((data: { name: string; text: string }) => {
    test(`should navigate to iframe inside a shadow root and test Density field using ${data.name} data`, async ({
      page,
    }) => {
      const linkToIframe =
        await xpathPracticePage.getClickToPracticeIframeInsideShadowDomScenarioButton();
      await linkToIframe.press("Enter");
      const iframeInShadowDOMPage = new IframeInShadowDOMPage(
        await xpathPracticePage.getPage()
      );
      await iframeInShadowDOMPage.fillDensityField(data.text);
      await iframeInShadowDOMPage.checkDensityField(data.text);
    });
  });
});
