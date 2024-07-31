const { test, expect } = require('@playwright/test');
const { TextBoxLocator } = require('../Locators/TextBox-Locator');
const { getRandomFirstName, getRandomLastName, getRandomEmail } = require('../RegexFill/randomGenerator');
const RandomGenerator = require('../RegexFill/randomGenerator');
const generator = new RandomGenerator();

exports.TextBoxSteps = class TextBoxSteps {
    constructor(page) {
        this.page = page;
        this.object = new TextBoxLocator(page);
    }

    async gotoTextBoxPage() {
        await this.page.goto('https://demoqa.com/text-box', { waitUntil: 'commit' });
        await expect(this.object.titleTextbox).toBeVisible({ waitUntil: 'commit' });
    }
    
    async fillForm() { 
        await this.gotoTextBoxPage();

        // data yang diisi ke dalam form
        const firtsName = generator.getRandomFirstName();
        const lastName = generator.getRandomLastName();
        const email = generator.getRandomEmail();
        const alamat = 'Testing Alamat'
        const alamatTinggal = 'Testing alamat tempat tinggal'

        await this.object.fullName.fill(`${firtsName} ${lastName}`);
        await this.object.email.fill(email);
        await this.object.currentAddress.fill(alamat);
        await this.object.permanentAddress.fill(alamatTinggal);
        await expect(this.object.submitBtn).toBeVisible();
        await this.object.submitBtn.click();

        // store value untuk verifikasi output
        this.nameValue = `${firtsName} ${lastName}`
        this.emailValue = email
        this.addressValue = alamat
        this.permanentAddressValue = alamatTinggal
    }
    
    async assertionFillForm() {
        await expect(this.object.outputSubmit).toBeVisible();

        const outputNameText = await this.object.outputName.textContent();
        const outputEmailText = await this.object.outputEmail.textContent();
        const outputCurrentAddressText = await this.object.outputCurrentAddress.textContent();
        const outputPermanentAddressText = await this.object.outputPermanentAddress.textContent();

        // action verifikasi ouput
        expect(outputNameText.trim().replace('Name:', '')).toBe(this.nameValue);
        expect(outputEmailText.trim().replace('Email:', '')).toBe(this.emailValue);
        expect(outputCurrentAddressText.trim().replace('Current Address :', '')).toBe(this.addressValue)
        expect(outputPermanentAddressText.trim().replace('Permananet Address :', '')).toBe(this.permanentAddressValue);
    }
}