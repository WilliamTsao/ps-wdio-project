'use strict'
const MediaInfoUiMap = require('./mediaInfoMap')

class VideoInfoMap {
    constructor() {
        this.mediaSharedUimap = new MediaInfoUiMap(this.inspector)
    }

    get inspector() { return '#VideoInspector'}

    get isLoaded() {
        return Object.assign(this.mediaSharedUimap.isLoaded)
    }
}

module.exports = VideoInfoMap