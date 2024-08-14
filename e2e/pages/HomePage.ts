<<<<<<< Updated upstream
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    private header: Locator;
    private contactLink: Locator;

    constructor(page: Page) {
        super(page);
        this.header = page.locator('h1'); // Definicja locatora w konstruktorze
        this.contactLink = page.locator('#menu-item-2546');
    }

    async getHeaderText() {
        return this.header.textContent();
    }

    async clickContactLink() {
        await this.contactLink.click();
    }
}
=======
// Importuje klasy `Page` i `Locator` z pakietu Playwright, które są potrzebne do interakcji z przeglądarką i elementami na stronie.
import { Page, Locator } from '@playwright/test'

// Importuje klasę `BasePage`, która jest bazową klasą dla stron w aplikacji. `HomePage` będzie dziedziczyć po `BasePage`.
import { BasePage } from './BasePage'

// Definiuje klasę `HomePage`, która reprezentuje stronę główną aplikacji i dziedziczy po `BasePage`.
export class HomePage extends BasePage {
	// Deklaruje prywatne właściwości `header` i `contactLink`, które są typu `Locator`. Służą one do przechowywania selektorów elementów na stronie.
	private header: Locator
	private contactLink: Locator

	// Konstruktor klasy `HomePage`, który przyjmuje obiekt `Page` jako argument.
	constructor(page: Page) {
		// Wywołuje konstruktor klasy `BasePage`, przekazując mu obiekt `Page`, aby zainicjalizować właściwość `page` odziedziczoną po `BasePage`.
		super(page)

		// Inicjalizuje właściwość `header`, przypisując jej lokalizator dla elementu `h1`, co oznacza, że `header` będzie odwoływać się do nagłówka strony.
		this.header = page.locator('h1')

		// Inicjalizuje właściwość `contactLink`, przypisując jej lokalizator dla linku do strony kontaktowej, co oznacza, że `contactLink` będzie odwoływać się do linku kontaktowego na stronie.
		this.contactLink = page.locator('a[href="https://ttms.com/contact/"]').first()
	}

	// Asynchroniczna metoda `getHeaderText`, która zwraca tekst zawartości elementu `header` (nagłówka strony).
	async getHeaderText() {
		return this.header.textContent()
	}

	// Asynchroniczna metoda `clickContactLink`, która klika w element `contactLink`, czyli w link do strony kontaktowej.
	async clickContactLink() {
		await this.contactLink.click()
	}
}
>>>>>>> Stashed changes
