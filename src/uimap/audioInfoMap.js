'use strict'
const MediaInfoUiMap = require('./mediaInfoMap')

class AudioInfoMap {
    constructor() {
        this.mediaSharedUimap = new MediaInfoUiMap(this.inspector)
    }

    get inspector() { return '#AudioInspector'}

    get isLoaded() {
        return Object.assign(this.mediaSharedUimap.isLoaded)
    }
}

module.exports = AudioInfoMap