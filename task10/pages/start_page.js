const SearchField = require("../base_elements/search_field");
const Tab = require("../base_elements/tab");
const logger = require('../logger/logger.config');

class StartPage {
    
    constructor() {
    this.searchField = new SearchField ('//input[@class="uui-input"]');
    this.startTab = new Tab ('//div[text()="Start"]');
    this.helpTab = new Tab ('//div[text()="Help"]');
    };

    goToPage(url) {
        logger.info(`"${url}" is clicked`);
        browser.url(url);
    };

    getPageTitle(name) {
        logger.info(`The page has "${name}" title`);
        expect(browser).toHaveTitle(name);
    };

    enterValue(element, text) {
        logger.info(`The "${text}" value is entered to "${element}"`);
        element.addValue(text);
    };

    checkValue(element, value) {
        logger.info(`The entered value is "${value}"`);
        expect(element).toHaveValue(value, { ignoreCase: true });
    };

    clickElement(element) {
        logger.info(`Element is clicked`);
        element.click();
    };

    checkElementVisibility(element) {
        logger.info(`Element visibility is checked`);
        const visibility = element.isDisplayed();
        expect(visibility);
    };

    openNewWindow(url) {
        logger.info(`"${url}" is opened`);
        browser.newWindow(url);
    };

    clickButton(buttonName) {
        logger.info(`"${buttonName}" is clicked`);
        browser.keys([buttonName]);
    };

    clickLeftMouseButton(element) {
        logger.info(`Left mouse button is clicked`);
        element.click({ button: 'left' });
    };

    moveToElement(element) {
        logger.info(`Cursor is moved to "${element}"`);
        element.moveTo();
    };

    pause(time) {
        logger.info(`Test execution is paused`);
        browser.pause(time);
    };
   
};

module.exports = StartPage;