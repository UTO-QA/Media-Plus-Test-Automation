import BasePage from "./BasePage";

export default class LoginPage extends BasePage{

    url = 'https://mediaplus-qa.asu.edu/'

    async visit(){
        await page.goto(url)
        // wait for login form
        await page.waitForSelector('#loginform')
    }

    async login(username, site, role){
        // enter username
        await page.waitForSelector('#loginform')
        // await this.typeText("#loginform_username", username);

        // open site dropdown and select site
        await this.click('#loginform_site');
        await this.wait(3000);
        await page.waitForSelector("div[title="+site+"]")
        await this.click("div[title="+site+"]");

        // open role dropdown and select role (commenting it just for now)
        // await this.click('#loginform_role');
        // const [roleDropdown] = await page.$x("//button[contains(., '"+role+"')]");
        // if (roleDropdown) {
        //     await roleDropdown.click();
        // }

        // await this.wait(3000);
        // await page.waitForSelector('button[type="submit"][class="ant-btn ant-btn-primary"]')
        await this.click('button[type="submit"]');
        await Promise.all([
            page.waitForNavigation(), // The promise resolves after navigation has finished
            page.waitForSelector('.NavMenuContainer'), 
        ]);
        
    }
}