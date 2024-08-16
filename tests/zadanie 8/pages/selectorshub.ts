import { Page, Locator, expect } from '@playwright/test';
import { selectorshubData } from '../../resources/testData';


export class SelectorsHub {

    protected page: Page;

    private UserName: Locator;
    private PizzaName: Locator;
    private DestinyNameButton: Locator;
    private DestinyInputField: Locator;

    constructor(page: Page) {
        this.page = page;

        // Lokalizowanie pola UserName wewnątrz shadow DOM
        this.UserName = page.locator('#kils');

        // Lokalizowanie pola PizzaName wewnątrz zagnieżdżonego shadow DOM
        this.PizzaName = page.locator('#app2').locator('#pizza');

        // Lokalizowanie przycisku i pola wewnątrz iframe'a
        this.DestinyNameButton = page.locator('#userName').getByRole('link', { name: 'Click to practice iframe' });
        this.DestinyInputField = page.frameLocator('#pact1').locator('#glaf');
    }

    // Nawigacja do strony
    async navigate() {
        await this.page.goto('https://selectorshub.com/xpath-practice-page/');
        await this.page.waitForLoadState('load');
    }

    // Wypełnij pole UserName w shadow DOM
    async fillUsername() {
        await this.UserName.click();
        await this.UserName.fill(selectorshubData.userName); // Użyj wartości z pliku konfiguracyjnego
        await expect(this.UserName).toHaveValue(selectorshubData.userName);
    }

    // Wypełnij pole PizzaName w zagnieżdżonym shadow DOM
    async selectPizza() {
        await this.PizzaName.click();
        await this.PizzaName.fill(selectorshubData.pizzaName); // Użyj wartości z pliku konfiguracyjnego
        await expect(this.PizzaName).toHaveValue(selectorshubData.pizzaName);
    }

    async selectDestiny() {
        await this.DestinyNameButton.click();
        await this.DestinyInputField.click();
        await this.DestinyInputField.fill(selectorshubData.destinyInput); // Użyj wartości z pliku konfiguracyjnego
        await expect(this.DestinyInputField).toHaveValue(selectorshubData.destinyInput);
    }
}