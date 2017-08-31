'use strict'
let Page = require('./page')
const LeftPane = require('./libraryLeftPane')
const RightPane = require('./libraryRightPane')
const CenterPane = require('./libraryCenterPane')

class LibrisLibrary extends Page {

    open() {
        super.open('mu/libris/images/')
        let isLibrisOpen = this.isLoaded()
        console.log('isLibrisOpen: ' + isLibrisOpen)
        return isLibrisOpen
    }

    isLoaded() {
        return LeftPane.isLoaded()
    }

    getLibraryLeftPane() {
        return LeftPane
    }

    getLibraryRightPane() {
        return RightPane
    }

    getLibraryCenterPane() {
        return CenterPane
    }

}

module.exports = new LibrisLibrary()
