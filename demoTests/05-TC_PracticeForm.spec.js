const { test, expect } = require('@playwright/test');
const { PracticeFormSteps } = require('../Resources/Steps/PracticeForm-Steps');
const { AutoCompleteSteps } = require('../Resources/Steps/AutoComplete-Steps');

test('select datepicker', async ({page}) => {
    const demoQA = new PracticeFormSteps(page);
    await demoQA.gotoDatepicker();
    await demoQA.datePicker();
    // await page.waitForTimeout(3000);
})

test('fill auto complete', async ({page}, testInfo) => {
    const demoQA = new AutoCompleteSteps(page);
    await demoQA.gotoAutoComplete();
    await demoQA.ActionFillText();
    await page.waitForTimeout(2000);
    await demoQA.takeScreenshot(testInfo);
});