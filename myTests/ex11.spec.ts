import {test, expect} from "@playwright/test"

test("Exercise 11: Complete the Checkout Process", async({page}) => {

await page.goto("/module-3/exercise-11");

const name = "Stan Cie";

await page.getByRole('textbox', { name: 'Full Name' }).fill(`${name}`);
await page.getByRole('textbox', { name: 'Address' }).fill("123 Main St");
await page.getByRole('textbox', { name: 'City' }).fill("Kraków");
await page.getByRole('textbox', { name: 'ZIP Code' }).fill("32-005");
await page.getByRole('textbox', { name: 'Credit Card Number' }).fill("1234567890");

await page.getByRole('button', { name: 'Place Order' }).click();

const successMsg = page.locator("#order-success");
await expect(successMsg).toBeVisible();
await expect(successMsg).toContainText(`Thank you for your purchase, ${name}!`);




})