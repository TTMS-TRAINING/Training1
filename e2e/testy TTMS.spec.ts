import { test, expect } from '@playwright/test';

test('Going to Contact tab and filling in the form', async({page})=>{
 // Go to the page
 await page.goto('https://ttms.com/');

 // Expect a title "to contain" a substring.
 await expect(page).toHaveTitle(/TTMS/);
 
 // Click the button to go to kontakt
 await page.getByRole('link',{name:'contact'}).first().click();

  // Put in some name
 await page.fill('input[name="name-value"]','Jakies imie');

  // Put in some surname
 await page.fill('input[name="surname-value"]', 'Jakies nazwisko');

  // Put in some phone number
 await page.fill('input[name="tel-value"]','0123456789');

  // Put in some email
 await page.fill('input[name="email-value"]','jakisemail@gmail.com');
 
 // Put is some text 
  await page.fill('textarea[name="message-value"]',' Kakuna Ratata');
});
