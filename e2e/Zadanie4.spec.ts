import { test, expect } from '@playwright/test';

test('shopping test at saucedemo.com', async ({ page }) => {
  
  await page.goto('https://saucedemo.com/');

  // Login to the website and verify if it was successful
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  //Add one backpack to the basket
  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
  
  // Verify if the item is visible in the basket  
  const itemBackpack = '.cart_item[data-test="inventory-item"]' // Selects the relevant .cart_item element  
  + ' > .cart_quantity[data-test="item-quantity"]:has-text("1")' // Selects the element with the quantity 1 that is a direct child of the previous element.  
  + ' + .cart_item_label #item_4_title_link'; // Selects the element with id="item_4_title_link", which is inside .cart_item_label and directly follows the .cart_quantity element.
  await expect(page.locator(itemBackpack)).toBeVisible();

  // Checkout
  await page.click('#checkout');

  // Fill in required information
  await page.fill('#first-name', 'Luka');
  await page.fill('#last-name', 'Jovic');
  await page.fill('#postal-code', '77-777');
  await page.click('#continue');

  // Verify overview page and finish transaction
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
  await page.click('#finish');

  // Check if the order confirmation element is visible
  const checkoutCompleteContainer = page.locator('#checkout_complete_container');
  await expect(checkoutCompleteContainer).toBeVisible();
  // Check if the header and text are visible
  await expect(checkoutCompleteContainer.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
  await expect(checkoutCompleteContainer.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')).toBeVisible();
  // Check if the "Back Home" button is visible
  await expect(checkoutCompleteContainer.locator('#back-to-products')).toBeVisible();

  // End
});