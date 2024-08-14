<<<<<<< Updated upstream
import { Page, Locator } from '@playwright/test';

export class BasePage {
    protected page: Page;
    private acceptCookies: Locator;

    constructor(page: Page) {
        this.page = page;
          this.acceptCookies = page.getByTestId('uc-accept-all-button'); // Lokalizator przycisku akceptacji cookies
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

     async acceptCookiesAll(){
        await this.acceptCookies.click();
  }
}
=======
// Importuje klasę `Page` z pakietu Playwright, który jest wykorzystywany do interakcji z przeglądarką.
import { Page } from '@playwright/test'

// Definiuje klasę `BasePage`, która będzie bazową klasą dla wszystkich stron w aplikacji.
export class BasePage {
	// Deklaruje właściwość `page`, która jest typu `Page` i będzie przechowywać obiekt strony.
	protected page: Page

	// Konstruktor klasy `BasePage`, który przyjmuje jako argument obiekt `Page` i przypisuje go do właściwości `page`.
	constructor(page: Page) {
		this.page = page
	}

	// Asynchroniczna metoda `navigateTo`, która przyjmuje URL jako argument i nawigować do podanego adresu URL.
	async navigateTo(url: string) {
		// Metoda `goto` z Playwright otwiera stronę o podanym URL w przeglądarce.
		await this.page.goto(url)
	}
}
>>>>>>> Stashed changes
