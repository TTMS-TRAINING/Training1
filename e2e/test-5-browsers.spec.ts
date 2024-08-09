import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test.describe.only('Tests on different browsers', () => {

test('test 5-1 - browser-chromium', async ({ page, browserName }) => {
       
    if (browserName !== 'chromium') {
          test.skip();
        }

// go to demo page
await page.goto('https://www.saucedemo.com/');

// fill in the user name field 
await page.fill('input[name="user-name"]', 'standard_user');

// fill in the password field 
await page.fill('input[name="password"]', 'secret_sauce');

// click login button
await page.click('[data-test="login-button"]');

// check visibility of element 
await expect(page.locator('[data-test="title"]')).toHaveText('Products');

page.close();

});

test('test 5-2 - browser-firefox', async ({ page, browserName }) => {
   
    if (browserName !== 'firefox') {
        test.skip();
      }


    // go to demo page
    await page.goto('https://www.saucedemo.com/');
    
    // fill in the user name field 
    await page.fill('input[name="user-name"]', 'standard_user');
    
    // fill in the password field 
    await page.fill('input[name="password"]', 'secret_sauce');
    
    // click login button
    await page.click('[data-test="login-button"]');
    
    // check visibility of element 
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
    
    page.close();

    });

test('test 5-3 - browser-safari', async ({ page, browserName }) => {

        if (browserName !== 'webkit') {
            test.skip();
          }

        // go to demo page
        await page.goto('https://www.saucedemo.com/');
        
        // fill in the user name field 
        await page.fill('input[name="user-name"]', 'performance_glitch_user');
        
        // fill in the password field 
        await page.fill('input[name="password"]', 'secret_sauce');
        
        // click login button
        await page.click('[data-test="login-button"]');
        
        // check visibility of element 
        await expect(page.locator('[data-test="title"]')).toHaveText('Products');

        page.close();
});
        });