import {Page, Locator, expect} from "@playwright/test";

export class DropdownPage{
    readonly page: Page;
    readonly standardSelect: Locator;
    readonly standardResult: Locator;
    readonly customDropdown: Locator;
    readonly customOptions: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.standardSelect = page.locator("#standard-dropdown");
        this.standardResult = page.locator("#standard-result")
        this.customDropdown = page.locator("#custom-dropdown-toggle");
        this.customOptions = page.locator(".custom-option");
    }

    async goto(){
        await this.page.goto("/module-4/exercise-13");
    }

    async selectStandardOption(value:string){
        await this.standardSelect.selectOption(value);
    }

    async selectCustomOption(optionText: string){
        await this.customDropdown.click();
        const option = this.customOptions.filter({hasText: optionText});
        await option.click();
    }

    async verifyStandardSelection(value: string){
        await expect(this.standardSelect).toHaveValue(value);
        await expect(this.standardResult).toHaveText(`You selected: ${value}`);
    }

    async verifyCustomSelection(optionText: string){
        await expect(this.customDropdown).toHaveText(optionText);
    }



}