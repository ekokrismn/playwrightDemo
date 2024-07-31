const { test, expect } = require('@playwright/test');
const { CheckBoxSteps } = require('../Resources/Steps/ChecBox-Steps');

test('Scen 1 - Visit Checkbox Page', async ({page}, testInfo) => {
    const demoQA = new CheckBoxSteps(page);
    await demoQA.gotoCheckboxPage();
    await demoQA.titleCheckbox();
    await demoQA.defaultMenu();
    await demoQA.takeScreenshot(testInfo)
})

test('Scen 2 - Klik Button Arrow', async ({page}, testInfo) => {
    const demoQA = new CheckBoxSteps(page);
    await demoQA.gotoCheckboxPage();
    await demoQA.funcArrow();
    await demoQA.takeScreenshot(testInfo)
})

test('Scen 3 - Klik Button Plus', async ({page}, testInfo) => {
    const demoQA = new CheckBoxSteps(page);
    await demoQA.gotoCheckboxPage();
    await demoQA.funcPlus();
    await demoQA.takeScreenshot(testInfo)
})

test('Scen 4 - Klik Button Minus', async ({page}, testInfo) => {
    const demoQA = new CheckBoxSteps(page);
    await demoQA.gotoCheckboxPage();
    await demoQA.funcMinus();
    await demoQA.takeScreenshot(testInfo)
})

test('Scen 5 - Klik Checkbox Home', async ({page}, testInfo) => {
    const demoQA = new CheckBoxSteps(page);
    await demoQA.gotoCheckboxPage();
    await demoQA.funcHome();
    await demoQA.takeScreenshot(testInfo)
})

test('Scen 6 - Uncheck button Home', async ({page}, testInfo) => {
    const demoQA = new CheckBoxSteps(page);
    await demoQA.gotoCheckboxPage();
    await demoQA.uncheckHome();
    await demoQA.takeScreenshot(testInfo)
})

test('Scen 7 - Klik checkbox desktop', async ({page}, testInfo) => {
    const demoQA = new CheckBoxSteps(page);
    await demoQA.gotoCheckboxPage();
    await demoQA.checkboxDesktop();
    await demoQA.takeScreenshot(testInfo)
})

test('Scen 8 - Klik checkbox Documents', async ({page}, testInfo) => {
    const demoQA = new CheckBoxSteps(page);
    await demoQA.gotoCheckboxPage();
    await demoQA.checkboxDocs();
    await demoQA.takeScreenshot(testInfo)
    
})

test('Scen 9 - Klik checkbox Downloads', async ({page}, testInfo) => {
    const demoQA = new CheckBoxSteps(page);
    await demoQA.gotoCheckboxPage();
    await demoQA.checkboxDownload();
    await demoQA.takeScreenshot(testInfo)
})

test ('Scen 10 - Klik all checkbox', async ({page}, testInfo) => {
    const demoQA = new CheckBoxSteps(page);
    await demoQA.gotoCheckboxPage();
    await demoQA.allCheckbox();
    await demoQA.assertionCheckbox();
    await demoQA.takeScreenshot(testInfo)
})

test('Scen 11 - Uncheck all checkbox', async ({page}, testInfo) => {
    const demoQA = new CheckBoxSteps(page);
    await demoQA.gotoCheckboxPage();
    await demoQA.allCheckbox();
    await demoQA.uncheckAllCheckbox();
    await demoQA.assertionUncheck();
    await demoQA.takeScreenshot(testInfo)
})