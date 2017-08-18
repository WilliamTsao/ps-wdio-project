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
            //try catch around the click ??
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
        return this.selectItemByName(imgName, 'IMAGE') && imageInfo.isLoaded()
    }
    selectVideoByName(videoName){
        return this.selectItemByName(videoName, 'VIDEO')
    }
    selectAudioByName(audioName){
        return this.selectItemByName(audioName, 'AUDIO')
    }
    selectFileByName(docName){
        return this.selectItemByName(docName, 'DOC')
    }

}

module.exports = new GalleryBrowser()
