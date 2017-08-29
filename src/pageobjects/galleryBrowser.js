'use strict'
let Page = require('./page')
const GalleryBrowserUiMap = require('../uimap/GalleryBrowserMap')
const uimap = new GalleryBrowserUiMap()

class GalleryBrowser extends Page {

    isLoaded() {
        return super.isLoaded(uimap.isLoaded)
    }

    selectItemByName(itemName, itemType){
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
        }
        return found
    }

    selectImageByName(imgName){
        let imageInfo = require('./imageInfo')
        return this.selectItemByName(imgName, 'IMAGE') && imageInfo.isLoaded(imgName)
    }

    selectVideoByName(videoName){
        let videoInfo = require('./videoInfo')
        return this.selectItemByName(videoName, 'VIDEO') && videoInfo.isLoaded(videoName)
    }

    selectAudioByName(audioName){
        let audioInfo = require('./audioInfo')
        return this.selectItemByName(audioName, 'AUDIO') && audioInfo.isLoaded(audioName)
    }

    selectFileByName(docName){
        let fileInfo = require('./fileInfo')
        return this.selectItemByName(docName, 'DOC') && fileInfo.isLoaded(docName)
    }
}

module.exports = new GalleryBrowser()
