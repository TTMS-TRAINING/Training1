// wypełnić pola w contact ale nie wysyłać
import {Page, Locator, expect} from "@playwright/test";
import { BasePage } from "./BasePage";

export class ContactPage extends BasePage{
   //Opis Obiektu Contact page:
    private name: Locator;
    private surname: Locator;
    private phone: Locator;
    private email: Locator;
    private message: Locator;

    constructor(page:Page){
        super(page);
        this.name= page.locator('input[name="name-value"]');
        this.surname=page.locator('input[name="surname-value"]');
        this.phone=page.locator('input[name="tel-value"]');
        this.email=page.locator('input[name="email-value"]');
        this.message=page.locator('textarea[name="message-value"]');
    }

    async fillName(text: string){
       await this.name.click();
       await this.name.fill(text); 
    }
    async fillSurname(text: string){
        await this.surname.click();
        await this.surname.fill(text); 
     }
     async fillPhone(text: string){
        await this.phone.click();
        await this.phone.fill(text); 
     }
     async fillEmail(text: string){
        await this.email.click();
        await this.email.fill(text); 
     }
     async fillMessege(text: string){
        await this.message.click();
        await this.message.fill(text); 
     }

   getNameFieldValue() {
		return this.name
	}

	getSurnameFieldValue() {
		return this.surname
	}

	getPhoneFieldValue() {
		return this.phone
	}

	getEmailFieldValue() {
		return this.email
	}

	getMessageFieldValue() {
		return this.message
	}
}