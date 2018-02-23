module.exports = function (chromy, scenario) {
    const clickSelector = scenario.clickSelector;
    const postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]

    if (clickSelector) {
        chromy
            .wait(clickSelector)
            .click(clickSelector);
    }

    if (postInteractionWait) {
        chromy.wait(postInteractionWait);
    }
};
