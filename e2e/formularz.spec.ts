import { test, expect } from '@playwright/test';

test('Interaction with the elements', async ({ page }) => {

    // Going to the page
    await page.goto('https://demoqa.com/automation-practice-form');

    // First name input check
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').fill('Testowy');

    // Last name input check
    await page.getByPlaceholder('Last Name').click();
    await page.getByPlaceholder('Last Name').fill('Janusz');

    // Email input check
    await page.getByPlaceholder('name@example.com').click();
    await page.getByPlaceholder('name@example.com').fill('niemoralnybialystok@example.com');

    //Gender
    await page.getByText('Female').click();

    // Phone number input check
    await page.getByPlaceholder('Mobile Number').click();
    await page.getByPlaceholder('Mobile Number').fill('0123456789');

    // Validate the phone number here
    const phoneValue = await page.getByPlaceholder('Mobile Number').inputValue();
    expect(phoneValue).toHaveLength(10);

    // Date of Birth input check
    await page.locator('#dateOfBirthInput').click();
    await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('9');
    await page.getByRole('combobox').nth(1).selectOption('2009');
    await page.getByLabel('Choose Monday, October 5th,').click();

    //Filling in the funzies
    await page.locator('.subjects-auto-complete__value-container').click();
    await page.locator('#subjectsInput').fill('Lubie placki');
    await page.getByText('Music').click();
    await page.getByText('Reading').click();

    //Filling in the adress
    await page.getByPlaceholder('Current Address').click();
    await page.getByPlaceholder('Current Address').fill('Pustych nadziei 42/102 Dzierżążnia Polska');
    await page.getByText('Select State').click();
    await page.getByText('Haryana', { exact: true }).click();
    await page.getByText('Select City').click();
    await page.getByText('Panipat', { exact: true }).click();

    // Sending the form
    await page.getByRole('button', { name: 'Submit' }).click();

    // Pause to inspect the page state
    await page.pause();

    //Verifying the positive outcome
    await expect(page.locator('#example-modal-sizes-title-lg')).toBeVisible();
    await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText(/Thanks for submitting the form/);
    // await page.screenshot({ path: 'form-page-confirm.png' });

    //Closing it all
    await page.getByRole('button', { name: 'Close' }).click({force:true});
  });