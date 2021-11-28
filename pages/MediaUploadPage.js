import BasePage from "./BasePage";
import File from 'fs';


export default class MediaUploadPage extends BasePage{

    async chooseFile(){
        await page.waitForSelector("#uploadform");
        await page.waitForSelector('.ant-upload-drag');
        const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            page.click('.ant-upload-drag'),
        ]);
        
        await fileChooser.accept(["C:\\Users\\spapani\\Documents\\GitHub\\Media-Plus-Test-Automation\\images\\myVideo.mp4"]);
    }

    async chooseCopyrights(copyright){
        await page.waitForSelector("#uploadform");
        await this.click('#uploadform_copyright');
        await this.wait(3000);
        await page.waitForSelector('div[title="'+copyright+'"]')
        await this.click('div[title="'+copyright+'"]');
    }

    async chooseReusePermission(permission){
        await page.waitForSelector("#uploadform");
        await this.click('#uploadform_reuse');
        await this.wait(3000);
        await page.waitForSelector('div[title="'+permission+'"]')
        await this.click('div[title="'+permission+'"]');
    }

    async clickAccept(){
        await page.waitForSelector("#uploadform_copyrightFairUse");
        await this.click("#uploadform_copyrightFairUse");
    }

    async clickStartUploadButton(){
        await this.click('button[type="submit"]')
    }
}