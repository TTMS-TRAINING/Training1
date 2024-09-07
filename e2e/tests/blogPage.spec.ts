import {test,expect} from "@playwright/test";
import {BlogPage} from "../pages/BlogPage" 

test.describe('Blog Page Test', () =>{

    test('Filling search and checking buttons', async ({page}) => {

        const blogPage = new BlogPage(page);
        await blogPage.navigateTo('https://www.ttms.com/blog/')
        await blogPage.acceptAllCookies();
       
        await blogPage.fillSearch('Something');
        await blogPage.clickCheckMore();
        await expect(blogPage.getSearchValue()).toHaveValue('Something');
        await expect(blogPage.fieldAEMValue()).toHaveText('AEM (13)');
        await expect(blogPage.fieldAIValue()).toHaveText('AI (2)');
        await expect(blogPage.fieldAzureValue()).toHaveText('Azure (1)');
        await expect(blogPage.fieldBIValue()).toHaveText('Business intelligence (4)');
        await expect(blogPage.fieldHideValue()).toHaveText('Hide');
    })
})