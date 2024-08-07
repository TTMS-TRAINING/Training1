import { test, expect } from '@playwright/test';

test('Complete the form and submit', async ({ page }) => {
  // Przejdź do strony formularza
  await page.goto('https://demoqa.com/automation-practice-form');

  // Wypełnienie pól tekstowych
  await page.fill('#firstName', 'Aga');
  await page.fill('#lastName', 'Gat');
  await page.fill('#userEmail', 'aga.aga@example.com');

  // Wybór płci (damska)
  await page.click('label[for="gender-radio-2"]');

  // Wypełnienie numeru telefonu
  await page.fill('#userNumber', '1234567890');

  // Wybór daty urodzenia
  await page.click('#dateOfBirthInput');
  await page.selectOption('.react-datepicker__month-select', '4'); // Maj
  await page.selectOption('.react-datepicker__year-select', '1990');
  await page.click('.react-datepicker__day--015'); // 15 dzień miesiąca

  // Wpisanie przedmiotów (Subjects)
  await page.fill('#subjectsInput', 'Maths');
  await page.keyboard.press('Enter');

  // Wybór hobby (np. Reading)
  await page.click('label[for="hobbies-checkbox-2"]');

// Wczytanie pliku
const filePath = 'kubek.jpg'; // Podaj właściwą ścieżkę do pliku
await page.setInputFiles('#uploadPicture', filePath);

  // Wpisanie adresu
  await page.fill('#currentAddress', '123 Main St');

  // Wybór stanu
await page.click('#state'); // Kliknięcie, aby otworzyć listę rozwijaną
await page.locator('div[id^="react-select-3-option"]').filter({ hasText: 'NCR' }).click(); // Wybór opcji NCR

// Wybór miasta
await page.click('#city'); // Kliknięcie, aby otworzyć listę rozwijaną
await page.locator('div[id^="react-select-4-option"]').filter({ hasText: 'Delhi' }).click(); // Wybór opcji Delhi


  // Kliknięcie przycisku Submit
  await page.click('#submit');

  // Możesz sprawdzić, czy formularz został poprawnie wysłany, np. przez sprawdzenie wyświetlonego okna modalnego
  const modalTitle = page.locator('.modal-title');
  await expect(modalTitle).toHaveText('Thanks for submitting the form');
});
