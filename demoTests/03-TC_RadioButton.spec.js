const { test, expect} = require('@playwright/test');
const { RadioButtonSteps } = require('../Resources/Steps/RadioButton-Steps');

test('Scen 1 - Visit Halaman radiobutton', async ({page}) => {
    const demoQA = new RadioButtonSteps(page);
    await demoQA.gotoRadiobutton();
    await demoQA.title_radiobutton();
})

test('Scen 2 - Klik radio button yes', async ({page}) => {
    const demoQA = new RadioButtonSteps(page);
    await demoQA.actionYes();
})

test('Scen 3 - Klik radio button Impressive', async ({page}) => {
    const demoQA = new RadioButtonSteps(page);
    await demoQA.actionImpressive();
})

test('Scen 4 - Klik radio button No', async ({page}) => {
    const demoQA = new RadioButtonSteps(page);
    await demoQA.actionNo();
})