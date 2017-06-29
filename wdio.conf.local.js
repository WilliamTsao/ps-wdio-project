var merge = require('deepmerge');
var parentConf = require('./wdio.conf.js')

exports.config = merge(parentConf.config, {
    capabilities: [{ browserName: 'chrome' }],
    services: ['selenium-standalone']
})
