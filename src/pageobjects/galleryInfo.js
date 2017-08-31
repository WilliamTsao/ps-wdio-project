'use strict'
let Page = require('./page')
const GalleryInfoUiMap = require('../uimap/galleryInfoMap')
const uimap = new GalleryInfoUiMap()

class GalleryInfo extends Page{

    isLoaded(galleryName){
        let domLoaded = super.isLoaded(uimap.isLoaded)
        console.log(`DOM is loaded: ${domLoaded}`)
        let nameMatches = super.nameIsCorrect(galleryName, this)
        console.log(`Name is correct: ${nameMatches}`)
        return domLoaded && nameMatches
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

    rename(newGalleryName){
        browser.click(uimap.galleryName.content)
        browser.waitUntil(()=>{
            return this.inputAndCheckmarkVisible(uimap.galleryName)
        })
        browser.setValue(uimap.galleryName.input, newGalleryName)
        browser.click(uimap.galleryName.checkmark)
        return this.isLoaded(newGalleryName)
    }

    inputAndCheckmarkVisible(location){
        let inputIsVisible = $(location.input).isVisible()
        console.log('input is visible: ', inputIsVisible)
        let checkmarkIsVisible = $(location.checkmark).isVisible()
        console.log('checkmark is visible: ', checkmarkIsVisible)
        return inputIsVisible && checkmarkIsVisible
    }

    setDescription(description){
        browser.click(uimap.description.tab)
        let clickEdit = $(uimap.description.emptyP).isVisible() ? $(uimap.description.emptyP):$(uimap.description.content)
        clickEdit.click()
        browser.waitUntil(()=>{
            return this.inputAndCheckmarkVisible(uimap.description)
        })
        browser.setValue(uimap.description.input, description)
        browser.click(uimap.description.checkmark)
        if(!this.isLoaded(this.getName())) return false
        return this.validateDescription(description)
    }

    validateDescription(description){
        let currentDescription = this.getDescription()
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
