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
        let parentIsSelected = this.selectCollectionByName(parent)
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
        let parentIsSelected = this.selectCollectionByName(parent)
        if(!parentIsSelected){
            console.log('Cannot create collection inside '+parent)
            return false
        }
        return this.createNewCollection(collectionName, isEmbedded, collectionPermission)
    }

    visibleInLeftpane(collectionOrGalleryName, click=false) {
        let isVisibleInLeftPane = false
        if (this.isLoaded()) {
            let listOfLeftPaneItems = $$(uimap.topLevelListItems)
            console.log('Number of items in LeftPane: ' + listOfLeftPaneItems.length)

            let collectionOrGallery = this.searchLeftPane(listOfLeftPaneItems, collectionOrGalleryName)

            if (collectionOrGallery) {
                isVisibleInLeftPane = true
                if(click){ collectionOrGallery.click() }
            }
        }
        console.log(collectionOrGalleryName + ' is visible in left pane: ' + isVisibleInLeftPane)
        return isVisibleInLeftPane
    }

    searchLeftPane(itemList, target){
        return itemList.find((ele) => {
            let currentEleName = this.getGalClcName(ele)
            console.log('Looking For: ' + target + ', Current: ' + currentEleName)
            return currentEleName === target
        })
    }

    getGalClcName(ele){
        let eleIsGal = ele.getAttribute('class').split(' ')[0] === 'gal'
        console.log(`eleIsGal: ${eleIsGal}`)
        let currentEleName = eleIsGal ? this.getCleanGalleryName(ele) : ele.getText('a')
        return currentEleName
    }

    selectCollectionByName(collectionName) {
        let elementIsFound = this.visibleInLeftpane(collectionName, true)
        return elementIsFound && collectionInfo.isLoaded(collectionName)
    }

    selectGalleryByName(galleryName) {
        let elementIsFound = this.visibleInLeftpane(galleryName, true)
        return elementIsFound && galleryInfo.isLoaded(galleryName)
    }

    getCleanGalleryName(galleryElement){
        let nameWithItemCount = galleryElement.getText('a')
        let indexOfItemCount = nameWithItemCount.lastIndexOf(galleryElement.getText('a span'))
        let cleanGalName = nameWithItemCount.slice(0, indexOfItemCount)
        console.log(`Clean Gallery Name: ${cleanGalName}`)
        return cleanGalName
    }
    selectRoot(){
        browser.click(uimap.libraryRoot)
        return this.isLoaded()
    }

}

module.exports = new LibraryLeftPane()
