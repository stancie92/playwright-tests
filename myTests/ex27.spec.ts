import {test, expect} from "@playwright/test"
import path from "path";
import fs from "fs";




test("Exercise 27: Validate an API Response", async({request})  => {


    //Direct API testing without using UI page
    const response = await request.get('/api/products');

    //Validate status code
    expect(response.status()).toBe(200);

    //Validate headers
    const headers = response.headers();
    expect(headers['content-type']).toContain("application/json");
    expect(headers['x-custom-header']).toContain("Playwright-Test");

    //Validate Response Body
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);

    //Check structure of first product
    const firstElement = body[0];
    expect(firstElement).toHaveProperty("id");
    expect(firstElement).toHaveProperty("name");
    expect(firstElement).toHaveProperty("price");
    expect(firstElement).toHaveProperty("stock");

})
