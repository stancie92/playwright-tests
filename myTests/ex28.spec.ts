import {test, expect} from "@playwright/test"


test("Exercise 28: Intercept and Mock a Network Request", async({page, request})  => {

    //Intercept the API call and provide mock data
    await page.route('/api/products', async route => {
        const mockData = [{
        id: 999,
        name: "Car",
        price: 43399.99,
        stock: 155
        }]

    await route.fulfill({

        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockData)
    })    

    })

    // Navigate to the page that fetches products
    await page.goto("/module-6/exercise-28")

    //Verify the mock data in UI
    const productList = page.locator("#mocked-products-list");
    await expect(productList).toBeVisible();
    await expect(productList).toContainText("Car");
    await expect(productList).toContainText("$43399.99");
})

    