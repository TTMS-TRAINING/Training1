import { test, expect } from '@playwright/test';
import { SelectorsHub } from '../pages/selectorshub';



test.describe('selectorshub', () => {

    let selectorshub: SelectorsHub;

    test.beforeEach(async ({ page }) => {
        test.setTimeout(120000);
        selectorshub = new SelectorsHub(page);
        await selectorshub.navigate();
    });


    test('Zadanie 1', async ({ page }) => {
        await selectorshub.fillUsername();
    });

    test('Zadanie 2', async ({ page }) => {
        await selectorshub.selectPizza();
    });

    test('Zadanie 3', async ({ page }) => {
        await selectorshub.selectDestiny();
    });

});