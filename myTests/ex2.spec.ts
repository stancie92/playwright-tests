import {test, expect} from "@playwright/test"

test("Excercise 2 - incorrect login credentials", async({page}) => {

    await page.goto("/module-2/exercise-2");

    await page.getByRole('button', { name: 'Log In' }).click();
    await expect (page.getByTestId('login-error')).toBeVisible();
    await expect (page.getByTestId('login-error')).toHaveText("Username and password are required.")

    //Scenario B

    await page.locator("#username").fill("wrong");
    await page.getByRole('textbox', { name: 'Password' }).fill("wrong");
    await page.getByRole('button', { name: 'Log In' }).click();

    await expect(page.getByTestId('login-error')).toBeVisible();
    await expect(page.getByTestId('login-error')).toHaveText("Invalid credentials. Please try again.");


} )