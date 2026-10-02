import {test, expect} from "@playwright/test"


test("Exercise 16: Handle Modal Windows", async({page})  => {

    await page.goto("/module-4/exercise-16");

    await page.getByRole('button', { name: 'Open Modal' }).click();

    //Verify if modal is visible

    const modal = page.locator("#simple-modal");

    await expect(modal).toBeVisible();
    await expect(modal).toContainText("Information Modal");

    await page.getByRole('button', { name: 'Close' }).click();

    //Verify modal is hidden
    await expect(modal).toBeHidden();





})