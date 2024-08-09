import { test, expect } from '@playwright/test';

test('zadanie3', async ({page})=>{
    await page.goto('https://ttms.com/contact/');
    await page.waitForTimeout(1500);
    await page.getByTestId('uc-accept-all-button').click();
    await page.getByLabel('Name *', { exact: true }).fill('Adrian');
    await page.getByLabel('Surname *').fill('Jurczuk');
    await page.getByLabel('Phone').fill('11335577');
    await page.getByLabel('E-mail *').fill('testemail@mail.pl');
});