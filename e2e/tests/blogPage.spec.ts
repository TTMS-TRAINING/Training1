import { test, expect } from '@playwright/test';
import { BlogPage } from '../pages/BlogPage';
import { BasePage } from '../pages/BasePage';

test.describe('TTMS Blog Search', () => {
  let blogPage: BlogPage;
  let basePage: BasePage;

  test.beforeEach(async ({ page }) => {
    blogPage = new BlogPage(page);
    basePage = new BasePage(page);

    await blogPage.navigateToBlog(); // Navigate to the blog page
    await basePage.acceptCookiesAll();
  });

  test('should find an article using search', async ({ page }) => {
    const searchQuery = 'ChatGPT'; // Replace with the actual search query you want to use
    await blogPage.searchForArticle(searchQuery); // Perform the search

    const firstResultTitle = await blogPage.getFirstSearchResultTitle();
    
    // Verify that the first result title contains the search query
    expect(firstResultTitle).toContain(searchQuery);
  });
});