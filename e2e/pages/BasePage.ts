import {Page, Locator, expect} from '@playwright/test';

export class BasePage{
    protected page:Page;
    protected acceptAllButton: Locator;

    constructor (page:Page){
        this.page=page;
    }

    async navigateTo(url:string){
        await this.page.goto(url);
    };
    
    async acceptAllCookies(){
        if(this.acceptAllButton) await this.acceptAllButton.click();
    }
}