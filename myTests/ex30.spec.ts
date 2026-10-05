import {test, expect} from "@playwright/test"

test.describe("Exercise 30: Build an End-to-End E-Commerce Test", () => {

   test("Complete purchase flow from registration to summary", async ({page}) => {

    //Navigate to E2E scenario
   await page.goto("/module-7/exercise-30");

   //Credentials
   const login = "Stan";
   const password = "Stan123";
   const shipAddress = "Niepolomice";
   const card = "1234455555";

   //1. Registration
   await page.getByTestId("reg-username").fill(`${login}`);
   await page.getByTestId("reg-password").fill(`${password}`);
   await page.getByTestId("reg-submit").click();

   //Verify transation to login
   await expect(page.getByTestId("reg-success-msg")).toBeVisible();
   await expect(page.getByTestId("reg-success-msg")).toContainText("Account created! Please log in.");

   //2. Login
   await page.getByTestId("login-username").fill(`${login}`);
   await page.getByTestId("login-password").fill(`${password}`);
   await page.getByTestId("login-submit").click();

   //3. Shop - Add product to cart
   await expect(page.locator("#e2e-shop")).toBeVisible();
   await page.getByTestId("e2e-add-1").click();

   //4. Cart verification
   await expect(page.locator("#e2e-cart")).toBeVisible();
   await expect(page.getByTestId("cart-item-name")).toHaveText("Playwright Mastery Course");
   await expect(page.getByTestId("cart-item-price")).toHaveText("$199.99");
   await page.getByTestId("checkout-btn").click();

   //5 Checkout details
   await expect(page.locator("#e2e-checkout-form")).toBeVisible();
   await page.getByTestId("checkout-address").fill(`${shipAddress}`);
   await page.getByTestId("checkout-card").fill(`${card}`);
   await page.getByTestId("checkout-submit").click();

   //6. Order confirmation
   await expect(page.locator("#e2e-summary")).toBeVisible();
   const successMessage = page.locator("#e2e-success-message");
   await expect(successMessage).toBeVisible();
   await expect(successMessage).toContainText("Thank you for your purchase.");


   

   })
})