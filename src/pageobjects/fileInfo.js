'use strict'
const Page = require('./page')
const fileInfoUiMap = require('../uimap/fileInfoMap')
const uimap = new fileInfoUiMap()

const MediaInfoInterface = require('./mediaInfo')
const mediaInfo = new MediaInfoInterface(uimap.inspector)


class FileInfo extends Page{

    isLoaded(fileName){
        let domLoaded = super.isLoaded(uimap.isLoaded)
        console.log(`DOM is loaded: ${domLoaded}`)
        let nameMatches = super.nameIsCorrect(fileName, this)
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

module.exports = new FileInfo()
