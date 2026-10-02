import {test, expect} from "@playwright/test"

test("Exercise 4: Work with Dynamic Elements", async({page}) => {

    await page.goto("/module-2/exercise-4");

    const btn = page.getByTestId('dynamic-button');

    await btn.click();

    const message = page.getByText('Dynamic button clicked!');

    await expect(message).toBeVisible();
    await expect(message).toHaveText("Dynamic button clicked!");


})