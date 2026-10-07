import {test, expect} from "@playwright/test"
import path from "path"
import fs from "fs"
import { DownloadPage } from "./pages/DownloadPage"



test("Exercise 20: Download and Verify a File", async({page}, testInfo)  => {

    const downloadPage = new DownloadPage(page);
    await downloadPage.goto()

    // Wait for download
    const download = await downloadPage.downloadFile();

    //Wait for the download file
    const suggestedFileName = download.suggestedFilename();
    expect(suggestedFileName).toBe("sample-document.txt");

    //Save the download file to a path
    const downloadPath = testInfo.outputPath(suggestedFileName);
    await download.saveAs(downloadPath);
    expect(fs.existsSync(downloadPath)).toBeTruthy();

})
