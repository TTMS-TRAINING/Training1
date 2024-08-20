import { test, expect } from '@playwright/test';

test('Complete the form and submit', async ({ page }) => {
  test.setTimeout(60000); // Zwiększenie limitu czasu do 60 sekund
  // Przejdź do strony formularza
  await page.goto('https://demoqa.com/automation-practice-form');

  // Wypełnienie pól tekstowych
  await page.fill('#firstName', 'Aga');
  await page.fill('#lastName', 'Gat');
  await page.fill('#userEmail', 'aga.aga@example.com');

  // Wybór płci (damska)
  await page.click('input#gender-radio-2 + label');

  // Wypełnienie numeru telefonu
  await page.fill('#userNumber', '1234567890');

  // Wybór daty urodzenia
  await page.click('#dateOfBirthInput');
  await page.selectOption('.react-datepicker__month-select', '4'); // Maj
  await page.selectOption('.react-datepicker__year-select', '1990');
  await page.click('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)'); // 15 dzień miesiąca

  // Wpisanie przedmiotów (Subjects)
  await page.fill('#subjectsInput', 'Maths');
  await page.keyboard.press('Enter');

  // Wybór hobby (np. Reading)
  await page.click('input#hobbies-checkbox-2 + label');

  // Wczytanie pliku
  const filePath = 'kubek.jpg'; // Podaj właściwą ścieżkę do pliku
  await page.setInputFiles('#uploadPicture', filePath);

  // Wpisanie adresu
  await page.fill('#currentAddress', '123 Main St');

  // Wybór stanu
  await page.click('#state'); // Kliknięcie, aby otworzyć listę rozwijaną
  await page.click('div[id^="react-select-3-option"]', { hasText: 'NCR' }); // Wybór opcji NCR

  // Wybór miasta
  await page.click('#city'); // Kliknięcie, aby otworzyć listę rozwijaną
  await page.click('div[id^="react-select-4-option"]', { hasText: 'Delhi' }); // Wybór opcji Delhi

  // Kliknięcie przycisku Submit
  await page.click('#submit');

  // Sprawdzenie, czy formularz został poprawnie wysłany, np. przez sprawdzenie wyświetlonego okna modalnego
  const modalTitle = page.locator('.modal-title');
  await expect(modalTitle).toHaveText('Thanks for submitting the form');
});
