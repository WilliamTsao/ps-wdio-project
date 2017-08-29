'use strict'
const Page = require('./page')
const videoInfoUiMap = require('../uimap/videoInfoMap')
const uimap = new videoInfoUiMap()

const MediaInfoInterface = require('./mediaInfo')
const mediaInfo = new MediaInfoInterface(uimap.inspector)

class VideoInfo extends Page{

    isLoaded(videoName){
        return browser.waitUntil(()=>{
            let domLoaded = super.isLoaded(uimap.isLoaded)
            let currentName = this.getName()
            console.log(`Current Name: ${currentName}; Expected Name: ${videoName}`)
            let nameMatches = currentName === videoName
            return domLoaded && nameMatches
        }, 5000, 'video info is not loaded after 5s')
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

module.exports = new VideoInfo()
