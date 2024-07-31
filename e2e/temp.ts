import { test, expect } from '@playwright/test';

// Test na Chrome
test.describe('Tests on Chrome', () => {
  test.use({ browserName: 'chromium' });

  test('test 1', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });
});

// Test na Firefox
test.describe('Tests on Firefox', () => {
  test.use({ browserName: 'firefox' });

  test('test 2', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });
});

// Test na Webkit
test.describe('Tests on Webkit', () => {
  test.use({ browserName: 'webkit' });

  test('test 3', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });
});
