'use strict'
let Page = require('./page')
const GalleryBrowser = require('./GalleryBrowser')

class LibraryCenterPane extends Page {

    isLoaded() {
        // The default is more than this
        // in this case default means nothing selected
        // True is not 'real'
        return true
    }

    getGalleryBrowser() {
        return GalleryBrowser
    }
}

module.exports = new LibraryCenterPane()