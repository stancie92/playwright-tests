import {test, expect} from "@playwright/test"


test("Exercise 29: Test Failed API Responses", async({page, request})  => {

    await page.goto("/module-6/exercise-29");

    //Click the fetch button
    await page.getByRole('button', { name: 'Fetch Data' }).click();

    //Verify the app properly handled the 500 status
    const errorContainer = page.locator("#error-message-container");
    expect(errorContainer).toBeVisible();
    expect(errorContainer).toContainText("Error: Database connection failed");
}
)