'use strict'
const Page = require('./page')
const ImageInfoUiMap = require('../uimap/imageInfoMap')
const uimap = new ImageInfoUiMap()

const MediaInfoInterface = require('./mediaInfo')
const mediaInfo = new MediaInfoInterface(uimap.inspector)

class ImageInfo extends Page{

    isLoaded(imageName){
        return browser.waitUntil(()=>{
            let domLoaded = super.isLoaded(uimap.isLoaded)
            let currentName = this.getName()
            console.log(`Current Name: ${currentName}, Expected Name: ${imageName}`)
            let nameMatches = currentName === imageName
            return domLoaded && nameMatches
        }, 5000, 'image info is not loaded after 5s')
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

module.exports = new ImageInfo()
