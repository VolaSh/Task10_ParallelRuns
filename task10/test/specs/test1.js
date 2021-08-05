const StartPage = require('../../pages/start_page');
const MentoringPrograms = require('../../pages/mentoring_programs');

describe('a simple test for LEARN portal', () => {
    it('should open the LEARN portal', () => {
        const pageToTest = new StartPage();
        pageToTest.goToPage('https://learn.epam.com/explore?filter=~(sorting~(field~%27RATING~isDescending~true))&tab=catalog');
        pageToTest.getPageTitle('Learn');
    });

    it('should search for mentoring programs', () => {
        const pageToTest = new StartPage(); 
        pageToTest.enterValue(pageToTest.searchField.element, 'Mentoring');
        pageToTest.checkValue(pageToTest.searchField.element, 'mentoring');  
    });

    it('should select one of the available programs', () => {
        const pageToTest = new MentoringPrograms(); 
        pageToTest.clickElement(pageToTest.htmlCssMentoringProgram.element);
        pageToTest.checkElementVisibility(pageToTest.htmlCssMentoringProgramTitle.element);
    });

    it('should filter all Software Testing courses that are available in English', () => {
        const pageToTest = new StartPage(); 
        pageToTest.openNewWindow('https://learn.epam.com/explore?filter=~(sorting~(field~%27RATING~isDescending~true))&tab=catalog');
        const pageToTest2 = new MentoringPrograms(); 
        pageToTest2.clickElement(pageToTest2.expandCategoryOptions.element);
        pageToTest2.enterValue(pageToTest2.categorySearchField.element, 'software');
        pageToTest2.clickElement(pageToTest2.softwareTestingCategory.element);
        pageToTest2.clickElement(pageToTest2.selectButton.element);
        pageToTest2.clickElement(pageToTest2.englishLanguage.element);
        pageToTest2.checkElementVisibility(pageToTest2.softwareTestingIntroductionEngCourse.element);
    });    
});