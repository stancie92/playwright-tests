import {test, expect} from "@playwright/test"


test("Exercise 17: Work with Browser Dialogs", async({page})  => {

    await page.goto("/module-4/exercise-17");

    //Handle Alert
    page.once('dialog',async dialog => {
        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toBe("This is a simple alert message!");

        await dialog.accept();
    })

    await page.getByRole('button', { name: 'Trigger Alert' }).click();

    await expect(page.locator("#dialog-result")).toContainText("Alert was triggered");

    //Handle confirm
    page.once("dialog", async dialog => {
        expect(dialog.type()).toBe("confirm");
        await dialog.dismiss();

    })
    await page.getByRole('button', { name: 'Trigger Confirm' }).click()
    await expect(page.locator("#dialog-result")).toContainText("Confirm dismissed");

    // Handle prompt

    page.once("dialog", async dialog => {
        expect(dialog.type()).toBe("prompt");
        await dialog.accept("Stan");
})
    await page.getByRole('button', { name: 'Trigger Prompt' }).click()
    await expect(page.locator("#dialog-result")).toContainText("Prompt returned: Stan");

})