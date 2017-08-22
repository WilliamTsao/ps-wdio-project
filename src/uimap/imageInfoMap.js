'use strict'
const MediaInfoUiMap = require('./mediaInfoMap')

class ImageInfoMap {
    constructor() {
        this.mediaSharedUimap = new MediaInfoUiMap(this.inspector)
    }

    get inspector() { return '#ImageInspector'}

    get isLoaded() {
        return Object.assign(this.mediaSharedUimap.isLoaded)
    }
}

module.exports = ImageInfoMap