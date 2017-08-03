'use strict'
let Page = require('./page')
const LeftPaneUiMap = require('../uimap/libraryLeftPaneMap')
const NewCollectionGalleryDialog = require('./newCollectionGalleryDialog')
const uimap = new LeftPaneUiMap()

const collectionInfo = require('./collectionInfo')
const galleryInfo = require('./galleryInfo')

class LibraryLeftPane extends Page {

    isLoaded() {
        return super.isLoaded(uimap.isLoaded)
    }

    createNewGallery(galleryName, isEmbedded = false, galleryPermission){
        console.log('Creating new gallery: ' + galleryName)
        browser.click(uimap.newGallery)
        NewCollectionGalleryDialog.newCollectionGallery(galleryName, isEmbedded, galleryPermission)
        let isNewGalleryCreated = this.visibleInLeftpane(galleryName)
        console.log('isNewGalleryCreated: ' + isNewGalleryCreated)
        return isNewGalleryCreated
    }

    createNestecGallery(galleryName, galleryPermission, parent='parent'){
        // isEmbedded should always be true b/c you are creating a nested collection
        let isEmbedded = true
        let parentIsSelected = this.selectCollectionOrGalleryByName(parent)
        if(!parentIsSelected){
            console.log('Cannot create gallery inside '+parent)
            return false
        }
        return this.createNewGallery(galleryName, isEmbedded, galleryPermission)
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
                let eleIsGal = ele.getAttribute('class').split(' ')[0] === 'gal'
                console.log(`eleIsGal: ${eleIsGal}`)
                let currentEleName
                if(eleIsGal){
                    let nameWithItemCount = ele.getText('a')
                    let indexOfItemCount = nameWithItemCount.lastIndexOf(ele.getText('a span'))
                    currentEleName = nameWithItemCount.slice(0, indexOfItemCount)
                }else{
                    currentEleName = ele.getText('a')
                }

                console.log('collectionOrGalleryName: ' + collectionOrGalleryName + ', Actual: ' + currentEleName)
                return currentEleName === collectionOrGalleryName
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

    selectCollectionOrGalleryByName(collectionOrGalleryName, isCollection=true) {
        let elementIsFound = this.visibleInLeftpane(collectionOrGalleryName, true)
        if(elementIsFound){
            if(isCollection){
                return collectionInfo.isLoaded(collectionOrGalleryName)
            }else{
                return galleryInfo.isLoaded(collectionOrGalleryName)
            }
        }else{
            return false
        }
    }

}

module.exports = new LibraryLeftPane()
