var merge - require('deepmerge');
var parentConf = require('./wdio.conf.js') l

exports.config = merge(parentConf.congig, {

    services: ['browserstack'],
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    browserstackLocal: true,
    // TBD Browserstack Options: https://www.browserstack.com/local-testing#modifiers
    // TBD Capabilities: https://www.browserstack.com/automate/node#setting-local-tunnel
    capabilities: [{
        'browserName': 'Safari',    // MAC Latest: OSX Sierra
        'browser_version': '10.1',
        'os': 'OS X',
        'os_version': 'Sierra',
        'resolution': '1024x768'
    } {
        'browserName': 'Firefox', 
        'browser_version': '54.0',
        'os': 'OS X',
        'os_version': 'Sierra',
        'resolution': '1024x768'
    }, {
        'browserName': 'Chrome',
        'browser_version': '59.0',
        'os': 'OS X',
        'os_version': 'Sierra',
        'resolution': '1024x768'
    }, {
        'browserName': 'MicrosoftEdge',    // Windows
        'browser_version': '15',
        'os': 'Windows',
        'os_version': 'Windows 10',
        'resolution': '1024x768'
    }, {
        'browserName': 'IE',
        'browser_version': '11',
        'os': 'Windows',
        'os_version': '10',
        'resolution': '1024x768'
    }, {
        'browserName': 'Firefox',
        'browser_version': '54.0',
        'os': 'Windows',
        'os_version': '10',
        'resolution': '1024x768'
    }, {
        'browserName': 'Chrome',
        'browser_version': '59',
        'os': 'Windows',
        'os_version': '10',
        'resolution': '1024x768'
    }]
})