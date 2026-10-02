import {test, expect} from "@playwright/test"

test("Exercise 5: Automate a Search Feature", async({page}) => {

    await page.goto("/module-2/exercise-5");

    const search = page.getByRole('textbox', { name: 'Search products...' });
    const btn = page.getByRole('button', { name: 'Search' });

    // Search product

    await search.fill("coffe");
    await btn.click();

    const productCards = page.locator(".product-item");

    await expect(productCards).toHaveCount(1);
    await expect(productCards.first().locator('.product-name')).toContainText("Coffee Mug");





})

