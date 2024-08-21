import { test, expect } from '@playwright/test';
import path from 'path';

test('Filling each element', async ({ page }) => {

    page.goto('https://demoqa.com/automation-practice-form');
    await page.waitForLoadState('load');

    await page.locator('#firstName').fill('Lucas');
    await page.locator('#lastName').fill('Vasquez');
    await page.locator('#userEmail').fill('lucas.vasquez17@rm.com');
    await expect(page.locator('#firstName')).toHaveValue('Lucas');
    await expect(page.locator('#lastName')).toHaveValue('Vasquez');
    await expect(page.locator('#userEmail')).toHaveValue('lucas.vasquez17@rm.com');
    // 'Male' gender selection 
    await page.locator('label[for="gender-radio-1"]').click();
    await expect(page.locator('#gender-radio-1')).toBeChecked();    
    // User number
    await page.locator('#userNumber').fill('0700880788');
    await expect(page.locator('#userNumber')).toHaveValue('0700880788');
    // Selecting date of birth
    await page.locator('#dateOfBirthInput').click();
    await page.selectOption('.react-datepicker__month-select', { value: '6' });
    await page.selectOption('.react-datepicker__year-select', { value: '1991' });
    await page.locator('div.react-datepicker__day[aria-label="Choose Monday, July 1st, 1991"]').click();
    const dateOfBirthValue = await page.locator('#dateOfBirthInput').inputValue();
    expect(dateOfBirthValue).toBe('01 Jul 1991');
    // Selecting subjects
    await page.locator('#subjectsContainer').click();
    await page.locator('#subjectsInput').fill('m');
    await page.waitForSelector('.subjects-auto-complete__menu-list', {state: 'visible'});
    await page.locator('.subjects-auto-complete__menu-list').locator('text=Computer Science').click();
    await page.locator('#subjectsInput').fill('math');
    await page.waitForSelector('.subjects-auto-complete__menu-list', {state: 'visible'});
    await page.locator('.subjects-auto-complete__menu-list').locator('text=Maths').click();
    await expect(page.locator('#subjectsContainer')).toContainText('Computer Science');
    await expect(page.locator('#subjectsContainer')).toContainText('Maths');
    // Checking each hobbie
    await page.locator('#hobbies-checkbox-1').click({force: true});
    await page.locator('#hobbies-checkbox-2').click({force: true});
    await page.locator('#hobbies-checkbox-3').click({force: true});
    await expect(page.locator('#hobbies-checkbox-1')).toBeChecked();
    await expect(page.locator('#hobbies-checkbox-2')).toBeChecked();
    await expect(page.locator('#hobbies-checkbox-3')).toBeChecked();
    // File upload
    const inputFile = page.locator('#uploadPicture');
    const filePath = path.resolve(__dirname, 'assets/Photo01.jpg');
    await inputFile.setInputFiles(filePath);
    const fileName = await page.locator('#uploadPicture').evaluate(( input: HTMLInputElement ) => input.files?.[0]?.name);
    expect(fileName).toBe('Photo01.jpg');
    const fileType = await page.locator('#uploadPicture').evaluate(( input: HTMLInputElement ) => input.files?.[0]?.type);
    expect(fileType).toBe('image/jpeg'); 
    const fileSize = await page.locator('#uploadPicture').evaluate(( input: HTMLInputElement ) => input.files?.[0]?.size);
    expect(fileSize).toBe(8116);
    // Address Text area
    await page.locator('#currentAddress').fill('J. P. Woronicza 17\n00-999 Warszawa');
    expect(page.locator('#currentAddress')).toHaveValue('J. P. Woronicza 17\n00-999 Warszawa');
    // Selecting State and City
    await expect(page.locator('#react-select-4-input')).toBeDisabled();
    await page.locator('#state').click();
    await page.getByText('Rajasthan', { exact: true }).click();
    await expect(page.locator('#react-select-4-input')).toBeEnabled();
    await page.locator('#city').click();
    await page.getByText('Jaipur', { exact: true }).click();
    await expect(page.locator('#state .css-1uccc91-singleValue')).toHaveText('Rajasthan');
    await expect(page.locator('#city .css-1uccc91-singleValue')).toHaveText('Jaipur');    
    // click on submit button
    await page.click('#submit');
    // check that the form was sent correctly
    await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
    
});