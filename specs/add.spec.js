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
        describe("when providing valid data and clicking submit", () => {
            it("displays a warning message confirming the computer's successfully creation", () => {
                const validDataForComputerCreation = {
                    computerName: faker.hacker.adjective(),
                    introducedDate: "2018-02-01",
                    discontinuedDate: "2016-02-01"
                };
                const successMessage = `Done! Computer ${validDataForComputerCreation.computerName} has been created`

                createComputersPage.form.fillWithProvidedDataAndSubmit(validDataForComputerCreation);

                helper.waitForTextToBePresentInElement(commonElements.warningMessage, successMessage);
            });
        });
    });

    describe("alternate paths", () => {
        describe("when submitting the form without providing a computer name", () => {
            it("displays the 'Computer name' field in red (meaning error)", () => {
                const emptyComputerData = {
                    computerName: "",
                    introducedDate: "",
                    discontinuedDate: ""
                };

                createComputersPage.form.fillWithProvidedDataAndSubmit(emptyComputerData);

                helper.waitForElementVisibility(createComputersPage.form.fields.error);
            });
        });
    });
});
