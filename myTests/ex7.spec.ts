import {test, expect} from "@playwright/test"

test("Exercise 7: Sort Products by Price", async({page}) => {

    await page.goto("/module-3/exercise-7");

    const selectDropdown = page.getByTestId('sort-select');
    const productPrices = page.locator(".product-price");

    // Sort low to high

    await selectDropdown.selectOption("asc");

    let prices = await productPrices.allTextContents();

    //Strip '$' and convert to numbers

    let numPrices = prices.map(p => parseFloat(p.replace('$','')));

    const isSortedAsc = numPrices.every((value, index, array) => {

    if (index === 0) {
        return true;
    }

    return value >= array[index - 1];
})
   expect(isSortedAsc).toBeTruthy();


//Sort high to low

    await selectDropdown.selectOption("desc");

    prices = await productPrices.allTextContents();

    //Strip '$' and convert to numbers

    numPrices = prices.map(p => parseFloat(p.replace('$','')));

    const isSortedDesc = numPrices.every((value, index, array) => {

    if (index === 0) {
        return true;
    }

    return value <= array[index - 1];
})
   expect(isSortedDesc).toBeTruthy();

})   

