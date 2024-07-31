const { test, expect } = require('@playwright/test');
const { RadioButtonLocator } = require('../Locators/RadioButton-Locator');

exports.RadioButtonSteps = class RadioButtonSteps {
    constructor(page) {
        this.page = page;
        this.locator = new RadioButtonLocator(page);
    }

    async gotoRadiobutton() {
        await this.page.goto('https://demoqa.com/radio-button', { waitUntil: 'commit' });
    }

    async title_radiobutton() {
        await expect(this.locator.titleh1).toBeVisible();
        await expect(this.locator.questionText).toBeVisible();
    }

    async actionYes() {
        await this.gotoRadiobutton();
        await this.title_radiobutton();
        await this.locator.buttonYes.click();
        await expect(this.locator.resultYes).toBeVisible();
        await expect(this.locator.radioButtonYes).toBeChecked();
    }

    async actionImpressive() {
        await this.gotoRadiobutton();
        await this.title_radiobutton();
        await this.locator.buttonImpressive.click();
        await expect(this.locator.resultImpressive).toBeVisible();
        await expect(this.locator.radioButtonImpressive).toBeChecked();
    }

    async actionNo() {
        await this.gotoRadiobutton();
        await this.title_radiobutton();
        await this.locator.buttonNo.click();
        await expect(this.locator.radioButtonNo).not.toBeChecked();
    }
}