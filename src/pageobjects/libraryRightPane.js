'use strict'
var Page = require('./page')
const CollectionInfo = require('../pageobjects/collectionInfo')

class LibraryRightPane extends Page {

    isLoaded() {
        return true
    }

    getCollectionInfo() {
        return CollectionInfo
    }

}

module.exports = new LibraryRightPane()