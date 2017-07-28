'use strict'
var Page = require('./page')
const LeftPaneUiMap = require('../uimap/libraryLeftPaneMap')
const NewCollectionGalleryDialog = require('./newCollectionGalleryDialog')
const Util = require('../util/util')
const uimap = new LeftPaneUiMap()
const util = new Util()

class LibraryLeftPane extends Page {

    isLoaded() {
        return super.isLoaded(uimap.isLoaded)
    }

    newCollection(collectionName, isEmbedded = false, collectionPermission) {
        browser.click(uimap.newCollection)
        NewCollectionGalleryDialog.newCollectionGallery(collectionName, isEmbedded, collectionPermission)
    }

    newGallery(galleryName, isEmbedded = false, galleryPermission) {
        browser.click(uimap.newGallery)
        NewCollectionGalleryDialog.newCollectionGallery(galleryName, isEmbedded, galleryPermission)
    }

    visibleInLeftpane(collectionName) {
        browser.refresh()
        this.isLoaded().should.be.true
        util.waitForLoadingToComplete()

        console.log('Number of items in LeftPane: ' + browser.$$(uimap.topLevelListItems).length)

        var isVisibleInLeftPane = browser.$$(uimap.topLevelListItems).find(function(ele) {
            console.log('collectionName: ' + collectionName + ', ' + ele.getText('a'))
            console.log('Object of Type: ' + typeof ele.getText('a'))
            return ele.getText('a') === collectionName
        })

        console.log('isVisibleInLeftPane: ' + isVisibleInLeftPane)

        if (result) {
            return true
        } else {
            return false
        }
    }

    selectCollectionOrGalleryByName(collectionName) {
        browser.refresh()
        this.isLoaded().should.be.true
        util.waitForLoadingToComplete()
        console.log(browser.$$(uimap.topLevelListItems).length)
        const result = browser.$$(uimap.topLevelListItems).find(function(ele) {
            console.log('collectionName: ' + collectionName + ', ' + ele.getText('a'))
            console.log('Object of Type: ' + typeof ele.getText('a'))
            return ele.getText('a') === collectionName
        })
        console.log('selectCollectionOrGalleryByName: ' + result)
        if (result) {
            result.click()
            return true
        } else {
            return false
        }
    }

    selectLibraryRoot() {
        browser.click(uimap.libraryRoot)
    }

}

module.exports = new LibraryLeftPane()