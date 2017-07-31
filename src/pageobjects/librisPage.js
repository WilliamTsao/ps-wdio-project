'use strict'
var Page = require('./page')
const LeftPane = require('./libraryLeftPane')
const RightPane = require('./libraryRightPane')

class Libris extends Page {

    open() {
        super.open('mu/libris/images/')
        var isLibrisOpen = this.isLoaded()
        console.log('isLibrisOpen: ' + isLibrisOpen)
        return isLibrisOpen
    }

    isLoaded() {
        return LeftPane.isLoaded() && RightPane.isLoaded()
    }

    getLibraryLeftPane() {
        return LeftPane
    }

    getLibraryRightPane() {
        return RightPane
    }

}

module.exports = new Libris()