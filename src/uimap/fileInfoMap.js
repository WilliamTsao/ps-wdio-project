'use strict'
const MediaInfoUiMap = require('./mediaInfoMap')

class FileInfoMap {
    constructor() {
        this.mediaSharedUimap = new MediaInfoUiMap(this.inspector)
    }

    get inspector() { return '#DocInspector'}

    get isLoaded() {
        return Object.assign(this.mediaSharedUimap.isLoaded)
    }
}

module.exports = FileInfoMap