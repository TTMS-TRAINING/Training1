import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  // complete the form with login details
  await page.getByPlaceholder('First Name').fill('Kamila');
  await page.getByPlaceholder('Last Name').fill('Testowa');
  await page.getByPlaceholder('name@example.com').fill('kamila.testowa@gmail.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').fill('1234567890');
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).selectOption('1990');
  await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('0');
  await page.getByLabel('Choose Monday, January 1st,').click();
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('qaz');
  await page.getByText('Sports').click();
  await page.getByLabel('Select picture').setInputFiles('JPEG_example_JPG_RIP_010.jpg');
  await page.getByPlaceholder('Current Address').fill('ul. Testowa 1');
  await page.locator('#state svg').click();
  await page.getByText('NCR', { exact: true }).click();
  await page.locator('#city svg').click();
  await page.getByText('Gurgaon', { exact: true }).click();
  //click Submit button
  await page.getByRole('button', { name: 'Submit' }).click();
  // check whether the final text is displayed
  await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
});