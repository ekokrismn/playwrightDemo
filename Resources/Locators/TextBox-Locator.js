const { expect } = require('@playwright/test');

exports.TextBoxLocator = class TextBoxLocator {
    constructor(page) {
        this.page = page;
        this.titleText = page.locator('img[src="/images/Toolsqa.jpg"]');
        this.cardElement = page.locator('.card-body h5', { hasText: 'Elements' });
        this.listElement = page.locator('span:has-text("Text Box")');
        this.titleTextbox = page.locator('h1:has-text("Text Box")');
        this.fullName = page.locator('#userName');
        this.email = page.locator('#userEmail');
        this.currentAddress = page.locator('#currentAddress');
        this.permanentAddress = page.locator('#permanentAddress');
        this.submitBtn = page.locator('#submit');
        this.outputSubmit = page.locator('#output');
        this.outputName = page.locator('#name.mb-1');
        this.outputEmail = page.locator('#email.mb-1');
        this.outputCurrentAddress = page.locator('#currentAddress.mb-1');
        this.outputPermanentAddress = page.locator('#permanentAddress.mb-1');
    }
}