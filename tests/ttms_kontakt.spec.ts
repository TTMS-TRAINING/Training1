import { test, expect } from '@playwright/test';

test('fill kontakt link', async ({ page }) => {
    await page.goto('https://ttms.com/pl/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Skontaktuj się z nami ' }).click();

    // Name input
    await page.getByLabel('Imię').fill('123');

    // Surname input
    await page.getByLabel('Nazwisko ').fill('456');

    // Phone input
    await page.getByLabel('Telefon').fill('789');

    // E-mail input
    await page.getByLabel('E-mail').fill('012');

    // Message input
    await page.getByLabel('Wiadomość').fill('345');
    

    // Check the checkbox
    //await page.getByRole('checkbox').click();
    // Assert the checked state
    //expect(page.getByLabel('Wyrażam zgodę na przetwarzanie')).toBeChecked();
});