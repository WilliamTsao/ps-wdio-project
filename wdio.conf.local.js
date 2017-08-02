let merge = require('deepmerge')
let parentConf = require('./wdio.conf.js')

exports.config = merge(parentConf.config, {
    capabilities: [{ browserName: 'chrome' }],
    services: ['selenium-standalone']
})
