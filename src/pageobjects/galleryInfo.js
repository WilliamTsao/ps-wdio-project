'use strict'
let Page = require('./page')
const GalleryInfoUiMap = require('../uimap/galleryInfoMap')
const uimap = new GalleryInfoUiMap()

class GalleryInfo extends Page{

    isLoaded(galleryName){
        return browser.waitUntil(()=>{
            let domLoaded = super.isLoaded(uimap.isLoaded)
            let currentName = this.getName()
            let nameMatches = currentName === galleryName
            if(nameMatches){
                console.log(`Current Name: ${currentName}; Expected Name: ${galleryName}`)
            }
            return domLoaded && nameMatches
        }, 5000, 'Gallery Info is not loaded after 5s')
    }

    delete(galleryName){
        browser.click(uimap.trashCan)
        browser.click(uimap.delete)
        let deleteSuccessful = true
        if(!this.waitForDelete()){
            console.log(`Delete of ${galleryName} was not successful`)
            deleteSuccessful = false
        }
        return deleteSuccessful
    }

    waitForDelete(){
        return browser.waitForVisible(uimap.deleteNotifier)
    }

    getName(){
        let galname = browser.getText(uimap.galleryName.content)
        console.log('Gallery Name: ' + galname)
        return galname
    }

    rename(originalGalleryName, newGalleryName){
        browser.click(uimap.galleryName.form)
        browser.setValue(uimap.galleryName.input, newGalleryName)
        browser.click(uimap.galleryName.checkmark)
        return this.isLoaded(newGalleryName)
    }

    setDescription(description){
        browser.click(uimap.description.tab)
        browser.click(uimap.description.form)
        browser.setValue(uimap.description.input, description)
        browser.click(uimap.description.checkmark)
        if(!this.isLoaded(this.getName())) return false
        let currentDescription = this.getDescription()
        console.log('Description:')
        console.log(`current: ${currentDescription}; expected: ${description}`)
        return currentDescription === description
    }

    getDescription(){
        let description = browser.getText(uimap.description.content)
        console.log(`Gallery Description: ${description}`)
        return description
    }

}

module.exports = new GalleryInfo()
