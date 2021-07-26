const StartPage = require('../../pages/start_page');
const HelpPage = require('../../pages/help_page');

describe('tests for mouse/keyboard actions', () => {

    it('should open the "Help" tab using keyboard', () => {
        const pageToTest = new StartPage(); 
        pageToTest.openNewWindow('https://learn.epam.com/start');
        pageToTest.clickElement(pageToTest.startTab.element);
        pageToTest.clickButton(['Tab']);
        pageToTest.clickButton(['Tab']);
        pageToTest.clickButton(['Enter']);
        const pageToTest3 = new HelpPage();
        pageToTest3.checkElementVisibility(pageToTest3.learnInFiveSteps.element);        
    });

    it('should open the "Help" tab using left mouse button', () => {
        const pageToTest = new StartPage();
        pageToTest.clickElement(pageToTest.startTab.element);
        pageToTest.moveToElement(pageToTest.helpTab.element);
        pageToTest.clickLeftMouseButton(pageToTest.helpTab.element);
        const pageToTest3 = new HelpPage();
        pageToTest3.checkElementVisibility(pageToTest3.learnInFiveSteps.element);
    });
});