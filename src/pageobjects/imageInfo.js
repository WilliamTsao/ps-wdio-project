'use strict'
const Page = require('./page')
const ImageInfoUiMap = require('../uimap/imageInfoMap')
const uimap = new ImageInfoUiMap()

const MediaInfoInterface = require('./mediaInfo')
const mediaInfo = new MediaInfoInterface(uimap.inspector)

class ImageInfo extends Page{

    isLoaded(imageName){
        let domLoaded = super.isLoaded(uimap.isLoaded)
        console.log(`DOM is loaded: ${domLoaded}`)
        let nameMatches = super.nameIsCorrect(imageName, this)
        console.log(`Name is correct: ${nameMatches}`)
        return domLoaded && nameMatches
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

module.exports = new ImageInfo()
