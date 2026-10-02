import {test, expect} from "@playwright/test"
import path from "path";
import fs from "fs";
import { AwardIcon } from "lucide-react";



test("Exercise 23: Automate an Embedded iframe", async({page, context})  => {

    await page.goto("/module-5/exercise-23");

   //Locate the iframe
   const frameLocator = page.frameLocator("#test-iframe");

   //Interact with elements inside the frame
   await frameLocator.locator("#iframe-btn").click();

   //Verify action inside frame
   await expect(frameLocator.locator("#iframe-success-msg")).toHaveText("Button inside iframe clicked!");


})