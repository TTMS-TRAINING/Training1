import { test, expect } from "@playwright/test";

test.describe("Different browsers test", () => {
  test("standard_user Chrome", async ({ page, browserName }) => {
    if (browserName !== "chromium") {
      test.skip();
    }
    await page.goto("https://saucedemo.com/");
    // Login to the website and verify if it was successful
    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");
    await page.click("#login-button");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("locked_out user login", async ({ page, browserName }) => {
    if (browserName !== "firefox") {
      test.skip();
    }
    await page.goto("https://saucedemo.com/");
    // Login to the website and verify if it was not successful
    await page.fill("#user-name", "locked_out_user");
    await page.fill("#password", "secret_sauce");
    await page.click("#login-button");
    await expect(page.locator('[data-test="error"]')).toHaveText(
      /Sorry, this user has been locked out/
    );
  });

  test("glitch user login", async ({ page, browserName }) => {
    if (browserName !== "webkit") {
      test.skip();
    }
    await page.goto("https://saucedemo.com/");
    // Login to the website and verify if it was successful
    await page.fill("#user-name", "performance_glitch_user");
    await page.fill("#password", "secret_sauce");
    await page.click("#login-button");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
});
