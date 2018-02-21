const faker = require("faker");
const helper = require("protractor-helper");

const CreateComputersPage = require("../page-objects/createComputers");

const CommonElementsComponent = require("../components/commonElements");

describe("when accessing the relative URL 'computers/new'", () => {
    const createComputersPage = new CreateComputersPage();

    const commonElements = new CommonElementsComponent();

    beforeEach(() => browser.get(createComputersPage.relativeUrl));

    it("shows an h1 element with text equal to 'Add a computer'", () => {
        const expectedTitle = "Add a computer";

        helper.waitForTextToBePresentInElement(commonElements.title, expectedTitle);
    });

    describe("happy path", () => {
        describe("when providing a random computer name, valid introduced and discontinued dates, and clicking submit", () => {
            it("displays a warning message confirming the computer's successfully creation", () => {
                const randomComputerName = faker.hacker.adjective();
                const introducedDate = "2018-02-01";
                const discontinuedDate = "2016-02-01";
                const successMessage = `Done! Computer ${randomComputerName} has been created`;

                helper.fillFieldWithTextWhenVisible(
                    createComputersPage.form.fields.computerName,
                    randomComputerName
                );
                helper.fillFieldWithTextWhenVisible(
                    createComputersPage.form.fields.introducedDate,
                    introducedDate
                );
                helper.fillFieldWithTextWhenVisible(
                    createComputersPage.form.fields.discontinuedDate,
                    discontinuedDate
                );
                helper.clickWhenClickable(createComputersPage.form.buttons.createThisComputer);

                helper.waitForTextToBePresentInElement(commonElements.warningMessage, successMessage);
            });
        });
    });
});
