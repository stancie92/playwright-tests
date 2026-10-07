import {Page, Locator, expect} from "@playwright/test";

export class DownloadPage{
   readonly page: Page; 
   readonly downloadLink: Locator;


    constructor(page: Page){
        this.page = page;
        this.downloadLink = this.page.getByRole('link', { name: 'Download File', exact: true });
    }

    async goto(){
        await this.page.goto("/module-4/exercise-20");
    }

    async downloadFile(){
        const downloadPromise = this.page.waitForEvent("download");
        await this.downloadLink.click();
        const download = await downloadPromise;

        return download;
    }
}
