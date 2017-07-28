'use strict'
var Page = require('./page')

class LibrisNav extends Page {
    isLoaded() {
        return true
    }
}

module.exports = new LibrisNav()