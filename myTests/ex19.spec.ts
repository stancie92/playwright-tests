import {test, expect} from "@playwright/test"
import path from "path";
import fs from "fs";


test("Exercise 19: Upload and Validate a File", async({page})  => {

    await page.goto("/module-4/exercise-19");

    //Create a dummy file for uploading 
    const filePath  = path.join(__dirname, 'test-upload.txt');
    fs.writeFileSync(filePath, "Example file");

    const fileUpload = page.locator("#file-upload");

    // Set the file 
    await fileUpload.setInputFiles(filePath);

    //Click upload
    await page.getByRole('button', { name: 'Upload File' }).click();

    //Verify success message
    const result = page.locator("#upload-success");
    await expect(result).toHaveText("File test-upload.txt was successfully uploaded!");

    fs.unlinkSync(filePath);

})