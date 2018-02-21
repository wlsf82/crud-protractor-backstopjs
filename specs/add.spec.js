const protractorHelper = require("protractor-helper");

describe("When accessing the relative URL 'computers/new'", () => {
    beforeEach(() => browser.get("computers/new"));

    it("shows an h1 element with text equal to 'Add a computer'", () => {
        const titleElement = element(by.css("#main h1"));
        const expectedTitle = "Add a computer";

        protractorHelper.waitForTextToBePresentInElement(titleElement, expectedTitle);
    });
});
