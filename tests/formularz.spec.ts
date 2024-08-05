import { test, expect } from '@playwright/test';
import path from 'path';

test('test', async ({ page }) => {
    // Wejdź na stronę
    await page.goto('https://demoqa.com/automation-practice-form');

    // Wypełnij pola imienia i nazwiska
    await page.fill('#firstName', 'Jan');
    await page.fill('#lastName', 'Kowalski');

    // Wypełnij pole e-mail
    await page.fill('#userEmail', 'jan.kowalski@email.com');

    // Zaznacz radio button (np. Male)
    await page.getByText('Male', { exact: true }).click();

    // Sprawdź, czy radio button jest zaznaczony
    const isChecked = await page.isChecked('input[name="gender"][value="Male"]');
    expect(isChecked).toBe(true);

    // Wypełnij pole numeru telefonu
    await page.fill('#userNumber', '0797406326');

    // Wybierz datę urodzenia
    await page.click('#dateOfBirthInput');
    await page.selectOption('.react-datepicker__month-select', { value: '4' }); // May (miesiące liczone od 0)
    await page.selectOption('.react-datepicker__year-select', { value: '1985' });
    await page.click('.react-datepicker__day--025:not(.react-datepicker__day--outside-month)');

    // Sprawdź, czy data została ustawiona poprawnie
    const dateValue = await page.$eval('#dateOfBirthInput', input => input.value);
    expect(dateValue).toBe('25 May 1985');

    // Wypełnij pole Subjects
    await page.click('#subjectsInput');
    await page.fill('#subjectsInput', 'art');
    await page.waitForSelector('.subjects-auto-complete__menu-list');
    await page.click('.subjects-auto-complete__menu-list >> text=Arts'); // Wybierz "Arts"
    
    // Dodaj timeout przed kolejnym wpisem
    await page.waitForTimeout(1000);

    await page.click('#subjectsInput');
    await page.fill('#subjectsInput', 'che');
    await page.waitForSelector('.subjects-auto-complete__menu-list');
    await page.click('.subjects-auto-complete__menu-list >> text=Chemistry'); // Wybierz "Chemistry"

    // Sprawdź, czy przedmioty zostały poprawnie dodane
    const subjectsValue = await page.$eval('#subjectsContainer .subjects-auto-complete__value-container', el => el.textContent);
    expect(subjectsValue).toContain('Arts');
    expect(subjectsValue).toContain('Chemistry');

    // Zaznacz checkbox (Reading)
    await page.getByText('Reading').click();
    const isChecked2 = await page.isChecked('#hobbies-checkbox-2');
    expect(isChecked2).toBe(true);

    // Ścieżka do pliku JPG
    const filePath = path.resolve(__dirname, '../tests/resources/example.jpg');

    // Prześlij plik
    await page.setInputFiles('#uploadPicture', filePath);

    // Sprawdź, czy plik został przesłany
    const fileName = await page.$eval('#uploadPicture', input => input.files[0].name);
    expect(fileName).toBe('example.jpg');

    // Wypełnij pole textarea z adresem
    await page.fill('#currentAddress', '123 Example Street\nApt 4B\nCityville, ST 12345');

    // Sprawdź, czy pole textarea zostało poprawnie wypełnione
    const addressValue = await page.$eval('#currentAddress', textarea => textarea.value);
    expect(addressValue).toBe('123 Example Street\nApt 4B\nCityville, ST 12345');

    // Wybierz stan
    await page.click('#state');
    await page.click('#react-select-3-option-1'); // Wybierz stan (np. Uttar Pradesh)

    // Wybierz miasto
    await page.click('#city');
    await page.click('#react-select-4-option-1'); // Wybierz miasto (np. Lucknow)

    // Sprawdź, czy stan i miasto zostały poprawnie wybrane
    await expect(page.locator('#state')).toContainText('Uttar Pradesh');
    await expect(page.locator('#city')).toContainText('Lucknow');

    // Kliknij przycisk  "Submit"
    await page.getByRole('button', { name: 'Submit' }).click();

    // Sprawdź czy wszystkie elementy zostały dodane poprawnie
    await expect(page.locator('#example-modal-sizes-title-lg')).toContainText('Thanks for submitting the form');
    await expect(page.locator('tbody')).toContainText('Jan Kowalski');
    await expect(page.locator('tbody')).toContainText('jan.kowalski@email.com');
    await expect(page.locator('tbody')).toContainText('Male');
    await expect(page.locator('tbody')).toContainText('25 May,1985');
    await expect(page.locator('tbody')).toContainText('Arts, Chemistry');
    await expect(page.locator('tbody')).toContainText('Reading');
    await expect(page.locator('tbody')).toContainText('example.jpg');
    await expect(page.locator('tbody')).toContainText('Uttar Pradesh Lucknow');
    await page.locator('#close-fixedban').click();
   
});