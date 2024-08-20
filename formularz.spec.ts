import { test, expect } from '@playwright/test';

test('Formularz', async ({ page }) => {
    await page.goto('https://ttms.com/pl/kontakt/');
    await page.getByLabel('Imię *').fill('Michał');
    await page.getByLabel('Nazwisko *').fill('Wróblewski');
    await page.getByLabel('Telefon').fill('555-555-555');
    await page.getByLabel('E-mail *').fill('j@gov.pl');
    await page.getByLabel('Wiadomość').fill('test');
});