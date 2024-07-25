test('fill in TTMS contact form', async ({ page }) => {
  await page.goto('https://ttms.com//');

  // Open Contact us form
  await page.getByRole('link', { name: 'Contact us' }).click();
});