const { expect } = require('@playwright/test');

exports.AutoCompleteLocator = class AutoCompleteLocator {
    constructor(page) {
        this.page = page;
        this.title = page.locator('h1:has-text("Auto Complete")');
        this.inputColor = page.locator('#autoCompleteMultipleInput')
        this.listColor= page.locator('#react-select-2-option-0');
        this.selectedColor = (color) => page.locator(`.css-12jo7m5.auto-complete__multi-value__label:has-text("${color}")`);
    }

}