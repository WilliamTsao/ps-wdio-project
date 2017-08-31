const Page = require('../src/pageobjects/page')
const page = new Page()
const Util = require('../src/util/util')
const util = new Util()
const LoginPage = require('../src/pageobjects/LoginPage')
const RETRY_FLAKY = 5

//populate database with below
const GAL_FOR_RATING = 'galleryForRating'
const RATE_IMAGE = 'imageToBeRated'
const RATE_VIDEO = 'videoToBeRated'
const RATE_AUDIO = 'audioToBeRated'
const RATE_FILE = 'fileToBeRated'

const GAL_FOR_RENAME = 'galleryForRename'
const RENAME_IMAGE = 'imageToBeRenamed'
const RENAME_VIDEO = 'videoToBeRenamed'
const RENAME_AUDIO = 'audioToBeRenamed'
const RENAME_FILE = 'fileToBeRenamed'

describe('Library Actions: Media', function() {

    describe('Rate a media file', function() {
        this.retries(RETRY_FLAKY)
        let muHome, librisLibrary, libraryLeftPane, galleryBrowser, rating, imageInfo, videoInfo, audioInfo, fileInfo

        beforeEach(function() {
            LoginPage.open().should.be.true
            muHome = LoginPage.submitValidLogin()
            muHome.open().should.be.true
            librisLibrary = muHome.getLibrisLibrary()
            librisLibrary.open().should.be.true
            libraryLeftPane = librisLibrary.getLibraryLeftPane()
            libraryLeftPane.selectGalleryByName(GAL_FOR_RATING).should.be.true
            galleryBrowser = librisLibrary.getLibraryCenterPane().getGalleryBrowser()
            rating = util.randomRating()
        })

        it('should allow me to rate an image', function() {
            imageInfo = librisLibrary.getLibraryRightPane().getImageInfo()
            galleryBrowser.selectImageByName(RATE_IMAGE, imageInfo).should.be.true
            imageInfo.rate(rating).should.be.true
        })

        it('should allow me to reject a rating on an image', function() {
            imageInfo = librisLibrary.getLibraryRightPane().getImageInfo()
            galleryBrowser.selectImageByName(RATE_IMAGE, imageInfo).should.be.true
            imageInfo.rejectRate().should.be.true
        })

        it('should allow me to rate a video', function() {
            videoInfo = librisLibrary.getLibraryRightPane().getVideoInfo()
            galleryBrowser.selectVideoByName(RATE_VIDEO, videoInfo).should.be.true
            videoInfo.rate(rating).should.be.true
        })

        it('should allow me to reject a rating on a video', function() {
            videoInfo = librisLibrary.getLibraryRightPane().getVideoInfo()
            galleryBrowser.selectVideoByName(RATE_VIDEO, videoInfo).should.be.true
            videoInfo.rejectRate().should.be.true
        })

        it('should allow me to rate an audio', function() {
            audioInfo = librisLibrary.getLibraryRightPane().getAudioInfo()
            galleryBrowser.selectAudioByName(RATE_AUDIO, audioInfo).should.be.true
            audioInfo.rate(rating).should.be.true
        })

        it('should allow me to reject a rating on an audio', function() {
            audioInfo = librisLibrary.getLibraryRightPane().getAudioInfo()
            galleryBrowser.selectAudioByName(RATE_AUDIO, audioInfo).should.be.true
            audioInfo.rejectRate().should.be.true
        })

        it('should allow me to rate a document', function() {
            fileInfo = librisLibrary.getLibraryRightPane().getFileInfo()
            galleryBrowser.selectFileByName(RATE_FILE, fileInfo).should.be.true
            fileInfo.rate(rating).should.be.true
        })

        it('should allow me to reject a rating on a document', function() {
            fileInfo = librisLibrary.getLibraryRightPane().getFileInfo()
            galleryBrowser.selectFileByName(RATE_FILE, fileInfo).should.be.true
            fileInfo.rejectRate().should.be.true
        })

        afterEach(function() {
            page.newSession()
        })
    })


    describe('Rename a media file', function() {
        this.retries(RETRY_FLAKY)
        let muHome, librisLibrary, libraryLeftPane, galleryBrowser, newName, imageInfo, videoInfo, audioInfo, fileInfo
        let currentInspector, originalName
        beforeEach(function() {
            LoginPage.open().should.be.true
            muHome = LoginPage.submitValidLogin()
            muHome.open().should.be.true
            librisLibrary = muHome.getLibrisLibrary()
            librisLibrary.open().should.be.true
            libraryLeftPane = librisLibrary.getLibraryLeftPane()
            libraryLeftPane.selectGalleryByName(GAL_FOR_RENAME).should.be.true
            galleryBrowser = librisLibrary.getLibraryCenterPane().getGalleryBrowser()
            newName = util.randomString()
        })

        it('Rename an image', function() {
            imageInfo = librisLibrary.getLibraryRightPane().getImageInfo()
            galleryBrowser.selectImageByName(RENAME_IMAGE, imageInfo).should.be.true
            imageInfo.rename(newName).should.be.true
            originalName = RENAME_IMAGE
            currentInspector = imageInfo
        })

        it('Rename an video', function() {
            videoInfo = librisLibrary.getLibraryRightPane().getVideoInfo()
            galleryBrowser.selectVideoByName(RENAME_VIDEO, videoInfo).should.be.true
            videoInfo.rename(newName).should.be.true
            originalName = RENAME_VIDEO
            currentInspector = videoInfo
        })

        it('Rename an audio', function() {
            audioInfo = librisLibrary.getLibraryRightPane().getAudioInfo()
            galleryBrowser.selectAudioByName(RENAME_AUDIO, audioInfo).should.be.true
            audioInfo.rename(newName).should.be.true
            originalName = RENAME_AUDIO
            currentInspector = audioInfo
        })

        it('Rename an file', function() {
            fileInfo = librisLibrary.getLibraryRightPane().getFileInfo()
            galleryBrowser.selectFileByName(RENAME_FILE, fileInfo).should.be.true
            fileInfo.rename(newName).should.be.true
            originalName = RENAME_FILE
            currentInspector = fileInfo
        })

        afterEach(function() {
            console.log('Current Data Type: ' + currentInspector.getType())
            galleryBrowser.restoreMediaName(currentInspector, originalName, newName)
            page.newSession()
        })
    })
})
