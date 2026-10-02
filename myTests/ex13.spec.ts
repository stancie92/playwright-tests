import {test, expect} from "@playwright/test"


test("Exercise 13: Handle Dropdown Lists", async({page}) => {

    await page.goto("/module-4/exercise-13");

    //Standard dropdown

    const standard = page.locator("#standard-dropdown");
    await standard.selectOption("red");

    await expect(standard).toHaveValue("red");
    await expect(page.locator("#standard-result")).toHaveText("You selected: red");
    

    const custom = page.locator("#custom-dropdown-toggle");
    await custom.click();


    const option = page.locator(".custom-option", {hasText: "Option B"});
    await option.click();

    await expect(custom).toHaveText("Option B");

})
