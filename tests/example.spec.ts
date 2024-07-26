import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://ttms.com/');
  await page.waitForSelector('[data-testid="uc-accept-all-button"]');
  await page.getByRole('button', {name: 'Accept All'}).click();
  await page.locator('#menu-item-2546 a').click();
  await page.locator('label [data-name="name-value"] input').fill('')
  await page.locator('label [data-name="name-value"] input').click()
  await page.locator('label [data-name="name-value"] input').fill('Lukasz')
  await page.locator('label [data-name="surname-value"] input').click()
  await page.locator('label [data-name="surname-value"] input').fill('Kowalik')
  await page.locator('label [data-name="tel-value"] input').click()
  await page.locator('label [data-name="tel-value"] input').fill('1234567')
  await page.locator('label [data-name="email-value"] input').click()
  await page.locator('label [data-name="email-value"] input').fill('email@gmail.com')
  await page.locator('span[data-name="message-value"] textarea').click()
  await page.locator('span[data-name="message-value"] textarea').fill('wiadomosc')


});
