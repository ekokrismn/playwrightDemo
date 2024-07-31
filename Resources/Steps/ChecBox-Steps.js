const { test, expect } = require('@playwright/test');
const { CheckBoxLocator } = require('../Locators/CheckBox-Locator');

exports.CheckBoxSteps = class CheckBoxSteps {
    constructor(page) {
        this.page = page;
        this.locator = new CheckBoxLocator(page);
    }

    async gotoCheckboxPage() {
        await this.page.goto('https://demoqa.com/checkbox', { waitUntil: 'commit' });
    }

    async titleCheckbox() {
        await expect(this.locator.titleh1).toBeVisible({ waitUntil: 'commit' });
    }

    async defaultMenu() {
        await expect(this.locator.homeMenu).toBeVisible();
    }

    async funcArrow() {
        await this.locator.openArrowButton.click();
        await expect(this.locator.ResultArrow).toBeVisible();
        // await this.openArrowButton.click();
        // await expect(this.ResultArrow).toBeHidden();
    }

    async funcPlus() {
        await this.locator.buttonPlus.click();
        await expect(this.locator.ResultPlus).toBeVisible();

    }

    async funcMinus() {
        await this.funcArrow();
        await this.locator.buttonMinus.click();
        await expect(this.locator.ResultArrow).toBeHidden();

        await this.funcPlus();
        await this.locator.buttonMinus.click();
        await expect(this.locator.ResultPlus).toBeHidden();
    }

    async funcHome() {
        //open arrow terlebih dahulu
        await this.funcArrow();
        //Klik checkbox home
        await this.locator.buttonCheckboxHome.click({waitUntil: 'commit'});
        await expect(this.locator.buttonCheckboxHome).toBeChecked();
        await expect(this.locator.buttonCheckboxDesktop).toBeChecked();
        await expect(this.locator.buttonCheckboxDocs).toBeChecked();
        await expect(this.locator.buttonCheckboxDownload).toBeChecked();
        await expect(this.locator.resultHome).toBeVisible();
    }

    async uncheckHome() {
        //check home terlebih dahulu
        await this.funcHome();
        //uncheck home 
        await this.page.waitForTimeout(1000);
        await this.locator.buttonCheckboxHome.click({waitUntil: 'commit'});
        await expect(this.locator.buttonCheckboxHome).not.toBeChecked();
        await expect(this.locator.buttonCheckboxDesktop).not.toBeChecked();
        await expect(this.locator.buttonCheckboxDocs).not.toBeChecked();
        await expect(this.locator.buttonCheckboxDownload).not.toBeChecked();
        await expect(this.locator.resultHome).toBeHidden();
    }

    async checkboxDesktop() {
        await this.funcArrow();
        await this.locator.buttonCheckboxDesktop.click();
        await expect(this.locator.buttonCheckboxDesktop).toBeChecked();
        await expect(this.locator.resultHome).toBeVisible();
    }

    async checkboxDocs() {
        await this.funcArrow();
        await this.locator.buttonCheckboxDocs.click();
        await expect(this.locator.buttonCheckboxDocs).toBeChecked;
        await expect(this.locator.resultHome).toBeVisible();
    }

    async checkboxDownload() {
        await this.funcArrow();
        await this.locator.buttonCheckboxDownload.click();
        await expect(this.locator.buttonCheckboxDownload).toBeChecked();
        await expect(this.locator.resultHome).toBeVisible();
    }

    async arrowList() {
        await this.funcArrow();
        await this.locator.arrowButtonDesktop.click();
        await this.locator.arrowButtonDocs.click();
        await this.locator.arrowButtonWorks.click();
        await this.locator.arrowButtonOffice.click();
        await this.locator.arrowButtonDownload.click();
    }

    async allCheckbox() {
        await this.arrowList();
        await this.locator.buttonNotes.click();
        await this.locator.buttonCommands.click();
        await this.locator.buttonReact.click();
        await this.locator.buttonAngular.click();
        await this.locator.buttonVeu.click();
        await this.locator.buttonPublic.click();
        await this.locator.buttonPrivate.click();
        await this.locator.buttonClassified.click();
        await this.locator.buttonGeneral.click();
        await this.locator.buttonWord.click();
        await this.locator.buttonExcel.click();
    }

    async uncheckAllCheckbox() {
        await this.locator.buttonNotes.click();
        await this.locator.buttonCommands.click();
        await this.locator.buttonReact.click();
        await this.locator.buttonAngular.click();
        await this.locator.buttonVeu.click();
        await this.locator.buttonPublic.click();
        await this.locator.buttonPrivate.click();
        await this.locator.buttonClassified.click();
        await this.locator.buttonGeneral.click();
        await this.locator.buttonWord.click();
        await this.locator.buttonExcel.click();
    }

    async assertionCheckbox() {
        await expect(this.locator.buttonNotes).toBeChecked();
        await expect(this.locator.buttonCommands).toBeChecked();
        await expect(this.locator.buttonReact).toBeChecked();
        await expect(this.locator.buttonAngular).toBeChecked();
        await expect(this.locator.buttonVeu).toBeChecked();
        await expect(this.locator.buttonPublic).toBeChecked();
        await expect(this.locator.buttonPrivate).toBeChecked();
        await expect(this.locator.buttonClassified).toBeChecked();
        await expect(this.locator.buttonGeneral).toBeChecked();
        await expect(this.locator.buttonWord).toBeChecked();
        await expect(this.locator.buttonExcel).toBeChecked();
        await expect(this.locator.resultHome).toBeVisible();
    }

    async assertionUncheck() {
        await expect(this.locator.buttonNotes).not.toBeChecked();
        await expect(this.locator.buttonCommands).not.toBeChecked();
        await expect(this.locator.buttonReact).not.toBeChecked();
        await expect(this.locator.buttonAngular).not.toBeChecked();
        await expect(this.locator.buttonVeu).not.toBeChecked();
        await expect(this.locator.buttonPublic).not.toBeChecked();
        await expect(this.locator.buttonPrivate).not.toBeChecked();
        await expect(this.locator.buttonClassified).not.toBeChecked();
        await expect(this.locator.buttonGeneral).not.toBeChecked();
        await expect(this.locator.buttonWord).not.toBeChecked();
        await expect(this.locator.buttonExcel).not.toBeChecked();
        await expect(this.locator.resultHome).toBeHidden();
    }

    async takeScreenshot(testInfo) {
        await testInfo.attach("Check Box SS", {
          body: await this.page.screenshot({fullPage: true}),
          contentType: "image/png",
        });
      }
}