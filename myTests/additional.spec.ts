
import { test, expect } from '@playwright/test';
 
test('Buy a product', async ({ page }) => {
  await page.goto('http://localhost:3000');
 
  await page.locator('#username').fill('testuser');
  await page.locator('#password').fill('password123');
  await page.locator('#login-button').click();
 
  await page.waitForTimeout(3000);
 
  await page.locator('.search-input').fill('Laptop');
  await page.locator('.search-button').click();
 
  await page.waitForTimeout(2000);
 
  await page.locator('.product-card').first().click();
  await page.locator('#add-to-cart').click();
 
  await page.waitForTimeout(2000);
 
  await page.locator('.cart-icon').click();
 
  expect(await page.locator('.cart-item').count()).toBe(1);
});