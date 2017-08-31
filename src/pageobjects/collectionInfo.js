'use strict'
let Page = require('./page')
const CollectionInfoUiMap = require('../uimap/collectionInfoMap')
const uimap = new CollectionInfoUiMap()

class CollectionInfo extends Page{

    isLoaded(collectionName){
        let domLoaded = super.isLoaded(uimap.isLoaded)
        console.log(`DOM is loaded: ${domLoaded}`)
        let nameMatches = super.nameIsCorrect(collectionName, this)
        console.log(`Name is correct: ${nameMatches}`)
        return domLoaded && nameMatches
    }

    delete(collectionName){
        browser.click(uimap.trashCan)
        if(this.waitForDelete()){
            return true
        }else{
            console.log(`Delete of ${collectionName} was not successful`)
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

    rename(newCollectionName){
        browser.click(uimap.collectionName.textarea)
        browser.keys(newCollectionName)
        browser.click(uimap.collectionName.checkmark)
    }

    getName(){
        console.log(browser.getText(uimap.collectionName.content))
        return browser.getText(uimap.collectionName.content)
    }
}

module.exports = new CollectionInfo()
