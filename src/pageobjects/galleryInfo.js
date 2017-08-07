'use strict'
let Page = require('./page')
const GalleryInfoUiMap = require('../uimap/galleryInfoMap')
const uimap = new GalleryInfoUiMap()

class GalleryInfo extends Page{

    isLoaded(galleryName){
        return browser.waitUntil(()=>{
            return super.isLoaded(uimap.isLoaded) && this.getName() === galleryName
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
        let renameSuccessful = true
        if(this.isLoaded(originalGalleryName)){
            browser.moveToObject(uimap.galleryName.form)
            browser.click(uimap.galleryName.edit)
            browser.setValue(uimap.galleryName.input, newGalleryName)
            browser.click(uimap.galleryName.checkmark)
            if(this.isLoaded(newGalleryName)){
                let currentName = this.getName()
                console.log(`Current name is: ${currentName}; Expected to be: ${newGalleryName}`)
                renameSuccessful = currentName === newGalleryName
            }else{
                console.log('Gallary Inspector is not loaded after rename')
                renameSuccessful = false
            }
        }else{
            console.log(`gallery inspector is not loaded for ${originalGalleryName}`)
            renameSuccessful = false
        }
        return renameSuccessful
    }

}

module.exports = new GalleryInfo()
