import {test, expect} from "@playwright/test"

test.describe("Exercise 30: Build an End-to-End E-Commerce Test", () => {

   test("Complete purchase flow from registration to summary", async ({page}) => {

    //Navigate to E2E scenario
   await page.goto("/module-7/exercise-30");

   })
})