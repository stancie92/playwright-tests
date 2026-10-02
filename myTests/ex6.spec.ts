import {test, expect} from "@playwright/test"

test("Exercise 6: Filter Products by Category", async({page}) => {

    await page.goto("/module-3/exercise-6");
   
    const filter = page.getByTestId("category-filter");
    const productCards = page.getByTestId("product-card");
    const productCategory = page.locator(".product-category");

    //Check default filter

    await expect(productCards).toHaveCount(6);

    //Change filter

    await filter.selectOption("Gaming");
    await expect(productCards).toHaveCount(2);

    const countCategory = await productCategory.count();

    for(let x = 0; x < countCategory; x++) {
        await expect(productCategory.nth(x)).toHaveText("Gaming");
    }





})