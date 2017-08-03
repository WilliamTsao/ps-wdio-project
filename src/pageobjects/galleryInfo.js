'use strict'
let Page = require('./page')
const GalleryInfoUiMap = require('../uimap/galleryInfoMap')
const uimap = new GalleryInfoUiMap()

class GalleryInfo extends Page{

    isLoaded(galleryName){
        return browser.waitUntil(()=>{
            return super.isLoaded(uimap.isLoaded) && browser.getText(uimap.galleryName.content) === galleryName
        }, 5000, 'Gallery Info is not loaded after 5s')
    }

    delete(galleryName){
        browser.click(uimap.trashCan)
        browser.click(uimap.delete)
        if(this.waitForDelete()){
            return true
        }else{
            console.log(`Delete of ${galleryName} was not successful`)
            return false
        }

    }

    waitForDelete(){
        return browser.waitForVisible(uimap.deleteNotifier)
    }

    setDescription(description){
        browser.click(uimap.description.tab)
        browser.click(uimap.description.textarea)
        browser.keys(description)
        browser.click(uimap.description.checkmark)
    }

    getDescription(){
        console.log(browser.getText(uimap.description.content))
        return browser.getText(uimap.description.content)
    }

    rename(newgalleryName){
        browser.click(uimap.galleryName.textarea)
        browser.keys(newgalleryName)
        browser.click(uimap.galleryName.checkmark)
    }

    getName(){
        console.log(browser.getText(uimap.galleryName.content))
        return browser.getText(uimap.galleryName.content)
    }
}

module.exports = new GalleryInfo()
