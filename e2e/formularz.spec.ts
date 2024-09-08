import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Tester');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('test@test.test');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').click();
  await page.getByPlaceholder('Mobile Number').fill('1234567890');
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).selectOption('1982');
  await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('0');
  await page.getByLabel('Choose Sunday, January 31st,').click();
  await page.waitForTimeout(500);
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.waitForTimeout(500);
  await page.locator('#subjectsInput').fill('Maths');
  await page.waitForTimeout(500);
  await page.locator('#react-select-2-option-0').click();
  await page.getByText('Sports').click();
  await page.getByText('Reading').click();
  await page.getByText('Music').click();
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('test address 12/34');
  await page.locator('#state svg').click();
  await page.waitForTimeout(500);
  await page.getByText('Haryana', { exact: true }).click();
  await page.locator('#city svg').click();
  await page.waitForTimeout(500);
  await page.getByText('Panipat', { exact: true }).click();

  await page.setInputFiles('#uploadPicture', 'jk.jpg');

  await page.getByRole('button', { name: 'Submit' }).click();
  });