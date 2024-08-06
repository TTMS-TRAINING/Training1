import { test, expect} from '@playwright/test';
import { TIMEOUT } from 'dns';

test('test', async ({ page }) => {
      await page.goto('https://demoqa.com/automation-practice-form/');
  
      // fill all fields
      await page.fill('#firstName', 'TestName');
      await page.fill('#lastName', 'TestLastName');
      await page.fill('#userEmail', 'test@test.com');
      await page.getByText('Female').click();
      await page.fill('#userNumber', '1234567890');
      await page.fill('#dateOfBirthInput', '06 Apr 1990');
      await page.locator('.subjects-auto-complete__value-container').click();
      await page.locator('#subjectsInput').fill('Maths');
      await page.locator('#subjectsInput').press('Enter');
      await page.getByText('Reading').check();
      await page.getByText('Sports').check();
      await page.getByLabel('Select picture').setInputFiles('9f2b2899-b456-4814-8081-6019c4734af7.jpg');
      await page.getByPlaceholder('Current Address').fill('Test 1/3 00-000 Test');
      await page.locator('#state svg').click();
      await page.getByText('Haryana', { exact: true }).click();
      await page.locator('#city svg').click();
      await page.getByText('Panipat', { exact: true }).click();

      // tap on submit button
      await page.click('#submit');
      
      // check that form was sent properly
      await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
      
      

    });