const { expect } = require('@playwright/test');

exports.CheckBoxLocator = class CheckBoxLocator {
    constructor(page) {
        this.page = page;
        this.titleh1 = page.locator('h1:has-text("Check Box")');
        this.homeMenu = page.locator('#tree-node');
        this.openArrowButton = page.getByLabel('Toggle').first();
        this.ResultArrow = page.getByText('DesktopDocumentsDownloads');
        this.buttonPlus = page.locator('button[aria-label="Expand all"]');
        this.ResultPlus = page.getByText('DesktopNotesCommandsDocumentsWorkSpaceReactAngularVeuOfficePublicPrivateClassifi')
        this.buttonMinus = page.locator('button[aria-label="Collapse all"]');
        this.buttonCheckboxHome = page.locator('label').filter({ hasText: 'Home' }).getByRole('img').first();
        this.buttonCheckboxDesktop = page.locator('label').filter({ hasText: 'Desktop' }).getByRole('img').first();
        this.buttonCheckboxDocs = page.locator('label').filter({ hasText: 'Documents' }).getByRole('img').first();
        this.buttonCheckboxDownload = page.locator('label').filter({ hasText: 'Downloads' }).getByRole('img').first();
        this.resultHome = page.locator('#result');
        this.arrowButtonDesktop = page.locator('li').filter({ hasText: /^Desktop$/ }).getByLabel('Toggle');
        this.arrowButtonDocs = page.locator('li').filter({ hasText: /^Documents$/ }).getByLabel('Toggle');
        this.arrowButtonDownload = page.locator('span').filter({ hasText: 'Downloads' }).first();
        this.buttonNotes = page.locator('label').filter({ hasText: 'Notes' });
        this.buttonCommands = page.locator('label').filter({ hasText: 'Commands' });
        this.arrowButtonWorks = page.locator('li').filter({ hasText: /^WorkSpace$/ }).getByLabel('Toggle');
        this.buttonReact = page.locator('label').filter({ hasText: 'React' });
        this.buttonAngular = page.locator('label').filter({ hasText: 'Angular' });
        this.buttonVeu = page.locator('label').filter({ hasText: 'Veu' });
        this.arrowButtonOffice = page.locator('li').filter({ hasText: /^Office$/ }).getByLabel('Toggle');
        this.buttonPublic = page.locator('label').filter({ hasText: 'Public' });
        this.buttonPrivate = page.locator('label').filter({ hasText: 'Private' });
        this.buttonClassified = page.locator('label').filter({ hasText: 'Classified' });
        this.buttonGeneral = page.locator('label').filter({ hasText: 'General' });
        this.arrowButtonDownload = page.locator('li').filter({ hasText: /^Downloads$/ }).getByLabel('Toggle');
        this.buttonWord = page.locator('label').filter({ hasText: 'Word File.doc' })
        this.buttonExcel = page.locator('label').filter({ hasText: 'Excel File.doc' })
    }
}