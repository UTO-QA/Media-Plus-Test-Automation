import BasePage from "./BasePage";
const expect = require('chai').expect

export default class HomePage extends BasePage{

    url = 'https://mediaplus-qa.asu.edu/help';
    isListviewEnabled = true;

    async visit(){
        await page.goto(url)
        await page.waitForSelector('.NavMenuContainer')
    }

    async clickMedia(){
        await page.waitForSelector('.NavMenuContainer');
        await page.waitForSelector('li[data-menu-id$="media"]');
        await this.click('li[data-menu-id$="media"]');
        await this.wait(5000);
    }

    async clickNewMedia(){
        await page.waitForSelector('button[htmltype="button"]')
        await this.click('button[htmltype="button"]')
        this.isListviewEnabled = true;
        await this.wait(10000);
    }

    async playLRUfile(){
        await page.waitForSelector('tr:last-child > td:last-child button.play')
        await this.click('tr:last-child > td:last-child button.play')
    }

    async ediLRUfile(){
        await page.waitForSelector('tr:last-child > td:last-child button.edit')
        await this.click('tr:last-child > td:last-child button.edit')
    }

    async alterview(){
        await page.waitForSelector('.ViewSwitch button')
        const istableenabled = await page.$$('.TableContainer');
        if(this.isListviewEnabled){
            expect(istableenabled).to.equal(1);
        }else{
            expect(istableenabled).to.equal(0);
        }
    }

    async viewPendingUploads(){
        await page.waitForSelector("#rc-tabs-1-tab-2")
        await this.click('#rc-tabs-1-tab-2')
        await this.wait(5000);
    }

    async anyPendingUploads(fileTitle, username){
        await page.waitForSelector('td[title="'+fileTitle+'"]')
        await page.waitForSelector('td[title="'+username+'"]')
        await this.wait(5000);
    }

}