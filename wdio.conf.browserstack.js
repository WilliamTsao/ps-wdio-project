var merge = require('deepmerge')
var parentConf = require('./wdio.conf.js')

exports.config = merge(parentConf.config, {

    services: ['browserstack'],
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    browserstackLocal: true,
    capabilities: [{
        'browserName': 'Safari',    // OSX Sierra
        'browser_version': '10',
        'os': 'OS X',
        'os_version': 'Sierra',
        'resolution': '1024x768',
        'browserstack.debug': true
    }, {
        'browserName': 'Firefox',
        'browser_version': '54.0',
        'os': 'OS X',
        'os_version': 'Sierra',
        'resolution': '1024x768',
        'browserstack.debug': true
    }, {
        'browserName': 'Chrome',
        'browser_version': '59.0',
        'os': 'OS X',
        'os_version': 'Sierra',
        'resolution': '1024x768',
        'browserstack.debug': true
    }, {
        'os': 'Windows',  // Windows 10
        'os_version': '10',
        'browser': 'Edge',
        'browser_version': '15.0',
        'resolution': '1024x768',
        'browserstack.debug': true
    }, {
        'browserName': 'Firefox',
        'browser_version': '54.0',
        'os': 'Windows',
        'os_version': '10',
        'resolution': '1024x768',
        'browserstack.debug': true
    }, {
        'browserName': 'Chrome',
        'browser_version': '59',
        'os': 'Windows',
        'os_version': '10',
        'resolution': '1024x768',
        'browserstack.debug': true
    }]
})