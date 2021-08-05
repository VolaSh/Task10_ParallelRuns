const StartPage = require("./start_page");
const Tab = require("../base_elements/tab");
const Button = require("../base_elements/button");
const SearchField = require("../base_elements/search_field");
const CourseCard = require("../base_elements/course_card");
const ElementTitle = require("../base_elements/element_title");
const Checkbox = require("../base_elements/checkbox");

class MentoringPrograms extends StartPage {
    constructor() {
        super();
    this.htmlCssMentoringProgram =  new CourseCard ($('//div[@class="BigCard_headerCaption__zpa2N"]').$('//div[text() = "HTML CSS Mentoring Program"]'));
    this.htmlCssMentoringProgramTitle = new ElementTitle ('//div[text()="HTML CSS Mentoring Program"]');
    this.expandCategoryOptions = new Button ('//div[text()="SHOW ALL 122 CATEGORIES"]');
    this.categorySearchField = new SearchField ('input[class="uui-input k87x4 _17O7t _2U_E5"]');
    this.softwareTestingCategory = new Checkbox ('//div[text()="Software Testing"]');
    this.selectButton = new Button ('//div[text()="Select"]');
    this.englishLanguage = new Checkbox ('//div[text()="English"]');
    this.softwareTestingIntroductionEngCourse = new CourseCard ($('//div[text()="Software Testing Introduction (ENG)"]'));
    }
};

module.exports = MentoringPrograms;