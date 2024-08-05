const { test, expect } = require('playwright/test');
//set the global timeout
test.setTimeout(30000);
//Logg data for different users
const users = {
    standard_user: {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    locked_out_user: {
        username: 'locked_out_user',
        password: 'secret_sauce'
    },
    performance_glitch_user: {
        username: 'performance_glitch_user',
        password: 'secret_sauce'
    }
};


//TEST1: Logg as standard_user in Chrome (Chromium)
    test('Logg as standard_user', async ({ page,bowserName }) => {
        if( bowserName!=='chromium')test.skip();
        await page.goto('https://www.saucedemo.com/');
        await page.fill('input[name="user-name"]', users.standard_user.username);
        await page.fill('input[name="password"]', users.standard_user.password);
        await page.click('input[name="login-button"]');
        //wait for the loaded selector
        await page.waitForSelector('.inventory_list', { timeout: 20000 });
        //check if the user is logg properly
        await expect(page).toHaveURL('/inventory.html', { timeout: 20000 });
    });

//TEST2: Logg as locked_out_user in Firefox 
  test('Logg as locked_out_user', async ({ page, browserName }) => {
        if( browserName!=='firefox')test.skip();
        await page.goto('https://www.saucedemo.com/');
        await page.fill('input[name="user-name"]', users.locked_out_user.username);
        await page.fill('input[name="password"]', users.locked_out_user.password);
        await page.click('input[name="login-button"]');
        //wait for the loaded selector
        await page.waitForSelector('.inventory_list', { timeout: 20000 });
        //check if the user is logg properly
        await expect(page).toHaveURL('/inventory.html', { timeout: 20000 });
        //check if the info about blocked account is appear 
        const errorMessage = await page.textContent('h3[data-test="error"]');
        expect(errorMessage).toContain('Sorry, this user has been locked out.');
    });

//TEST3: Logg as performance_glitch_user in Safari (WebKit)


    test('Logg as performance_glitch_user', async ({ page, browserName }) => {
        if( browserName!=='webkit')test.skip();
        await page.goto('https://www.saucedemo.com/');
        await page.fill('input[name="user-name"]', users.performance_glitch_user.username);
        await page.fill('input[name="password"]', users.performance_glitch_user.password);
        await page.click('input[name="login-button"]');
        //wait for the loaded selector
        await page.waitForSelector('.inventory_list', { timeout: 20000 });
        //check if the user is logg properly despite performance problem
        await expect(page).toHaveURL('/inventory.html', { timeout: 20000 });
    });
