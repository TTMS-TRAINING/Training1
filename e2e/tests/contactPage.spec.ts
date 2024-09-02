import {test,expect} from '@playwright/test';
import { ContactPage} from '../pages/ContactPage'

test.describe('Contact Page Test', () =>{

    test('Filling contact fields', async({page}) => {

        const contactPage = new ContactPage(page);
        await contactPage.navigateTo('https://www.ttms.com/contact/')

        await contactPage.fillName('Adrian');
        await contactPage.fillSurname('Jurczuk');
        await contactPage.fillPhone('111222333');
        await contactPage.fillEmail('testEmail@test.pl')
        await contactPage.fillMessage('Lecz się Kamil, lecz się!')
    
    
        await expect(contactPage.getNameValue()).toHaveValue('Adrian');
        await expect(contactPage.getSurnameValue()).toHaveValue('Jurczuk');
        await expect(contactPage.getPhoneValue()).toHaveValue('111222333');
        await expect(contactPage.getEmailValue()).toHaveValue('testEmail@test.pl');
        await expect(contactPage.getMessageValue()).toHaveValue('Lecz się Kamil, lecz się!');
    
    
    })




} )