module.exports = function (chromy) {
    chromy
        .wait("form[action='/computers'] #name")
        .type("form[action='/computers'] #name", "some computer")
        .wait("form[action='/computers'] #introduced")
        .type("form[action='/computers'] #introduced", "2000-02-30")
        .wait("form[action='/computers'] #discontinued")
        .type("form[action='/computers'] #discontinued", "2000-12-25")
        .wait("form[action='/computers'] .actions input[type='submit']")
        .click("form[action='/computers'] .actions input[type='submit']")
        .wait("form[action='/computers'] fieldset .error");
};
