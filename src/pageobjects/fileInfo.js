'use strict'
const Page = require('./page')
const fileInfoUiMap = require('../uimap/fileInfoMap')
const uimap = new fileInfoUiMap()

const MediaInfoInterface = require('./mediaInfo')
const mediaInfo = new MediaInfoInterface(uimap.inspector)


class FileInfo extends Page{

    isLoaded(fileName){
        return browser.waitUntil(()=>{
            let domLoaded = super.isLoaded(uimap.isLoaded)
            let currentName = this.getName()
            console.log(`Current Name: ${currentName}; Expected Name: ${fileName}`)
            let nameMatches = currentName === fileName
            return domLoaded && nameMatches
        }, 5000, 'file info is not loaded after 5s')
    }

    getName(){
        return mediaInfo.getName()
    }

    rate(rating){
        return mediaInfo.rate(rating)
    }

    rejectRate(){
        return mediaInfo.rejectRate()
    }
    rename(newName){
        mediaInfo.rename(newName)
        return this.isLoaded(newName)
    }

}

module.exports = new FileInfo()
