module.exports = function (chromy, scenario) {
    const hoverSelector = scenario.hoverSelector;
    const clickSelector = scenario.clickSelector;
    const postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]

    if (hoverSelector) {
        chromy
            .wait(hoverSelector)
            .rect(hoverSelector)
            .result(rect => chromy.mouseMoved(rect.left, rect.top));
    }

    if (clickSelector) {
        chromy
            .wait(clickSelector)
            .click(clickSelector);
    }

    if (postInteractionWait) {
        chromy.wait(postInteractionWait);
    }
};
