const StartPage = require('../../pages/start_page');

describe('tests with JS', () => {

    it('should click "Log In to get full experience" button', () => {
        const pageToTest = new StartPage();
        pageToTest.goToPage('https://learn.epam.com/start');
        browser.execute(function () {
            document.querySelector("a[class*='welcomeSection_button__2LNO_']").click();
        });
        pageToTest.getPageTitle('Sign In to EPAM');      
    });

    it('should make the "Welcome to Learn" background singled out', () => {
        const pageToTest = new StartPage();
        pageToTest.goToPage('https://learn.epam.com/start');
        pageToTest.pause(500);
        browser.execute(function () {
            document.querySelector("div[class*='welcomeSection_title__2N4L8']").style.background = `#EA2AF4`;
        });
        pageToTest.pause(1000);
    });

});