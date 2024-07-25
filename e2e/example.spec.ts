import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('Going to Contact tab', async({page})=>{
 // Go to the page
 await page.goto('https://ttms.com/');

 // Expect a title "to contain" a substring.
 await expect(page).toHaveTitle(/TTMS/);
 
 // Click the button to go to kontakt
 await page.click('#menu-item-2546');  
});

test('Filling in the name', async ({ page }) => {
  // Go to the page
  await page.goto('https://ttms.com/contact/');

  // Wait for the input to be visible
  const inputSelector = 'input[name="name-value"]';
  await page.waitForSelector(inputSelector);

  // Fill the input with a value
  await page.fill(inputSelector, 'jakies imie');
});

test('Fill in the Surname',async ({page})=>{
  // Go to the page
  await page.goto('https://ttms.com/contact/');

  // Wait for the input to be visible
  const inputSelector = 'input[name="surname-value"]';
  await page.waitForSelector(inputSelector);

  // Fill the input with a value
  await page.fill(inputSelector, 'jakies Nazwisko');
})

test('Fill in the Phone number',async ({page})=>{
  // Go to the page
  await page.goto('https://ttms.com/contact/');

  // Wait for the input to be visible
  const inputSelector = 'input[name="tel-value"]';
  await page.waitForSelector(inputSelector);

  // Fill the input with a value
  await page.fill(inputSelector, '0123456789');
})

test('Fill in the email',async ({page})=>{
  // Go to the page
  await page.goto('https://ttms.com/contact/');

  // Wait for the input to be visible
  const inputSelector = 'input[name="email-value"]';
  await page.waitForSelector(inputSelector);

  // Fill the input with a value
  await page.fill(inputSelector,'jakisemail@gmail.com');
})

test('Fill in the message',async ({page})=>{
  // Go to the page
  await page.goto('https://ttms.com/contact/');

  // Wait for the input to be visible
  const inputSelector = 'textarea[name="message-value"]';
  await page.waitForSelector(inputSelector);

  // Fill the input with a value
  await page.fill(inputSelector, 'Kakuna Ratata');
})

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
