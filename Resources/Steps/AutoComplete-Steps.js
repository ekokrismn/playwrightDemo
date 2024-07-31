const { test, expect } = require('@playwright/test');
const { AutoCompleteLocator } = require('../Locators/AutoComplete-Locator');

exports.AutoCompleteSteps = class AutoCompleteSteps {
    constructor(page) {
        this.page = page;
        this.locator = new AutoCompleteLocator(page);
    }

    async gotoAutoComplete() {
        await this.page.goto('https://demoqa.com/auto-complete', { waitUntil: 'commit' });
        // await expect(this.locator.title).toBeVisible({ waitUntil: 'commit' });
    }

    async fillText(colorInput) {
        for (const color of colorInput) {
          // Ketik color di field autocomplete
          await this.locator.inputColor.fill(color);
          await this.page.waitForTimeout(500);
          // Tunggu dan pilih opsi autocomplete
          await this.locator.inputColor.press('Enter');
          
        }
      }

    async verifyAutoCompleteValue(expectedValue) {
        const colorElement = this.locator.selectedColor(expectedValue);
        // Verifikasi bahwa elemen dengan teks yang diharapkan ada dan memiliki teks yang benar
        await expect(colorElement).toBeVisible();
        const textContent = await colorElement.textContent();
        await expect(textContent.trim()).toBe(expectedValue);
    }

    async ActionFillText() {
        const colorInputs = ['Green', 'Red', 'Blue', 'Purple', 'Yellow', 'White'];
        for (const colorInput of colorInputs) {
            await this.fillText([colorInput]);
            await this.verifyAutoCompleteValue(colorInput);
        }
    }

    async takeScreenshot(testInfo) {
        await testInfo.attach("AutoComplete", {
          body: await this.page.screenshot({fullPage: true}),
          contentType: "image/png",
        });
      }
}