import { test, expect } from "@playwright/test";
import { before } from "node:test";

//@before

test("buy backpack and check if Checkout is complete", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");

  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Verify that the login was successful by checking for the presence of the inventory page
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill("Anna");
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill("Rejrat");
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill("15-110");
  await page.locator('[data-test="continue"]').click();

  // Verify the checkout overview page
  await expect(page).toHaveURL(
    "https://www.saucedemo.com/checkout-step-two.html"
  );

  await page.locator('[data-test="finish"]').click();

  // Check if proper text is displayed
  await expect(page.locator('[data-test="title"]')).toContainText(
    "Checkout: Complete!"
  );
});
