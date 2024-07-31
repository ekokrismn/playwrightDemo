const { expect } = require('@playwright/test');

exports.WebTablesLocator = class WebTablesLocator {
    constructor(page) {
        this.page = page;
        this.titleh1 = page.locator('h1:has-text("Web Tables")');
        this.buttonAdd = page.getByRole('button', { name: 'Add' })
        this.inputSearch = page.locator('#searchBox');
        this.editButton1 = page.locator('#edit-record-1');
        this.buttonDelete = page.locator('#delete-record-1');
        this.rows = page.locator('rt-table .rt-tbody .rt-tr');
        this.colFirstName = page.locator('#firstName')
        this.colLastName = page.locator('#lastName')
        this.colAge = page.locator('#age');
        this.colEmail = page.locator('#userEmail');
        this.colSalary = page.locator('#salary');
        this.colDepartment = page.locator('#department');
        this.colAction = page.getByText('Action');
        this.buttonNext = page.getByRole('button', { name: 'Next' });
        this.buttonPrev = page.getByRole('button', { name: 'Previous' })
        this.inputPage = page.getByLabel('jump to page');
        this.buttonPageList = page.getByLabel('rows per page'); //button dropdown page
        this.selectList2 = page.locator('select[aria-label="rows per page"]'); //button select dropdown list page
        this.inputFirstName = page.locator('#firstName')
        this.inputLastName = page.locator('#lastName')
        this.inputEmail = page.locator('#userEmail');
        this.inputAge = page.locator('#age');
        this.inputSalary = page.locator('#salary');
        this.inputDepartment = page.locator('#department');
        this.buttonSubmit = page.locator('#submit');
        this.tableBody = page.locator('.rt-tr-group .rt-tr');
        this.tabelRows = page.locator('.rt-tbody .rt-tr-group');
        this.verifikasiCell = page.getByRole('grid').locator('div').filter({ hasText: 'CierraVega39cierra@example.' }).nth(1)
    }

    async selectDropdownOption(optionValue) {
        await this.selectList2.selectOption({ value: optionValue });
        await this.page.waitForTimeout(1000);
      }
}