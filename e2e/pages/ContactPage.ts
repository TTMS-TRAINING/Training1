import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ContactPage extends BasePage {
    private name: Locator;
    private surname: Locator;
    private phone: Locator;
    private email: Locator;
    private message: Locator;
    

    constructor(page: Page){
        super(page);
        this.name = page.locator('input[name="name-value"]');
        this.surname = page.locator('input[name="surname-value"]');
        this.phone = page.locator('input[name="tel-value"]');
        this.email = page.locator('input[name="email-value"]');
        this.message = page.locator('textarea[name="message-value"]');
    }

    async fillName(text: string){
       await this.name.fill(text);
    };

    async fillSurname(text: string){
        await this.surname.fill(text);
    };

    async fillPhone(text: string){
        await this.phone.fill(text);
    };

    async fillEmail(text: string){
        await this.email.fill(text);
    };

    async fillMessage(text: string){
        await this.message.fill(text)
    }


    getNameValue(){
        return this.name;
    }

    getSurnameValue(){
        return this.surname;
    }

    getPhoneValue(){
        return this.phone;
    }

    getEmailValue(){
        return this.email;
    }

    getMessageValue(){
        return this.message;
    }


}