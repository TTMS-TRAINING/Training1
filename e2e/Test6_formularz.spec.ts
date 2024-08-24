import { test, expect } from '@playwright/test';

test('formularz', async ({ page }) => {
  //navigate to testing page
  await page.goto('https://demoqa.com/automation-practice-form');
  //await page.waitForTimeout(25000);

  //fill the form
  await page.getByPlaceholder('First Name').fill('Arjen');
  await page.getByPlaceholder('Last Name').fill('Robben');
  await page.getByPlaceholder('name@example.com').fill('theflyingdutchman@gmail.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').fill('1234567890');
  await page.locator('#dateOfBirthInput').click();  // # -> get by id
  await page.getByRole('combobox').nth(0).selectOption('January');      // nth -> selecting n-th element from the combobox
  await page.getByRole('combobox').nth(1).selectOption('1984');
  await page.getByLabel('Choose Monday, January 23rd,').click();
  await page.locator('.subjects-auto-complete__value-container').click();   // . -> get by class
  await page.locator('#subjectsInput').fill('A')
  await page.getByText('Arts', { exact: true }).click()
  await page.locator('#subjectsInput').fill('C')
  await page.getByText('Commerce', { exact: true }).click()
  await page.getByText('Sports').click();
  await page.getByLabel('Select picture').setInputFiles('./testfiles/icon.png');
  await page.getByPlaceholder('Current Address').fill('Netherlands');
  await page.getByText('Select State').click()
  await page.getByText('Rajasthan').click()
  await page.getByText('Select City').click()
  await page.getByText('Jaiselmer').click()
  await page.locator('#submit').click()

  // Check if operation ends with success
  await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');

});  