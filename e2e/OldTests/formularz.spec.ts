import { test, expect, type Page } from '@playwright/test';
import * as path from 'path';


/**
 * Utwórz nowy plik formularz.spec.ts i utwórz w nim następujące testy:
Wejdz na strone https://demoqa.com/automation-practice-form
Utworz test który wypełni wszystkie elementy na stronie i kliknie na dole przycisk Submit!
 */

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
});


test.afterEach(async ({ page }) => {
  await page.close();
});

test('should correctly fill out the form and show a confirmation modal after submission', async ({ page }) => {

  // fill and check first name
  await fillAndCheckField(page, '#firstName', 'Ania');

  // fill and check last name
  await fillAndCheckField(page, '#lastName', 'AJR');

  // fill and check email
  await fillAndCheckField(page, '#userEmail', 'ania@ajr.pl');

  // select and check Gender
  await selectAndCheckGender(page, 'Female');

  // fill and check Mobile
  await fillAndCheckField(page, '#userNumber', '1234512345');

  // select and check Date of Birth
  await selectAndCheckDateOfBirth(page, '05', 'Jul', '1986');

  // fill and check Subjects
  await fillAndCheck_Subjects(page, ['Maths', 'English']);

  // select and check Hobby
  await selectAndCheck_Hobbies(page, ['Reading', 'Music']);

  // select and check Picture
  await selectAndCheck_Picture(page, '../fixtures', 'zero-step.jpeg');

  // fill and check Current Address
  await fillAndCheckField(page, '#currentAddress', 'Białystok, \nul. Piękna 1 m 7');

  // select and check State and City
  await selectAndCheck_StateAndCity(page, 'Haryana', 'Panipat');

  // press Submit button
  await page.getByRole('button', { name: 'Submit' }).click();

  // check
  await expect(page.locator('#example-modal-sizes-title-lg')).toContainText('Thanks for submitting the form');

});

async function fillAndCheckField(page: Page, locator: string, value: string) {
  const fieldLocator = page.locator(locator);
  await fieldLocator.click();
  await fieldLocator.fill(value);
  await expect(fieldLocator).toHaveValue(value);
}

async function selectAndCheckGender(page: Page, value: string) {
  let locatorGender: string = '';
  let labelGender: string = '';

  switch (value) {
    case "Male":
      locatorGender = 'input[id="gender-radio-1"]';
      labelGender = 'label[for="gender-radio-1"]'
      break;
    case "Female":
      locatorGender = 'input[id="gender-radio-2"]';
      labelGender = 'label[for="gender-radio-2"]'
      break;
    default:
      locatorGender = 'input[id="gender-radio-3"]';
      labelGender = 'label[for="gender-radio-3"]'
      break;
  }
  // select and check Gender
  const genderLocator = page.locator(locatorGender); // Female
  // wait if Gender (Female) is visible
  await genderLocator.waitFor({ state: 'visible' });
  // click on label (Female) gender
  const genderLabelLocator = page.locator(labelGender);
  await genderLabelLocator.click();
  await expect(genderLocator).toBeChecked();
}

async function selectAndCheckDateOfBirth(page: Page, day: string, month: string, year: string) {
  let dayOption: string = `.react-datepicker__day--0${day}`;
  let monthOption: string = '';
  switch (month) {
    case "Jan":
      monthOption = '0';
      break;
    case "Feb":
      monthOption = '1';
      break;
    case "Mar":
      monthOption = '2';
      break;
    case "Apr":
      monthOption = '3';
      break;
    case "May":
      monthOption = '4';
      break;
    case "Jun":
      monthOption = '5';
      break;
    case "Jul":
      monthOption = '6';
      break;
    case "Aug":
      monthOption = '7';
      break;
    case "Sep":
      monthOption = '8';
      break;
    case "Oct":
      monthOption = '9';
      break;
    case "Nov":
      monthOption = '10';
      break;
    case "Dec":
      monthOption = '11';
      break;
    default:
      monthOption = '0';
      break;
  }
  // click on datePicker
  await page.click('#dateOfBirthInput');
  // select year
  await page.locator('.react-datepicker__year-select').selectOption(year);
  // select month
  await page.locator('.react-datepicker__month-select').selectOption(monthOption);
  // select day
  await page.click(dayOption);
  // check
  const dateInputValue = await page.inputValue('#dateOfBirthInput');
  expect(dateInputValue).toBe(`${day} ${month} ${year}`);
}

async function fillAndCheck_Subjects(page: Page, subjects: string[]): Promise<void> {
  for (const subject of subjects) {
    const subjectLocator = page.locator('#subjectsInput');
    // fill subject
    await subjectLocator.click();
    await subjectLocator.fill(subject);
    // arrow down
    await page.keyboard.press('ArrowDown');
    // wait
    const suggestionLocator = page.locator('.subjects-auto-complete__option');
    await suggestionLocator.waitFor({ state: 'visible' }); 
    // enter
    await page.keyboard.press('Enter');
    // check
    const subjectsContainer = page.locator('.subjects-auto-complete__multi-value__label');
    const addedSubjects = await subjectsContainer.allTextContents();
    await expect(addedSubjects).toContain(subject);
  }
}


async function selectAndCheck_Hobbies(page: Page, hobbies: string[]) {
  for (const hobby of hobbies) {
    await page.getByText(hobby).click();
    await expect(page.getByText(hobby, {exact: true})).toBeChecked();
  }
}

async function selectAndCheck_Picture(page: Page, pathToFile: string, fileName: string) {
  // path to file
  const filePath = path.resolve(__dirname, pathToFile, fileName);
  // fill picture
  await page.getByLabel('Select picture').setInputFiles(filePath);
  // check (fakepath?)
  await expect(page.getByLabel('Select picture')).toHaveValue(`C:\\fakepath\\${fileName}`);
}

async function selectAndCheck_StateAndCity(page: Page, state: string, city: string) {
  // select State
  const stateLocator = page.locator('#state'); 
  await stateLocator.click();
  await page.getByText(state, { exact: true }).click();

  // check if State is selected
  await expect(stateLocator).toContainText(state);

  // select City
  const cityLocator = page.locator('#city'); 
  await cityLocator.click();
  await page.getByText(city, { exact: true }).click();

  // check if City is selected
  await expect(cityLocator).toContainText(city);
}
