const { test, expect } = require('@playwright/test');
const { TextBoxSteps } = require('../Resources/Steps/TextBox-Steps');

test('Fill Form with Random Name', async ({page}) => {
    const demoQA = new TextBoxSteps(page);
    await demoQA.fillForm();
    await demoQA.assertionFillForm();
})

