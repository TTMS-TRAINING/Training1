import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';


export class ContactPage extends BasePage{
  // Prywatne lokalizatory dla elementów formularza kontaktowego
  private contactForm: Locator;
  private nameInput: Locator;
  private surnameInput: Locator;
  private phoneInput: Locator;
  private emailInput: Locator;
  private messageTextarea: Locator;
 
  // Konstruktor klasy ContactPage
  constructor(page: Page) {
    super(page); // Wywołanie konstruktora klasy bazowej BasePage
    
    // Inicjalizacja lokalizatorów dla elementów formularza kontaktowego
    this.contactForm = page.locator('form#contact-form'); // Lokalizator dla formularza kontaktowego
    this.nameInput = page.getByLabel('Name *', { exact: true }); // Lokalizator dla pola imienia
    this.surnameInput = page.getByLabel('Surname *'); // Lokalizator dla pola nazwiska
    this.phoneInput = page.getByLabel('Phone'); // Lokalizator dla pola telefonu
    this.emailInput = page.getByLabel('E-mail *'); // Lokalizator dla pola e-mail
    this.messageTextarea = page.getByLabel('Message'); // Lokalizator dla pola wiadomości
  }

  // Metoda do nawigacji na stronę kontaktową i akceptacji cookies
  async navigate() {
    await this.page.goto('https://ttms.pl/contact'); // Przechodzi do strony kontaktowej
    await this.acceptCookiesAll(); // Kliknięcie przycisku akceptacji cookies
  }

  // Metoda do wypełnienia formularza kontaktowego danymi użytkownika
  async fillContactForm(name: string, surname: string, phone: string, email: string, message: string) {
    await this.nameInput.fill(name); // Wypełnienie pola imienia
    await this.surnameInput.fill(surname); // Wypełnienie pola nazwiska
    await this.phoneInput.fill(phone); // Wypełnienie pola telefonu
    await this.emailInput.fill(email); // Wypełnienie pola e-mail
    await this.messageTextarea.fill(message); // Wypełnienie pola wiadomości
  }

  // Metoda do weryfikacji, czy wartości w formularzu są zgodne z oczekiwanymi
  async verifyFormValues(name: string, surname: string, phone: string, email: string, message: string) {
    // Sprawdzenie, czy pole imienia zawiera oczekiwaną wartość
    await expect(this.nameInput).toHaveValue(name);
    // Sprawdzenie, czy pole nazwiska zawiera oczekiwaną wartość
    await expect(this.surnameInput).toHaveValue(surname);
    // Sprawdzenie, czy pole telefonu zawiera oczekiwaną wartość
    await expect(this.phoneInput).toHaveValue(phone);
    // Sprawdzenie, czy pole e-mail zawiera oczekiwaną wartość
    await expect(this.emailInput).toHaveValue(email);
    // Sprawdzenie, czy pole wiadomości zawiera oczekiwaną wartość
    await expect(this.messageTextarea).toHaveValue(message);
  }
}