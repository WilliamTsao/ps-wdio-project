'use strict'
let Page = require('./page')
const LeftPaneUiMap = require('../uimap/libraryLeftPaneMap')
const NewCollectionGalleryDialog = require('./newCollectionGalleryDialog')
const uimap = new LeftPaneUiMap()

const collectionInfo = require('./collectionInfo')

class LibraryLeftPane extends Page {

    isLoaded() {
        return super.isLoaded(uimap.isLoaded)
    }

    createNewCollection(collectionName, isEmbedded = false, collectionPermission) {
        console.log('Creating new collection: ' + collectionName)
        browser.click(uimap.newCollection)
        NewCollectionGalleryDialog.newCollectionGallery(collectionName, isEmbedded, collectionPermission)
        let isNewCollectionCreated = this.visibleInLeftpane(collectionName)
        console.log('isNewCollectionCreated: ' + isNewCollectionCreated)
        return isNewCollectionCreated
    }

    createNestecCollection(collectionName, collectionPermission, parent='parent'){
        // isEmbedded should always be true b/c you are creating a nested collection
        let isEmbedded = true
        let parentIsSelected = this.selectCollectionOrGalleryByName(parent)
        if(!parentIsSelected){
            console.log('Cannot create collection inside '+parent)
            return false
        }
        return this.createNewCollection(collectionName, isEmbedded, collectionPermission)
    }

    visibleInLeftpane(collectionOrGalleryName, click=false) {
        let isVisibleInLeftPane = true
        browser.refresh()

        if (this.isLoaded()) {
            console.log('Number of items in LeftPane: ' + browser.$$(uimap.topLevelListItems).length)
            let collectionOrGallery = browser.$$(uimap.topLevelListItems).find(function(ele) {
                console.log('collectionOrGalleryName: ' + collectionOrGalleryName + ', Actual: ' + ele.getText('a'))
                return ele.getText('a') === collectionOrGalleryName
            })
            if (collectionOrGallery) {
                // if click is true, select the found element
                if(click){collectionOrGallery.click()}
            }else{
                isVisibleInLeftPane = false
            }
        }
        console.log('isVisibleInLeftPane: ' + isVisibleInLeftPane)
        return isVisibleInLeftPane
    }

    selectCollectionOrGalleryByName(collectionOrGalleryName) {
        let elementIsFound = this.visibleInLeftpane(collectionOrGalleryName, true)
        if(elementIsFound){
            return collectionInfo.isLoaded(collectionOrGalleryName)
        }else{
            return false
        }
    }

}

module.exports = new LibraryLeftPane()
