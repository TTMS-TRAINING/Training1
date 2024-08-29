import { HomePage } from '../pages/homepage';
import { test, expect } from '@playwright/test';

test.describe('Home Page Tests',() => {
    test('Should display the correct header', async ({page})=>{
        const homePage = new HomePage(page);
        await homePage.navigateTo('https://ttms.pl');
        const headerText = await homePage.getHeaderText();
        expect(headerText).toBe('AI-powered IT systems at your fingertips. We are trusted and modern IT partner.');
    });
    
    test('Should navigate to the contact page', async ({page})=>{
        const homePage = new HomePage(page);
        await homePage.navigateTo('https://ttms.pl');
        await homePage.clickContactLink();
        await expect(page).toHaveURL('https://ttms.com/contact/');
    });
});