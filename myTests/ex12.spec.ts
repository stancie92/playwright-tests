import {test, expect} from "@playwright/test"


test("Exercise 12: Validate Order Summary", async({page}) => {

await page.goto("/module-3/exercise-12");

const subtotal = await page.locator("#summary-subtotal").textContent();
const tax = await page.locator("#summary-tax").textContent();
const total = await page.locator("#summary-total").textContent();

const subTotalNum = parseFloat(subtotal?.replace("$", "") || "0");
const taxTotalNum = parseFloat(tax?.replace("$", "") || "0");
const totalNum = parseFloat(total?.replace("$", "") || "0");

expect(taxTotalNum).toBeCloseTo(subTotalNum * 0.1, 2);

expect(totalNum).toBeCloseTo(subTotalNum + taxTotalNum,2);

})