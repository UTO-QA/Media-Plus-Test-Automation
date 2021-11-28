
import MfaLogin from "../pages/MfaLogin";
import { username, password, timeout, mediaplusUsername, mediaplusRole, mediaplusSite, mediaUploadCopyright, mediaUploadUsePermission } from '../config'
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import MediaUploadPage from "../pages/MediaUploadPage";

// jest.setTimeout(30000);

describe("Example", () => {
    let mfaLogin, loginPage, homePage, mediaUploadPage;

    beforeAll(async () => {
        mfaLogin = new MfaLogin();
        loginPage = new LoginPage();
        homePage = new HomePage();
        mediaUploadPage = new MediaUploadPage();
    });

    it("Should visit MFA login page", async () => {
        await mfaLogin.login(username, password);
        // Have to do the otp entering etc of the MFA process manually. 
        // Not wasting time on MFA as this MFA will not come into picture in the dev
        await mfaLogin.callTodevice();
    });

    it('should make a call', async () => {
        await mfaLogin.proceedLogin();
    });

    it('attempt Media Plus login', async () => {
        await loginPage.login(mediaplusUsername, mediaplusSite, mediaplusRole);
    });

    it('upload a video file', async () => {
        await homePage.clickMedia();
        await homePage.clickNewMedia();
        await mediaUploadPage.chooseFile();
        await page.waitForTimeout(3000);
        await mediaUploadPage.chooseCopyrights(mediaUploadCopyright);
        await mediaUploadPage.chooseReusePermission(mediaUploadUsePermission);
        await mediaUploadPage.clickAccept();
        await mediaUploadPage.clickStartUploadButton();
        await mediaUploadPage.wait(3000);
    });

    it('is upload in progress', async () => {
        await homePage.viewPendingUploads();
        // await homePage.anyPendingUploads("myVideo.mp4.mp4", username);
    });
    
});