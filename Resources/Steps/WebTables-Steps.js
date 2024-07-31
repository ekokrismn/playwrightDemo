const { test, expect } = require('@playwright/test');
const { WebTablesLocator } = require('../Locators/WebTables-Locator');
const RandomGenerator = require('../RegexFill/randomGenerator');
const { log } = require('console');
const generator = new RandomGenerator();


exports.WebTablesSteps = class WebTablesSteps {
    constructor(page) {
        this.page = page;
        this.locator = new WebTablesLocator(page);
        this.rowCounts = ['5', '10', '20', '25', '50', '100'];
    }

    async gotoWebTables() {
        await this.page.goto('https://demoqa.com/webtables', {waitUntill: 'Commit'});
        await expect(this.locator.titleh1).toBeVisible();
    }

    async addListData() {
        // await this.gotoWebTables();
        await this.locator.buttonAdd.click();
        
        const firstName = generator.getRandomFirstName();
        const lastName = generator.getRandomLastName();
        const email = generator.getRandomEmail();
        const umur = generator.getRandomAge();
        const salary = generator.getRandomSalary();
        const department = generator.getRandomDepartment();

        //Action untuk fill form
        await this.locator.colFirstName.fill(firstName);
        await this.locator.colLastName.fill(lastName);
        await this.locator.colEmail.fill(email);
        await this.locator.colAge.fill(umur.toString());
        await this.locator.colSalary.fill(salary.toString());
        await this.locator.colDepartment.fill(department);

        await this.locator.buttonSubmit.click();

        return { firstName, lastName, email, umur, salary, department };
    }
    
    async getTableRowCount() {
        const rowCount = await this.locator.tableBody.count();
        console.log(`Jumlah Baris: ${rowCount}`);
    }

    async selectDropdown(optionValue) {
      await this.locator.selectDropdownOption(optionValue);
    }

    async verifyRowCount(expectedRowCount) {
      const actualRowCount = await this.getTableRowCount();
      console.log(`Expected: ${expectedRowCount}, Received: ${actualRowCount}`);
      expect(actualRowCount).toBe(expectedRowCount);
    }

    async testAllRowCounts() {
      for (const rowCount of this.rowCounts) {
        await this.selectDropdown(rowCount.toString());
        await this.getTableRowCount(rowCount);
      }
    }
   
    async verifikasiOutputData(data) {
      const rows = await this.locator.tabelRows;

      for (let row of await rows.elementHandles()) {
        const cells = await row.$$('.rt-td');
        const rowData = {
          firstName: await cells[0].innerText(),
          lastName: await cells[1].innerText(),
          age: await cells[2].innerText(),
          email: await cells[3].innerText(),
          salary: await cells[4].innerText(),
          department: await cells[5].innerText()
        };
      if (rowData.firstName === data.firstName &&
          rowData.lastName === data.lastName &&
          rowData.age === data.umur.toString() &&
          rowData.email === data.email &&
          rowData.salary === data.salary.toString() &&
          rowData.department === data.department) {
            return true;
        }
      }
      return false;
    }
}