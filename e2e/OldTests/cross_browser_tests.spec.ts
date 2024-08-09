import { test, expect } from '@playwright/test';


[
  { browserType: 'Google Chrome', username: 'standard_user', password: 'secret_sauce', expectedURL: 'https://www.saucedemo.com/inventory.html', expectedDataTestValue: 'primary-header', expectedText: 'Swag Labs' },
  { browserType: 'firefox', username: 'locked_out_user', password: 'secret_sauce', expectedURL: 'https://www.saucedemo.com', expectedDataTestValue: 'error', expectedText: 'Epic sadface: Sorry, this user has been locked out.' },
  { browserType: 'webkit', username: 'performance_glitch_user', password: 'secret_sauce', expectedURL: 'https://www.saucedemo.com/inventory.html', expectedDataTestValue: 'primary-header', expectedText: 'Swag Labs' },
].forEach(({ browserType, username, password, expectedURL, expectedDataTestValue, expectedText }) => {


  test(`login ${username}`, async ({ page }, testInfo) => {

    //wykonaj test w odpowiedniej przeglądarce
    if (testInfo.project.name === `${browserType}`) {
      await page.goto('https://www.saucedemo.com/');
      await page.locator('[data-test="username"]').click();
      await page.locator('[data-test="username"]').fill(`${username}`);
      await page.locator('[data-test="password"]').click();
      await page.locator('[data-test="password"]').fill(`${password}`);

      await page.locator('[data-test="login-button"]').click();
      // spr czy jest właściwy link
      await expect(page).toHaveURL(`${expectedURL}`);
      //spr czy jest tooltip/zalogowany user
      await expect(page.locator(`[data-test=${expectedDataTestValue}]`)).toContainText(`${expectedText}`);
    } else {
      test.skip(); // Pomija test, jeśli nie jest to właściwa przeglądarka
    }
  });
});



/*
Utwórz nowy plik cross_browser_tests.spec.js i utwórz w nim 3 nowe testy:
Pierwszy - poprawne logowanie do https://www.saucedemo.com/ na usera "standard_user"
Drugi - logowanie do https://www.saucedemo.com/ na zablokowanego usera "locked_out_user"
Trzeci - logowanie do https://www.saucedemo.com/ na usera "performance_glitch_user"
Edytuj plik "playwright.config.js" tak by testy uruchamiały się na przeglądarkach: chrome, firefox i sarafi
*Dla chętnych:
Edytuj test tak by:
Pierwszy test odpalał sie na Chrome
Drugi na Firefox
Trzeci na Safari
Enjoy!
*/