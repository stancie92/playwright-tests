import {test, expect} from "@playwright/test"
import path from "path";
import fs from "fs";
import { AwardIcon } from "lucide-react";



test("Exercise 22: Handle Pop-Up Windows", async({page, context})  => {

    await page.goto("/module-5/exercise-22");

    const popupPromise = context.waitForEvent("page");

    //Trigger popup

    await page.locator("#open-popup-btn").click();

    const popup = await popupPromise;

    await popup.waitForLoadState();

    //interact with popup

    await expect(popup.locator("h2")).toHaveText("Exercise 22: Handle Pop-Up Windows");

    //Wait for close popup

    await popup.close();

    expect(popup.isClosed()).toBeTruthy();



}
)
