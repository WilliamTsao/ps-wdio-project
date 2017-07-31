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

    createNewCollection(collectionName, isEmbedded = false, collectionPermission) {
        console.log('Creating new collection: ' + collectionName) 
        browser.click(uimap.newCollection)
        NewCollectionGalleryDialog.newCollectionGallery(collectionName, isEmbedded, collectionPermission)
        var isNewCollectionCreated = this.visibleInLeftpane(collectionName)
        console.log('isNewCollectionCreated: ' + isNewCollectionCreated)
        return isNewCollectionCreated
    }

    visibleInLeftpane(collectionName) {
        var isVisibleInLeftPane = true
        browser.refresh()

        if (this.isLoaded()) {
            console.log('Number of items in LeftPane: ' + browser.$$(uimap.topLevelListItems).length)
            var collection = browser.$$(uimap.topLevelListItems).find(function(ele) {
                console.log('collectionName: ' + collectionName + ', Actual: ' + ele.getText('a'))
                console.log('Object of Type: ' + typeof ele.getText('a'))
                return ele.getText('a') === collectionName
            })
            if (!collection) {
                isVisibleInLeftPane = false
            }
        }
        console.log('isVisibleInLeftPane: ' + isVisibleInLeftPane)
        return isVisibleInLeftPane
    }

    selectParent(){
        console.log('Selecting parent - of what? Who knows. This is not clear in the test')
        console.log('However I imagine this is somewhat magical and can be explained.')
        return this.selectCollectionOrGalleryByName('parent')
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

}

module.exports = new LibraryLeftPane()