const { expect } = require('@playwright/test');

exports.RadioButtonLocator = class RadioButtonLocator {
    constructor(page) {
        this.page = page;
        this.titleh1 = page.locator('h1:has-text("Radio Button")');
        this.questionText = page.getByText('Do you like the site?');
        this.buttonYes = page.locator('div').filter({ hasText: /^Yes$/ });
        this.buttonImpressive = page.locator('div').filter({ hasText: /^Impressive$/ })
        this.buttonNo = page.locator('div').filter({ hasText: /^No$/ });
        this.resultYes = page.getByText('You have selected Yes');
        this.resultImpressive = page.getByText('You have selected Impressive')
        this.radioButtonYes = page.locator('#yesRadio');
        this.radioButtonImpressive = page.locator('#impressiveRadio');
        this.radioButtonNo = page.locator('#noRadio');
    }
}