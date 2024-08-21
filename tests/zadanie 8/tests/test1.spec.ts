import { test, expect } from '@playwright/test';
import { SelectorsHub } from '../pages/selectorshub';

test.describe('selectorshub', () => {

    let selectorshub: SelectorsHub;

    // Przykładowa zmienna konfiguracyjna dostępna dla wszystkich testów
    const configData = {
        testTimeout: 120000,
        screenshotPath: 'tests/resources/screenshots',
    };

    test.beforeEach(async ({ page }) => {
        // Ustawienie timeoutu dla testu
        test.setTimeout(configData.testTimeout);

        // Inicjalizacja klasy SelectorsHub
        selectorshub = new SelectorsHub(page);

        // Nawigacja na stronę
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
        await selectorshub.fillUsername();
        await selectorshub.selectPizza();

        // Wykorzystanie ścieżki z configData do zapisu zrzutu ekranu
        await page.screenshot({ path: `${configData.screenshotPath}/fullpage.png`, fullPage: true });
    });

});