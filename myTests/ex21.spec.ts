import {test, expect} from "@playwright/test"
import path from "path";
import fs from "fs";



test("Exercise 21: Work with Multiple Tabs", async({page, context})  => {

    await page.goto("/module-5/exercise-21");

    //Start waiting for new page before clicking
    const pagePromise = context.waitForEvent("page");

    //Click link
    await page.getByRole('link', { name: 'Open New Tab' }).click();

    const newPage = await pagePromise;
    await newPage.waitForLoadState();

    //Verify we are on the new page
    await expect(newPage).toHaveTitle(/Playwright/);

    //We can close the new page
    await newPage.close();

    //Original page is still intact
    await expect(page.getByRole('link', { name: 'Open New Tab' })).toBeVisible();

})