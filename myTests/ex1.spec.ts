import {test, expect} from "@playwright/test"

test("Excercise 1", async({page}) => {
    await page.goto("/module-2/exercise-1");

    await page.getByTestId('username-input').fill("admin");
    await page.getByTestId('password-input').fill("admin123");

    await page.getByTestId('login-button').click();

    const successMessage = page.locator("#welcome-message");
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText("You have successfully logged in.");
    
})