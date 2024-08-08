import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  // Lokalizator dla linku kontaktowego
  private contactLink: Locator;
  private careerLink: Locator;
  private blogLink: Locator;
  



  // Konstruktor klasy HomePage
  constructor(page: Page) {
    super(page); // Wywołanie konstruktora klasy bazowej
    this.contactLink = page.locator('#menu-item-2546'); // Inicjalizacja lokalizatora dla linku kontaktowego
    this.careerLink = page.locator('#menu-item-7258'); 
    this.blogLink  =page.locator('#menu-item-2544');
    

  }

  // Metoda do nawigacji na stronę główną
  async navigate() {
    await this.page.goto('https://ttms.pl'); // Przechodzi do strony głównej
    await this.acceptCookiesAll(); // Kliknięcie przycisku akceptacji cookies

    // Sprawdzenie, czy URL jest zgodny z oczekiwanym
    await expect(this.page).toHaveURL('https://ttms.com'); // Upewnia się, że URL strony głównej jest poprawny
  }

  // Metoda do kliknięcia linku kontaktowego
  async clickContact() {
    await this.contactLink.click(); // Kliknięcie w link kontaktowy

    // Sprawdzenie, czy URL po kliknięciu linku kontaktowego jest zgodny z oczekiwanym
    await expect(this.page).toHaveURL(/.*contact/); // Upewnia się, że URL zawiera 'contact'
  }

  async clickCareer() {
    await this.careerLink.click();

    // Sprawdzenie, czy URL po kliknięciu linku kontaktowego jest zgodny z oczekiwanym
    await expect(this.page).toHaveURL(/.*career/); 
  }

  async clickBlog() {

    await this.blogLink.click();

    await expect(this.page).toHaveURL(/.*blog/);
  }




}