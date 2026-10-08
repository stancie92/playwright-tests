
import { test, expect } from '@playwright/test';
import { ShopPage } from './pages/ShopPage';
 
test('Buy a product', async ({ page }) => {

  const shopPage = new ShopPage(page);  
  await shopPage.goto();

  await shopPage.login('testuser', 'password123');
 
  await shopPage.searchProduct("Laptop");

  await shopPage.addToCart();
 
  await shopPage.openCart();
 
  await shopPage.verifyAmountOfProducts(1);
});