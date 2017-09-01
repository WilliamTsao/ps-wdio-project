let merge = require('deepmerge')
let parentConf = require('./wdio.conf.js')

exports.config = merge(parentConf.config, {
    capabilities: [{ browserName: 'firefox' }],
    services: ['selenium-standalone']
})
