import { test, expect } from '@playwright/test';


test('test 1 - zadanie9', async ({page})=>{
    
    const userName = await page.getByPlaceholder('enter name', { exact: true });

    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForSelector('div#loader', {state: 'hidden'});
    await userName.fill('Adrian');

});

test('test 2 - zadanie9', async ({page})=>{
    
    const pizzaName = await page.getByPlaceholder('Enter pizza name');

    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForSelector('div#loader', {state: 'hidden'});
    await pizzaName.fill('Test Pizza');

});

test('test 3 - zadanie9', async ({page})=>{
    
    test.setTimeout(140000);
    
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForSelector('div#loader', {state: 'hidden'});
    await page.getByRole('link', { name: 'Click to practice iframe' }).click();
    await page.keyboard.press('Enter');
    await page.frameLocator('#pact1').getByPlaceholder('Destiny').fill('Destiny Field');

});