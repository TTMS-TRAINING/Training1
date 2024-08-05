
​
import { test, expect } from '@playwright/test';

test('Wypełnij formularz i kliknij Submit', async ({ page }) => {
  // Ustawienie dłuższego limitu czasu dla testu
  test.setTimeout(60000);

  // Przejdź do strony formularza
  await page.goto('https://demoqa.com/automation-practice-form', { timeout: 60000 });

  // Wypełnij pola formularza
  await page.fill('input[placeholder="First Name"]', 'Anna');
  await page.fill('input[placeholder="Last Name"]', 'Nowak');
  await page.fill('input[placeholder="name@example.com"]', 'anna.nowak@example.com');

  // Wybierz płeć (damska)
  await page.check('input#gender-radio-2'); // Assuming this is the radio button for female

  // Wypełnij numer telefonu
  await page.fill('input[placeholder="Mobile Number"]', '9876543210');

  // Wybierz datę urodzenia
  await page.click('#dateOfBirthInput');
  await page.selectOption('.react-datepicker__month-select', '7'); // Sierpień = 7
  await page.selectOption('.react-datepicker__year-select', '1992');
  await page.click('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)');

  // Wypełnij pole z przedmiotami
  await page.fill('input#subjectsInput', 'English');
  await page.keyboard.press('Enter');

  // Zaznacz hobby
  await page.check('input#hobbies-checkbox-1'); // Reading
  await page.check('input#hobbies-checkbox-2'); // Music

  // Ścieżka do pliku na Twoim komputerze
  const filePath = 'C:\\Users\\agnie\\Downloads\\roses-3887414_1280.webp';

  // Załaduj plik
  await page.setInputFiles('input#uploadPicture', filePath);

  // Wypełnij pole z adresem
  await page.fill('textarea[placeholder="Current Address"]', '456 Elm Street, Gotham');

  // Wybierz stan i miasto
  await page.click('#state');
  await page.click('text=Uttar Pradesh');
  await page.click('#city');
  await page.click('text=Agra');

  // Kliknij przycisk Submit
  await page.click('#submit');

  // Sprawdź, czy formularz został pomyślnie przesłany
  await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');
});