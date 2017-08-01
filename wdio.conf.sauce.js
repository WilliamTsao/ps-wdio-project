var merge = require('deepmerge')
var parentConf = require('./wdio.conf.js')
// Saucelabs has a Platform Generator so you don't have to
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
exports.config = merge(parentConf.config, {

    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    sauceConnect: true,
    capabilities: [{
        'browserName': 'safari', // OSX Sierra
        'platform': 'macOS 10.12',
        'version': '10.0',
        'screenResolution': '1024x768'
    }, {
        'browserName': 'firefox',
        'platform': 'macOS 10.12',
        'version': '54.0',
        'screenResolution': '1024x768',
    }, {
        'browserName': 'chrome',
        'platform': 'macOS 10.12',
        'version': '59.0',
        'screenResolution': '1024x768'
    }, {
        'browserName': 'MicrosoftEdge',
        'platform': 'Windows 10',
        'version': '15.15063',
        'screenResolution': '1024x768'
    }, {
        'browserName': 'chrome',
        'platform': 'Windows 10',
        'version': '59.0',
        'screenResolution': '1024x768'
    }, {
        'browserName': 'firefox',
        'platform': 'Windows 10',
        'version': '54.0',
        'screenResolution': '1024x768'
    }]
})
