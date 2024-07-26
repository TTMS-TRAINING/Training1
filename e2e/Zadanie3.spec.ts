import { test, expect } from '@playwright/test';

test('Fills in form', async ({ page }) => {
  // Nawigowanie do strony głównej
  await page.goto('https://ttms.pl/');  
  // Sprawdzanie tytułu strony głównej
  await expect(page).toHaveTitle(/IT Services Provider/);

  //Zatwierdzenie polityki prywatności
  await page.getByTestId('uc-accept-all-button').click();

  // Kliknięcie w link "Contact"
  await page.click('#menu-item-2546');
  // Sprawdzanie tytułu strony "Contact"
  await expect(page).toHaveTitle(/Contact us/);
  await page.waitForLoadState('load');
  
  // Wypełnianie pól formularza  
  const nameField = page.locator('input[name="name-value"]');
  await nameField.fill('Lucas');
  
  const surnameField = page.locator('input[name="surname-value"]');  
  await surnameField.fill('Vasquez');

  const phoneField = page.locator('input[name="tel-value"]');  
  await phoneField.fill('1717171717');

  const emailField = page.locator('input[name="email-value"]');  
  await emailField.fill('lucas.vasquez@rm.com');

  const messageField = page.locator('textarea[name="message-value"]');  
  await messageField.fill('Lucasinho Vasquezinho');

    
  // Asercje po wypełnieniu formularza
  await expect(page.locator('input[name="name-value"]')).toHaveValue('Lucas');
  await expect(page.locator('input[name="surname-value"]')).toHaveValue('Vasquez');
  await expect(page.locator('input[name="tel-value"]')).toHaveValue('1717171717');
  await expect(page.locator('input[name="email-value"]')).toHaveValue('lucas.vasquez@rm.com');
  await expect(page.locator('textarea[name="message-value"]')).toHaveValue('Lucasinho Vasquezinho');
});