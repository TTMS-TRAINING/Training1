import { test, expect } from '@playwright/test';

test('Zadanie 6 - Formularz', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.getByPlaceholder('First Name').fill('Filip');
    await page.getByPlaceholder('Last Name').fill('Matyasz');
    await page.getByPlaceholder('name@example.com').fill('filip@matyasz.com');
    await page.getByText('Male', { exact: true }).click();
    await page.getByPlaceholder('Mobile Number').fill('7777777777');
    await page.locator('#dateOfBirthInput').click();
    await page.getByRole('combobox').nth(1).selectOption('1985');

    await page.locator('.subjects-auto-complete__value-container').click();
    await page.locator('#subjectsInput').fill('English');
    await page.locator('#subjectsInput').press('Enter');
    await page.locator('#subjectsInput').fill('Computer Science');
    await page.locator('#subjectsInput').press('Enter');
    await page.locator('#subjectsInput').fill('Arts');
    await page.locator('#subjectsInput').press('Enter');

    await page.getByText('Sports').click();
    await page.getByText('Reading').click();
    await page.getByText('Music').click();

    await page.getByLabel('Select picture').setInputFiles('guitar.jpg');
    
    await page.getByPlaceholder('Current Address').fill('Testowa 77/7\nPoland');
    await page.locator('#state svg').click();
    await page.getByText('NCR', { exact: true }).click();
    await page.locator('#city svg').click();
    await page.getByText('Noida', { exact: true }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('Thanks for submitting the form')).toBeVisible();

});