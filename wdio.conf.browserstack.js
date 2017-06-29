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
        'browserName': 'Firefox',
        'browser_version': '46.0',
        'os': 'OS X',
        'os_version': 'Sierra',
        'resolution': '1024x768'
    }, {
        'browserName': 'IE',
        'browser_version': '11.0',
        'os': 'Windows',
        'os_version': '10',
        'resolution': '1024x768'
    }, {
        'browserName': 'Safari',
        'browser_version': '10.0',
        'os': 'OS X',
        'os_version': 'Sierra',
        'resolution': '1024x768'
    }]
})
