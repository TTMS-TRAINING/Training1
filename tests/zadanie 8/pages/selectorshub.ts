import { Page, Locator, expect } from '@playwright/test';
import { selectorshubData } from '../../resources/testData';

// Klasa SelectorsHub obsługuje interakcje z elementami na stronie "SelectorsHub XPath Practice Page"
export class SelectorsHub {
    protected page: Page;



    // Lokatory (elementy na stronie, z którymi będziemy wchodzić w interakcję)
    private UserName: Locator;
    private PizzaName: Locator;
    private IframeLink: Locator;
    private DestinyInputField: Locator;
    private Loader: Locator;

    // Konstruktor klasy, inicjalizuje stronę i lokalizuje elementy
    constructor(page: Page) {
        this.page = page;

        // Lokalizowanie pola UserName wewnątrz shadow DOM (gdzie element jest zamknięty w ShadowRoot)
        this.UserName = page.locator('#kils');

        // Lokalizowanie pola PizzaName wewnątrz zagnieżdżonego shadow DOM
        // `locator('#app2')` odnajduje główny element, a następnie szukamy elementu #pizza wewnątrz niego
        this.PizzaName = page.locator('#app2').locator('#pizza');

        // Lokalizowanie linku wewnątrz elementu #userName, który ma rolę linku (role: link)
        // Tutaj wyszukiwany jest link o nazwie 'Click to practice iframe'
        this.IframeLink = page.locator('#userName').getByRole('link', { name: 'Click to practice iframe' });

        // Lokalizowanie pola tekstowego wewnątrz iframe'a za pomocą `frameLocator`
        // `#pact1` to iframe, a `#glaf` to element w tym iframe'ie
        this.DestinyInputField = page.frameLocator('#pact1').locator('#glaf');

        // Lokalizowanie elementu loadera, który pokazuje, że strona się ładuje
        this.Loader = page.locator('div#loader');
    }

    // Metoda do nawigacji na stronę docelową
    async navigate() {
        // Przechodzenie do strony z czekaniem na to, aż strona przestanie ładować się sieciowo
        await this.page.goto('https://selectorshub.com/xpath-practice-page/', { waitUntil: 'networkidle' });

        // Przesunięcie kursora myszy na współrzędne (200, 300) w celu symulowania interakcji użytkownika
        await this.page.mouse.move(200, 300);

        // Oczekiwanie, aż element loadera zniknie (strona zostanie w pełni załadowana)
        await this.Loader.waitFor({ state: 'hidden' });
    }

    // Metoda wypełniająca pole UserName w shadow DOM
    async fillUsername() {
        // Kliknięcie w pole UserName w shadow DOM
        await this.UserName.click();

        // Wypełnienie pola tekstowego wartością pobraną z pliku konfiguracyjnego (danych testowych)
        await this.UserName.fill(selectorshubData.userName);

        // Asercja (sprawdzenie), czy wartość w polu UserName jest poprawna
        await expect(this.UserName).toHaveValue(selectorshubData.userName);
    }

    // Metoda wypełniająca pole PizzaName w zagnieżdżonym shadow DOM
    async selectPizza() {
        // Kliknięcie w pole PizzaName w zagnieżdżonym shadow DOM
        await this.PizzaName.click();

        // Wypełnienie pola tekstowego wartością pobraną z pliku konfiguracyjnego (danych testowych)
        await this.PizzaName.fill(selectorshubData.pizzaName);

        // Asercja (sprawdzenie), czy wartość w polu PizzaName jest poprawna
        await expect(this.PizzaName).toHaveValue(selectorshubData.pizzaName);
    }

    // Metoda wypełniająca pole Destiny wewnątrz iframe
    async selectDestiny() {
        // dodanie timeout do poprawnego działania w trace viewer
        await this.page.waitForTimeout(5000);
        // Kliknięcie w link do iframe z wymuszeniem kliknięcia, nawet jeśli nie jest jeszcze w pełni widoczny
        await this.IframeLink.click({ force: true });

        // Przesunięcie kursora myszy na współrzędne (200, 300) jako symulacja interakcji użytkownika
        await this.page.mouse.move(200, 300);

        // Kliknięcie w pole tekstowe Destiny wewnątrz iframe
        await this.DestinyInputField.click();

        // Wypełnienie pola tekstowego wartością pobraną z pliku konfiguracyjnego (danych testowych)
        await this.DestinyInputField.fill(selectorshubData.destinyInput);

        // Asercja (sprawdzenie), czy wartość w polu DestinyInputField jest poprawna
        await expect(this.DestinyInputField).toHaveValue(selectorshubData.destinyInput);
    }
}