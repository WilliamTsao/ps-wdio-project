'use strict'
let Page = require('./page')
const GalleryBrowserUiMap = require('../uimap/GalleryBrowserMap')
const uimap = new GalleryBrowserUiMap()

class GalleryBrowser extends Page {

    isLoaded() {
        return super.isLoaded(uimap.isLoaded)
    }
<<<<<<< HEAD

    selectItemByName(itemName, itemType){
        // browser.refresh()
        let found = true
        let itemNames = $$(uimap.itemNames(itemType))
        console.log(`Number of ${itemType} in Center Pane: ${itemNames.length}`)
        let item = itemNames.find((ele)=>{
            console.log(`looking for: ${itemName}; current ele name: ${ele.getText()}`)
            return ele.getText() === itemName
        })
        if(item){
            console.log(`Selecting ${itemName}...`)
            item.click()
        }else{
            console.log(`A ${itemType} named ${itemName} was not found`)
            found = false
=======
    selectItemByName(itemName, itemInspector){
        // browser.refresh()
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
>>>>>>> 9cde989... QA-41 Moved the isLoaded check from select*ByName to selectItemByName. Making latter more usable in specs.
        }
        return found && itemInspector.isLoaded(itemName)
    }

    restoreMediaName(currentInspector, originalName, newName){
        browser.refresh()
        this.selectItemByName(newName, currentInspector).should.be.true
        currentInspector.rename(originalName).should.be.true
    }

    selectImageByName(imgName){
        let imageInfo = require('./imageInfo')
        return this.selectItemByName(imgName, imageInfo)
    }

    selectVideoByName(videoName){
        let videoInfo = require('./videoInfo')
        return this.selectItemByName(videoName, videoInfo)
    }

    selectAudioByName(audioName){
        let audioInfo = require('./audioInfo')
        return this.selectItemByName(audioName, audioInfo)
    }

    selectFileByName(docName){
        let fileInfo = require('./fileInfo')
        return this.selectItemByName(docName, fileInfo)
    }
}

module.exports = new GalleryBrowser()
