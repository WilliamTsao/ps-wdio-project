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
        let found = true
        if(this.isLoaded()){
            let itemNames = $$(uimap.itemNames(itemInspector.getType()))
            console.log(`Number of ${itemInspector.getType()} in Center Pane: ${itemNames.length}`)
            let item = itemNames.find((ele)=>{
                console.log(`looking for: ${itemName}; current ele name: ${ele.getText()}`)
                return ele.getText() === itemName
            })
            if(item){
                console.log(`Selecting ${itemName}...`)
                item.click()
            }else{
                console.log(`A ${itemInspector.getType()} named ${itemName} was not found`)
                found = false
            }
        }
        return found && itemInspector.isLoaded(itemName)
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