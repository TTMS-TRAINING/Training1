import { test, expect } from '@playwright/test';

test('Pole user name', async ({ page }) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForSelector('div#loader', { state: 'hidden' });
    await page.getByPlaceholder('enter name', { exact: true }).fill('Pizza Eater');
});
test('Pole pizza name', async ({ page }) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForSelector('div#loader', { state: 'hidden' });
    await page.getByPlaceholder('enter name', { exact: true }).fill('Monster Pizza');
    });
test('Pole Destiny', async ({ page }) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForSelector('div#loader', { state: 'hidden' });
    await page.getByRole('link', { name: 'Click to practice iframe' }).click();
    await page.keyboard.press('Enter');
    await page.frameLocator('#pact1').getByPlaceholder('Destiny').fill('Pizza is my destiny!');

});