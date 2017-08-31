'use strict'
let Page = require('./page')
const GalleryBrowserUiMap = require('../uimap/GalleryBrowserMap')
const uimap = new GalleryBrowserUiMap()

class GalleryBrowser extends Page {
    isLoaded() {
        return browser.waitUntil(()=>{
            return super.isLoaded(uimap.isLoaded) && this.viewNotBusy()
        })
    }

    viewNotBusy(){
        let viewBusy = $(`${uimap.browser} .viewBusy`).isVisible()
        console.log(`"Loading..." is visible: ${viewBusy}`)
        return !viewBusy
    }

    selectItemByName(itemName, itemInspector){
        let found = false
        if(this.isLoaded()){
            let listOfBrowserItems = $$(uimap.itemNames(itemInspector.getType()))
            console.log(`Number of ${itemInspector.getType()} in Center Pane: ${listOfBrowserItems.length}`)

            let item = this.searchInBrowser(listOfBrowserItems, itemName)

            if(item){
                console.log(`Selecting ${itemName}...`)
                item.click()
                found = true
            }else{
                console.log(`A ${itemInspector.getType()} named ${itemName} was not found`)
            }
        }
        return found && itemInspector.isLoaded(itemName)
    }

    searchInBrowser(itemList, target){
        return itemList.find((ele)=>{
            console.log(`looking for: ${target}; current ele name: ${ele.getText()}`)
            return ele.getText() === target
        })
    }


    restoreMediaName(currentInspector, originalName, newName){
        browser.refresh()
        this.selectItemByName(newName, currentInspector).should.be.true
        currentInspector.rename(originalName).should.be.true
    }

    selectImageByName(imgName, imageInfo){
        return this.selectItemByName(imgName, imageInfo)
    }

    selectVideoByName(videoName, videoInfo){
        return this.selectItemByName(videoName, videoInfo)
    }

    selectAudioByName(audioName, audioInfo){
        return this.selectItemByName(audioName, audioInfo)
    }

    selectFileByName(docName, fileInfo){
        return this.selectItemByName(docName, fileInfo)
    }

}

module.exports = new GalleryBrowser()