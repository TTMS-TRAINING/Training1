import { expect, test } from '@playwright/test';

test.describe('Shadowdom tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://selectorshub.com/xpath-practice-page/');
        await page.waitForSelector('div#loader', {state: 'hidden'});
    });

    test ('user name field', async ({page}) => {
        await page.locator('#kils').fill('Kamila');
        await expect (page.locator('#kils')).toHaveValue('Kamila');
    });

    test ('pizza name field', async ({page}) => {
        await (page.locator('#pizza')).fill('Margarita');
        await expect (page.locator('#pizza')).toHaveValue('Margarita');
    });

    test ('destiny field', async ({page}) => {
        await page.getByRole('link', { name: 'Click to practice iframe inside shadow dom scenario'}).click();
        await page.frameLocator('#pact1').locator('#glaf').fill('I love pizza!');
        await expect(page.frameLocator('#pact1').locator('#glaf')).toHaveValue('I love pizza!');
    });

});