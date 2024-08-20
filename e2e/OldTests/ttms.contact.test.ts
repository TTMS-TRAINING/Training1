import { test, expect } from '@playwright/test';
import { before } from 'node:test';

//@before

test.skip('fill contact form ', async ({ page }) => {
  
  //Wejść na stronę TTMS.com do zakładki "kontakt" i wypełnić pola:
  await page.goto('https://ttms.com');

  // TODO Switching language and change labels EN->PL

  await page.getByRole('link', {name: 'Contact'});

  //TODO wait 

  //- Imię
  await page.getByLabel('Name *', { exact: true }).click();
  await page.getByLabel('Name *', { exact: true }).fill('Anna Justyna');
  //- Nazwisko
  await page.getByLabel('Surname *').click();
  await page.getByLabel('Surname *').fill('Rejrat');
  //- Telefon
  await page.getByLabel('Phone').click();
  await page.getByLabel('Phone').fill('123456789');
  //- E-mail
  await page.getByLabel('E-mail *').click();
  await page.getByLabel('E-mail *').fill('anna.rejrat@ttms.pl');
  //- Wiadomość
  await page.getByLabel('Message').click();
  await page.getByLabel('Message').fill('Dzień dobry :)');
  
  // checkbox wyrażam zgodę
  //await page.getByText('* Wyrażam zgodę na').click();
  
  //Pamiętajcie żeby nie klikać przycisku „Wyślij wiadomość” żeby nie spamować skrzynki firmowej TTMS!
  
  //TODO expected results
});

