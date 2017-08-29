'use strict'
const Page = require('./page')
const audioInfoUiMap = require('../uimap/audioInfoMap')
const uimap = new audioInfoUiMap()

const MediaInfoInterface = require('./mediaInfo')
const mediaInfo = new MediaInfoInterface(uimap.inspector)


class AudioInfo extends Page{

    isLoaded(audioName){
        return browser.waitUntil(()=>{
            let domLoaded = super.isLoaded(uimap.isLoaded)
            let currentName = this.getName()
            console.log(`Current Name: ${currentName}; Expected Name: ${audioName}`)
            let nameMatches = currentName === audioName
            return domLoaded && nameMatches
        }, 5000, 'audio info is not loaded after 5s')
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
    
    getType(){
        return uimap.inspector.replace('Inspector', '').slice(1).toUpperCase()
    }

}

module.exports = new AudioInfo()
