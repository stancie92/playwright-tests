import {test, expect} from "@playwright/test"


test("Exercise 15: Date Picker", async({page})  => {

    await page.goto("/module-4/exercise-15");

    const datePicker = page.getByRole('textbox', { name: 'Select Appointment Date' });

    //Fill the date

    await datePicker.fill("2026-12-31");
    // The value expected -> YYYY-MM-DD

    //Verify date:
    const result = page.locator("#selected-date-msg");

    await expect(result).toContainText("2026-12-31");



})