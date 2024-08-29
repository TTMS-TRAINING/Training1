import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    private header: Locator;
    private contactLink: Locator;

    constructor(page:Page){
        super(page);
        this.header = page.locator('h1'); // Definiujemy locator w konstruktorze
        this.contactLink=page.locator('a[href="https://ttms.com/contact/"]'); //Definicja locatora w konstruktorze
    }

    async getHeaderText(){
        return this.header.textContent();
    }

    async clickContactLink(){
        await this.contactLink.first().click();
    }
}