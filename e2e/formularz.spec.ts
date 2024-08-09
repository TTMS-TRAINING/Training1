import { test, expect } from '@playwright/test';

test('interacting with elements', async ({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form');
    await page.getByPlaceholder('First Name').fill('Test');
    await page.getByPlaceholder('Last Name').fill('Test Second');
    await page.getByPlaceholder('name@example.com').fill('testmail@mail.mail')
    await page.getByText('Male', { exact: true }).check();
    await page.getByPlaceholder('Mobile Number').fill('1113335556');
    await page.locator('#dateOfBirthInput').click();
    await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('April');
    await page.getByRole('combobox').nth(1).selectOption('1995');
    await page.getByLabel('Choose Sunday, April 9th,').click();
    await page.locator('.subjects-auto-complete__value-container').click();
    await page.locator('#subjectsInput').fill('maths');
    await page.getByText('Maths', { exact: true }).click();
    await page.getByText('Sports').click();
    await page.getByPlaceholder('Current Address').fill('Test adress test adress');
    await page.getByText('Select State').click();
    await page.getByText('NCR', { exact: true }).click();
    await page.getByText('Select City').click();
    await page.getByText('Gurgaon', { exact: true }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
})