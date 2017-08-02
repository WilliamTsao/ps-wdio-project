'use strict'
let Page = require('./page')
const CollectionInfo = require('../pageobjects/collectionInfo')

class LibraryRightPane extends Page {

    isLoaded() {
        // The default is more than this
        // in this case default means nothing selected
        // True is not 'real'
        return true
    }

    getCollectionInfo() {
        return CollectionInfo
    }

}

module.exports = new LibraryRightPane()