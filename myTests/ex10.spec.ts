import {test, expect} from "@playwright/test"

test("Exercise 10: Remove a Product from the Cart", async({page}) => {

await page.goto("/module-3/exercise-10");

const cartItem = page.locator(".cart-item");
const removeBtns = page.getByTestId(/remove-btn-.*/);

await expect(cartItem).toHaveCount(2);

await removeBtns.first().click();
await expect(cartItem).toHaveCount(1);

await removeBtns.first().click();
const emptyCart = page.getByTestId("empty-cart-message");

await expect(emptyCart).toHaveText("Your cart is empty.");

})