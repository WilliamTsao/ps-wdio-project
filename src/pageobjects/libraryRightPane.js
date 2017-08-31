'use strict'
let Page = require('./page')
const CollectionInfo = require('./collectionInfo')
const GalleryInfo = require('./galleryInfo')
const ImageInfo = require('./imageInfo')
const VideoInfo = require('./videoInfo')
const AudioInfo = require('./audioInfo')
const FileInfo = require('./fileInfo')



class LibraryRightPane extends Page {

    getCollectionInfo() {
        return CollectionInfo
    }

    getGalleryInfo() {
        return GalleryInfo
    }

    getImageInfo(){
        return ImageInfo
    }

    getVideoInfo(){
        return VideoInfo
    }

    getAudioInfo(){
        return AudioInfo
    }

    getFileInfo(){
        return FileInfo
    }
}

module.exports = new LibraryRightPane()