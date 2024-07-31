const { test, expect } = require('@playwright/test');
const { WebTablesSteps } = require('../Resources/Steps/WebTables-Steps');


test('Scen 1 - Visit Halaman Web Tables', async ({page}) => {
    // const demoQA = new WebTablesSteps(page);
    await demoQA.gotoWebTables();
})

test('Scen 2 - Menghitung setiap baris sesuai dengan row yang diterapkan', async ({page}) => {
    const demoQA = new WebTablesSteps(page);
    await demoQA.gotoWebTables();
    await demoQA.testAllRowCounts();
})

test('Scen 3 - Input form menggunakan valid creds', async ({page}) => {
    const demoQA = new WebTablesSteps(page);
    //add data
    const data = await demoQA.addListData();
    //verify data pada tabel
    const isVerified = await demoQA.verifikasiOutputData(data);
    expect(isVerified).toBe(true);
})

test('Scen 4 - Add Data 7 kali', async ({page}) => {
    const demoQA = new WebTablesSteps(page);
    await demoQA.gotoWebTables();
    for (let i = 0; i < 7; i++) {
        const data = await demoQA.addListData();
        const isVerified = await demoQA.verifikasiOutputData(data);
        expect(isVerified).toBe(true);
    }
    await page.waitForTimeout(5000);
})