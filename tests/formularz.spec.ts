import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');


    await page.click('#firstName');
    await page.fill('#firstName', 'Jan');

    await page.click('#lastName');
    await page.fill('#lastName', 'Kowalski');

    await page.click('#userEmail');
    await page.fill('#userEmail', 'jan.kowalski@email.com');

    // Zaznacz radio button (np. Male)
    //await page.click('#gender-radio-2');
    await page.getByText('Male', { exact: true }).click();

    // Sprawdź, czy radio button jest zaznaczony
    const isChecked = await page.isChecked('input[name="gender"][value="Male"]');
    expect(isChecked).toBe(true);

    await page.click('#userNumber');
    await page.fill('#userNumber', '797406326');

    // Kliknij na pole daty, aby otworzyć kalendarz
    await page.click('#dateOfBirthInput');

    // Wybierz miesiąc
    await page.selectOption('.react-datepicker__month-select', { value: '4' }); // May (miesiące są liczone od 0)

    // Wybierz rok
    await page.selectOption('.react-datepicker__year-select', { value: '1985' });

    // Wybierz dzień (np. 25 maja 1985)
    await page.click('.react-datepicker__day--025:not(.react-datepicker__day--outside-month)');

    // Opcjonalnie: Sprawdź, czy data została ustawiona poprawnie
    const dateValue = await page.$eval('#dateOfBirthInput', input => input.value);
    expect(dateValue).toBe('25 May 1985');


});