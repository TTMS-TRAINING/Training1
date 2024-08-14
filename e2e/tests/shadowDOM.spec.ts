import { chromium, test } from "@playwright/test";

test.use({ viewport: { width: 1400, height: 1000 } });
test("Scenario 1 : Element inside an open Shadow Root", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://selectorshub.com/xpath-practice-page/");
  await page.waitForSelector(".dropbtn", {
    state: "visible",
  });
  await page.locator("#userName #kils").fill("Tomasz");

  // another way of doing this is

  await page.locator("#userName").getByPlaceholder("enter name").fill("Tomasz");

  await page.waitForTimeout(5000);
});

test.use({ viewport: { width: 1400, height: 1000 } });
test("Scenario 2 : Multiple Open Shadow Roots ( Nested Shadow Roots)", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://selectorshub.com/xpath-practice-page/");
  await page.waitForSelector(".dropbtn", {
    state: "visible",
  });
  await page.locator("#userName input#pizza").fill("Mozarella"); // element is inside nested shadow DOM

  await page.waitForTimeout(5000);
});
test.use({ viewport: { width: 1400, height: 1000 } });
test("Scenario 3 : Element is inside an iframe inside a Shadow Root.", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://selectorshub.com/xpath-practice-page/");
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Click to practice iframe' }).click();
  //await page.frameLocator('#pact1').getByPlaceholder('Destiny').click();
  //await page.frameLocator('#pact1').getByPlaceholder('Destiny').fill('Test');
  //await page.frameLocator('#pact1').getByRole('button', { name: 'Close it' }).click();
  await page.waitForSelector(".jackPart", {
    state: "visible",
  });
  await page.frameLocator('#pact1').getByPlaceholder('Destiny').click();
  await page.frameLocator('#pact1').getByPlaceholder('Destiny').fill('Test');
  await page.frameLocator('#pact1').getByRole('button', { name: 'Close it' }).click();

  await page.waitForTimeout(5000);
});
