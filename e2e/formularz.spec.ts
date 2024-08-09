import { test, expect } from '@playwright/test';


test.describe.only('Navigate to the page and fill out the form', () => {

    
test.beforeEach('Navigate to demo page', async ({ page }) => {
    // Navigate to the demo page before each test
    await page.goto('https://demoqa.com/automation-practice-form');
  });

test('Fill out the form', async ({ page }) => {
    // Fill in the first name field 
    await page.fill('input[id="firstName"]', 'Karol');

    // Fill in the last name field 
    await page.fill('input[id="lastName"]', 'Kamieński');

    // Fill in the email field 
    await page.fill('input[id="userEmail"]', 'karol.kamienski@example.com');

    // Select gender (e.g., Male)
    await page.click('label[for="gender-radio-1"]'); // Selecting 'Male'

    // Fill in the mobile number
    await page.fill('input[id="userNumber"]', '1234567890');

    // Set date of birth (click the field and select a date from the picker)
    await page.click('input[id="dateOfBirthInput"]');

    // Select year from the dropdown
    await page.selectOption('.react-datepicker__year-select', '1987');

    // Select month from the dropdown
    await page.selectOption('.react-datepicker__month-select', '6');

    // Select day from the calendar
    await page.click('.react-datepicker__day--015'); 

    // Fill in the subjects
    await page.fill('input[id="subjectsInput"]', 'Maths');
    await page.press('input[id="subjectsInput"]', 'Enter');
    await page.fill('input[id="subjectsInput"]', 'Physics');
    await page.press('input[id="subjectsInput"]', 'Enter');

    // Select hobbies (e.g., Sports)
    await page.click('label[for="hobbies-checkbox-1"]'); 

    // Upload a file (if required)
    await page.setInputFiles('input[id="uploadPicture"]', 'billy-the-puppet.jpg');

    // Fill in the current address
    await page.fill('textarea[id="currentAddress"]', '123 street, city');

    // Select the "State" from the dropdown
    await page.click('#state'); // Click to open the state dropdown
    await page.click('div[id*="react-select-3-option-0"]'); // Select the first option, e.g., "NCR"

    // Select the "City" from the dropdown
    await page.click('#city'); // Click to open the city dropdown
    await page.click('div[id*="react-select-4-option-0"]'); // Select the first option, e.g., "Delhi"


    // Submit the form
    await page.click('button[id="submit"]');

    // Check for a success message or confirmation dialog
    await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');

    page.close(); // Close the page 
  });

        });