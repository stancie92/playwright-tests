import {test, expect} from "@playwright/test"
import path from "path";
import fs from "fs";




test("Exercise 26: Create Test Data Using an API", async({page, request})  => {

    await page.goto("/module-6/exercise-26");

    //First, use APIREQUESTContext to create new user
    const response = await request.post('/api/users', {
        data: {
            name: 'Stan',
            email: 'example@gmail.com'
        }

    })

    expect(response.ok()).toBeTruthy();

    const userData = await response.json();
    expect(userData.name).toBe('Stan')

    //Now, nawigate to UI and verify
    await page.goto("/module-6/exercise-26");

    const userList = page.locator("#users-list");
    await expect(userList).toBeVisible();

    await expect(userList).toContainText("Stan");
    await expect(userList).toContainText("example@gmail.com");


}
)
