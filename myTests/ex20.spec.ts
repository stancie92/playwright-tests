import {test, expect} from "@playwright/test"
import path from "path";
import fs from "fs";



test("Exercise 20: Download and Verify a File", async({page}, testInfo)  => {

    await page.goto("/module-4/exercise-20");

    // Wait for download
    const downloadPromise = page.waitForEvent("download");

    await page.getByRole('link', { name: 'Download File', exact: true }).click();
    const download = await downloadPromise;

    //Wait for the download file
    const suggestedFileName = download.suggestedFilename();
    expect(suggestedFileName).toBe("sample-document.txt");

    //Save the download file to a path
    const downloadPath = testInfo.outputPath(suggestedFileName);
    await download.saveAs(downloadPath);
    expect(fs.existsSync(downloadPath)).toBeTruthy();

})
