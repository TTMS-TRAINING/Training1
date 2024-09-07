import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class BlogPage extends BasePage {
    private search: Locator;
    private fieldAEM: Locator;
    private fieldAI: Locator;
    private fieldAzure: Locator;
    private fieldBI: Locator;
    private buttonCheckMore: Locator;
    private buttonHide: Locator

    constructor(page: Page){
        super(page);

        this.search = page.locator('input[name="q"]');
        this.fieldAEM = page.getByRole('link', { name: 'AEM (13)' });
        this.fieldAI = page.getByRole('link', { name: 'AI (2)' });
        this.fieldAzure = page.getByRole('link', { name: 'Azure (1)' });
        this.fieldBI = page.getByRole('link', { name: 'Business intelligence (4)' });
        this.buttonCheckMore = page.getByRole('button', { name: 'Check more' });
        this.buttonHide = page.getByRole('button', { name: 'Hide' });
    }

    async fillSearch(text: string) {
        await this.search.click();
        await this.search.fill(text);
    };

    async clickCheckMore(){

        await this.buttonCheckMore.click();
    }

    fieldAEMValue(){

        return this.fieldAEM;
    };

    fieldAIValue(){

        return this.fieldAI;
    };

    fieldAzureValue(){

        return this.fieldAzure;
    };

    fieldBIValue(){

        return this.fieldBI;
    };

    buttonCheckMoreValue(){

        return this.buttonCheckMore;
    };

    getSearchValue(){

        return this.search;
    }

    fieldHideValue(){
        return this.buttonHide;
    }

}