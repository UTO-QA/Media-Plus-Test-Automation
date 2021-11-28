/*

    These methods are common in all the pages. 
    page object is acessed globally.

*/
export default class BasePage {
    async wait(time){
        page.waitForTimeout(time);
    }

    async getTitle(){
        return await page.title()
    }

    async getURL() {
        return await page.url();
    }

    async typeText(selector, text){
        await page.waitForSelector(selector);
        await page.type(selector, text);
    }

    async click(selector){
        await page.waitForSelector(selector);
        await page.click(selector);
    }
}