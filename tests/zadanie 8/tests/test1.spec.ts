import { test, expect } from '@playwright/test';
import { SelectorsHub } from '../pages/selectorshub';



test.describe('selectorshub', () => {

    let selectorshub: SelectorsHub;

    test.beforeEach(async ({ page }) => {
        selectorshub = new SelectorsHub(page);
        await selectorshub.navigate();
    });


    test('Zadanie 1', async ({ page }) => {
        //await page.getByPlaceholder('enter name', { exact: true }).click();
        //await page.getByPlaceholder('enter name', { exact: true }).fill('name');
        //await page.getByPlaceholder('Enter pizza name').click();
        //await page.getByPlaceholder('Enter pizza name').fill('havana');

        await selectorshub.fillUsername();

    });

    test('Zadanie 2', async ({ page }) => {

        await selectorshub.selectPizza();

    });

    test('Zadanie 3', async ({ page }) => {
        await selectorshub.selectDestiny();

    });

});