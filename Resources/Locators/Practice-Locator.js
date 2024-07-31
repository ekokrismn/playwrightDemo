const { expect } = require('@playwright/test');

exports.PracticeLocator = class PracticeLocator {
    constructor(page) {
        this.page = page;
        this.namaDepan = page.locator('#firstName');
        this.namaBelakang = page.locator('lastName');
        this.email = page.locator('#userEmail');
        this.genderMale = page.locator('#gender-radio-1');
        this.genderFemale = page.locator('#gender-radio-2');
        this.genderOther = page.locator('#gender-radio-3');
        this.mobilePhone = page.locator('#userNumber');
        this.buttonDOB = page.locator('#dateOfBirthInput');
        this.MonthYear = page.locator('xpath=//*[@id="dateOfBirth"]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]');
        // this.selectDate2 = page.locator(`//div[@class="react-datepicker__day react-datepicker__day--008" and text()="8"]`);
        // this.selectDate3 = page.getByLabel('Choose Wednesday, July 10th,')
        // this.selectDate4 = page.getByLabel('div[aria-label^="Choose ${day},"]')
        this.buttonNextDP = page.getByLabel("Next Month");
        this.buttonPrevDP = page.getByLabel("Previous Month");

        this.buttonOpenDate = page.locator('#datePickerMonthYearInput', {waitUntil: 'commit'});
        this.bulanTahun = page.locator('//*[@id="datePickerMonthYear"]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]');
        this.next = page.getByLabel('Next Month');
        this.selectDate = page.getByLabel('Choose Tuesday, July 16th,');
        this.outputTanggal = page.locator('#datePickerMonthYearInput', el => el.value);
    }

    async pilihTanggal(date) {
        return this.page.locator(`#datePickerMonthYear .react-datepicker__day.react-datepicker__day--${date.padStart(3, '0')}:not(.react-datepicker__day--outside-month)`);
    }
}