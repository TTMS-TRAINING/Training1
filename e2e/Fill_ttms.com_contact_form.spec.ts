import { test, expect } from '@playwright/test';

test('ttms.com Contact form', async ({ page }) => {
  await page.goto('https://ttms.com//');

  // click Contact button
  //await page.getByRole('button', { name: 'Contact' }).click();            // page contains 3 elements named Contact
  await page.click('#menu-item-2546');                                      // ID of the element is used instead

  // fill the form with any test values
  //await page.getByRole('textbox',{ name: 'Name' }).fill('Gdzie');         // Can't be used as both Name and Surname fields are returned
  await page.getByRole('textbox',{ name: 'Name' }).first().fill('Gdzie');
  await page.getByRole('textbox',{ name: 'Surname' }).fill('JestKrzyż');
  await page.getByRole('textbox',{ name: 'Phone' }).fill('666666666');
  await page.getByRole('textbox',{ name: 'E-mail' }).fill('babke@zapinanawiezy.com');
  await page.getByRole('textbox',{ name: 'Message' }).fill('Młody chodź bo Cię ugryzie. Niech ginie!');
  
});  