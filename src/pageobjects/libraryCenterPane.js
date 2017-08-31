'use strict'
let Page = require('./page')
const GalleryBrowser = require('./GalleryBrowser')

class LibraryCenterPane extends Page {
    
    getGalleryBrowser() {
        return GalleryBrowser
    }
}

module.exports = new LibraryCenterPane()