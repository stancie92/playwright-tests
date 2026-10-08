import {Page, Locator, expect} from "@playwright/test"


export class ShopPage{
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly firstProduct: Locator;
    readonly addProductButton: Locator;
    readonly cartIconButton: Locator;
    readonly cartItem: Locator;

    constructor(page:Page){
        this.page = page;
        this.usernameField = this.page.locator('#username');
        this.passwordField = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');
        this.searchInput = this.page.locator('.search-input');
        this.searchButton = this.page.locator('.search-button');
        this.firstProduct = this.page.locator('.product-card').first();
        this.addProductButton = this.page.locator('#add-to-cart');
        this.cartIconButton = this.page.locator('.cart-icon');
        this.cartItem = this.page.locator('.cart-item');

    }

    async goto(){
        await this.page.goto('http://localhost:3000');
    }

    async login(username: string, password: string){
          await this.usernameField.fill(username);
          await this.passwordField.fill(password);
          await this.loginButton.click();
          
          await expect(this.searchInput).toBeVisible();
    }

    async searchProduct(product: string){
        await this.searchInput.fill(product);
        await this.searchButton.click();

        await expect(this.firstProduct).toBeVisible();
    }

    async addToCart(){
        await this.firstProduct.click();
        await this.addProductButton.click();
        await expect(this.cartIconButton).toBeVisible();
    }

    async openCart(){
        await this.cartIconButton.click();
    }

    async verifyAmountOfProducts(amount: number){
        await expect(this.cartItem).toHaveCount(amount);
    }




    




}


