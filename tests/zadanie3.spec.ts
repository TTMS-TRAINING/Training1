import { test, expect } from '@playwright/test';

test('FillingContactInformations', async ({ page }) => {
  await page.goto('https://ttms.com/');
  await page.getByTestId('uc-accept-all-button').click();
  await page.locator('#menu-item-2546').getByRole('link', { name: 'Contact' }).click();
  await page.getByLabel('Name *', { exact: true }).click();
  await page.getByLabel('Name *', { exact: true }).click();
  await page.getByLabel('Name *', { exact: true }).fill('Pawel');
  
  await page.getByLabel('Surname *').click();
  await page.getByLabel('Surname *').fill('Czaplejewicz');
  
  await page.getByLabel('Phone').click();
  await page.getByLabel('Phone').fill('797406326');
  await page.getByLabel('E-mail *').click();
  await page.getByLabel('E-mail *').fill('pawel.czaplejewicz@ttms.pl');
  await page.getByLabel('Message').click();
  await page.getByLabel('Message').fill('Lorem Ipsum');
  await page.getByText('* I consent to the processing').click();

  await expect(page.getByLabel('Name *', { exact: true })).toHaveValue('Pawel');
  await expect(page.getByLabel('Surname *', { exact: true })).toHaveValue('Czaplejewicz');
  await expect(page.getByLabel('Phone', { exact: true })).toHaveValue('797406326');
  await expect(page.getByLabel('E-mail *', { exact: true })).toHaveValue('pawel.czaplejewicz@ttms.pl');
  await expect(page.getByLabel('Message', { exact: true })).toHaveValue('Lorem Ipsum');
  await expect(page.getByText('* I consent to the processing')).toBeChecked();
});