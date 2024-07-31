const { test, expect } = require('@playwright/test');
const { PracticeLocator } = require('../Locators/Practice-Locator');
const { log } = require('console');

exports.PracticeFormSteps = class PracticeFormSteps {
    constructor(page) {
        this.page = page;
        this.locator = new PracticeLocator(page);
    }

    async gotoPracticeForm() {
        await this.page.goto('https://demoqa.com/automation-practice-form', {waitUntil: 'commit'})
    }

    async DOB() {
        const InputMonthYear= 'July 2025';
        const date= '30';

        await this.gotoPracticeForm();
        await this.locator.buttonDOB.click();
        
        //Perulangan untuk memilih bulan dan tahun
        while(true) {
            const currentMonthYear = await this.locator.MonthYear.textContent();

            if (currentMonthYear == InputMonthYear) {
                break;
            }
            await this.locator.buttonNextDP.click();
            
        }
        //Pilih Tanggal dari variabel date
        let tanggal= this.locator.selectDate3.textContent();
        console.log(tanggal);
    }

    async gotoDatepicker() {
        await this.page.goto('https://demoqa.com/date-picker', {waitUntil: 'commit'});
    }

    async datePicker() {
        const inputBulanTahun= 'July 2025';
        
        await this.gotoDatepicker();
        await this.locator.buttonOpenDate.click();

        while(true) {
            const currentBulanTahun = await this.locator.bulanTahun.textContent();
            if (currentBulanTahun == inputBulanTahun) {
                break;
            }
            await this.locator.next.click();
        }

        const date= '30';
        let tanggal= await this.locator.pilihTanggal(date);
        await tanggal.click();
    }
}