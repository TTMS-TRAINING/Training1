// Importuje funkcje `test` i `expect` z pakietu Playwright. `test` służy do definiowania testów, a `expect` do weryfikacji wyników testów.
import { test, expect } from '@playwright/test'

// Importuje klasę `HomePage` z pliku `HomePage.ts`, która reprezentuje stronę główną i zawiera metody do interakcji z nią.
import { HomePage } from '../pages/HomePage'

// Grupa testów dla strony głównej. Wszystkie testy z tej grupy będą dotyczyć strony głównej.
test.describe('Home Page Tests', () => {
	// Definiuje pierwszy test, który sprawdza, czy strona główna wyświetla poprawny nagłówek.
	test('should display the correct header', async ({ page }) => {
		// Tworzy nową instancję klasy `HomePage`, przekazując obiekt `page`, aby móc korzystać z metod klasy `HomePage`.
		const homePage = new HomePage(page)

		// Używa metody `navigateTo` z `HomePage`, aby przejść do strony głównej `https://ttms.pl`.
		await homePage.navigateTo('https://ttms.pl')

		// Używa metody `getHeaderText` z `HomePage`, aby uzyskać tekst nagłówka na stronie.
		const headerText = await homePage.getHeaderText()

		// Sprawdza, czy pobrany tekst nagłówka jest zgodny z oczekiwanym tekstem.
		expect(headerText).toBe('AI-powered IT systems at your fingertips. We are trusted and modern IT partner.')
	})

	// Definiuje drugi test, który sprawdza, czy kliknięcie w link do strony kontaktowej przenosi na odpowiednią stronę.
	test('should navigate to the contact page', async ({ page }) => {
		// Tworzy nową instancję klasy `HomePage`, przekazując obiekt `page`, aby móc korzystać z metod klasy `HomePage`.
		const homePage = new HomePage(page)

		// Używa metody `navigateTo` z `HomePage`, aby przejść do strony głównej `https://ttms.pl`.
		await homePage.navigateTo('https://ttms.pl')

		// Używa metody `clickContactLink` z `HomePage`, aby kliknąć w link do strony kontaktowej.
		await homePage.clickContactLink()

		// Sprawdza, czy URL przeglądarki zmienił się na adres strony kontaktowej po kliknięciu linku.
		await expect(page).toHaveURL('https://ttms.com/contact/')
	})

	test('should navigate to the blog page', async ({ page }) => {
		const homePage = new HomePage(page)
		await homePage.navigateTo('https://ttms.pl')
		await homePage.clickBlogLink()
		await expect(page).toHaveURL('https://ttms.com/blog/')
	})
})
