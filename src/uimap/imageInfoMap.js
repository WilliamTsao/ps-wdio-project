'use strict'
const MediaInfoUiMap = require('./mediaInfoMap')

class ImageInfoMap {
    constructor() {
        this.mediaSharedUimap = new MediaInfoUiMap(this.inspector)
    }

    get inspector() { return '#ImageInspector'}

    get isLoaded() {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        console.log(this.mediaSharedUimap.isLoaded.mediaName)
        return Object.assign(this.mediaSharedUimap.isLoaded)
    }
}

module.exports = ImageInfoMap