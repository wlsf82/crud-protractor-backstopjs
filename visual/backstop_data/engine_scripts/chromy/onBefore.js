module.exports = function (chromy, scenario) {
    require("./loadCookies")(chromy, scenario);

    // IGNORE ANY CERT WARNINGS
    chromy.ignoreCertificateErrors();
};
