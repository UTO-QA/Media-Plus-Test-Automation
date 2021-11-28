import BasePage from "./BasePage";

export default class MfaLogin extends BasePage{

    url = "https://weblogin.asu.edu/cas/login?service=https%3A%2F%2Fweblogin.asu.edu%2Fcgi-bin%2Fcas-login%3Fcallapp%3Dhttps%253A%252F%252Fweblogin.asu.edu%252Fserviceauth%252Foauth2%252Fnative%252Fallow%253Finit%253Dfalse%2526code_challenge_method%253Dplain%2526code_challenge%253Dasu-mediaplus-sso%2526client_id%253Dasu-media-plus-nonprod%2526redirect_uri%253Dhttps%253A%252F%252Fmediaplus-qa.asu.edu%2526grant_type%253Dauthorization_code%2526code_verifier%253Dasu-mediaplus-sso%2526response_type%253Dcode";

    async visit(){
        await page.goto(this.url);
        await page.waitForSelector('#login');
    }

    async login(username, password){
        await this.visit();
        await this.typeText('#username', username);
        await this.typeText('#password', password);
        await this.click('#rememberid');
        await this.click('input[type="submit"]');
    }

    async callTodevice(){
        await this.wait(3000);
        await page.waitForSelector('#login');
    }

    async proceedLogin(){
        await this.wait(5000);
        await page.waitForSelector('#allow-code-grant-form');
        await page.click('#agent-allow')
        await page.waitForSelector('#loginform')
    }
}

