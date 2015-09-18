/*exports.config=
{
    seleniumAddress:'http://127.0.0.1:9515/wd/hub',
    specs:["tests/homepage.js"],
    capabilities:
    {
        'browserName':'phantomjs'
    }
};

*/
extend = require("node.extend");
 
var environment = process.env.NODE_ENV || "development";
 
var genericConfig = {
    specs:["tests/homepage.js"]
};
 
var genericCapability = {
    'name': process.env.CI_MESSAGE || 'Ad hoc message',
    'build': process.env.CI_BUILD_NUMBER + ' (' + (process.env.CI_COMMIT_ID || "No comments.").substring(0, 7) + ')',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
};
 
var configurationsByEnvironment = {
    test : extend({
        sauceUser: 'FranRassetto',
        sauceKey: '15db5601-9882-486d-ab2a-b5ef5b156a08',
 
        multiCapabilities: [
            extend({
                'browserName': 'chrome'
            }, genericCapability), extend({
                'browserName': 'firefox'
            }, genericCapability), extend({
                'browserName' : 'internet explorer',
                'platform' : 'Windows 8.1',
                'version' : 11
            }, genericCapability)],
        baseUrl: 'http://127.0.0.1:8080/'
    }, genericConfig),
    development : extend({
            seleniumAddress:'http://127.0.0.1:9515/wd/hub',
            
            capabilities:
        {
            'browserName':'phantomjs',
            'name': "Development Build",
            'build': "N/A"
        },
        verbose: true,
        baseUrl: 'http://127.0.0.1:8080/'
    }, genericConfig)
};
 
exports.config = configurationsByEnvironment[environment];