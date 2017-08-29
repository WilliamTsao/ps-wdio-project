const Page = require('../src/pageobjects/page')
const page = new Page()
const Util = require('../src/util/util')
const util = new Util()
const LoginPage = require('../src/pageobjects/LoginPage')
const RETRY_FLAKY = 5

//populate database with below
const MEDIA_CONTAINER = 'galleryWithAllMedia'
const RATE_IMAGE = 'imageToBeRated'
const RATE_VIDEO = 'videoToBeRated'
const RATE_AUDIO = 'audioToBeRated'
const RATE_FILE = 'fileToBeRated'

const RENAME_IMAGE = 'imageToBeRenamed'
const RENAME_VIDEO = 'videoToBeRenamed'
const RENAME_AUDIO = 'audioToBeRenamed'
const RENAME_FILE = 'fileToBeRenamed'

describe('Library Actions: Media', function() {

    describe.skip('Rate a media file', function() {
        this.retries(RETRY_FLAKY)
        let muHome, librisLibrary, libraryLeftPane, galleryBrowser, rating, imageInfo, videoInfo, audioInfo, fileInfo

        beforeEach(function() {
            LoginPage.open().should.be.true
            muHome = LoginPage.submitValidLogin()
            muHome.open().should.be.true
            librisLibrary = muHome.getLibrisLibrary()
            librisLibrary.open().should.be.true
            libraryLeftPane = librisLibrary.getLibraryLeftPane()
            libraryLeftPane.selectGalleryByName(MEDIA_CONTAINER).should.be.true
            galleryBrowser = librisLibrary.getLibraryCenterPane().getGalleryBrowser()
            rating = util.randomRating()
        })

        it('Rate an image', function() {
            galleryBrowser.selectImageByName(RATE_IMAGE).should.be.true
            imageInfo = librisLibrary.getLibraryRightPane().getImageInfo()
            imageInfo.rate(rating).should.be.true
        })

        it('Reject a rating on an image', function() {
            galleryBrowser.selectImageByName(RATE_IMAGE).should.be.true
            imageInfo = librisLibrary.getLibraryRightPane().getImageInfo()
            imageInfo.rejectRate().should.be.true
        })

        it('Rate an video', function() {
            galleryBrowser.selectVideoByName(RATE_VIDEO).should.be.true
            videoInfo = librisLibrary.getLibraryRightPane().getVideoInfo()
            videoInfo.rate(rating).should.be.true
        })

        it('Reject a rating on an video', function() {
            galleryBrowser.selectVideoByName(RATE_VIDEO).should.be.true
            videoInfo = librisLibrary.getLibraryRightPane().getVideoInfo()
            videoInfo.rejectRate().should.be.true
        })

        it('Rate an audio', function() {
            galleryBrowser.selectAudioByName(RATE_AUDIO).should.be.true
            audioInfo = librisLibrary.getLibraryRightPane().getAudioInfo()
            audioInfo.rate(rating).should.be.true
        })

        it('Reject a rating on an audio', function() {
            galleryBrowser.selectAudioByName(RATE_AUDIO).should.be.true
            audioInfo = librisLibrary.getLibraryRightPane().getAudioInfo()
            audioInfo.rejectRate().should.be.true
        })

        it('Rate an file', function() {
            galleryBrowser.selectFileByName(RATE_FILE).should.be.true
            fileInfo = librisLibrary.getLibraryRightPane().getFileInfo()
            fileInfo.rate(rating).should.be.true
        })

        it('Reject a rating on an file', function() {
            galleryBrowser.selectFileByName(RATE_FILE).should.be.true
            fileInfo = librisLibrary.getLibraryRightPane().getFileInfo()
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
            libraryLeftPane.selectGalleryByName(MEDIA_CONTAINER).should.be.true
            galleryBrowser = librisLibrary.getLibraryCenterPane().getGalleryBrowser()
            newName = util.randomString()
        })

        it('Rename an image', function() {
            galleryBrowser.selectImageByName(RENAME_IMAGE).should.be.true
            imageInfo = librisLibrary.getLibraryRightPane().getImageInfo()
            imageInfo.rename(newName).should.be.true
            originalName = RENAME_IMAGE
            currentInspector = imageInfo
        })

        it('Rename an video', function() {
            galleryBrowser.selectVideoByName(RENAME_VIDEO).should.be.true
            videoInfo = librisLibrary.getLibraryRightPane().getVideoInfo()
            videoInfo.rename(newName).should.be.true
            originalName = RENAME_VIDEO
            currentInspector = videoInfo
        })

        it('Rename an audio', function() {
            galleryBrowser.selectAudioByName(RENAME_AUDIO).should.be.true
            audioInfo = librisLibrary.getLibraryRightPane().getAudioInfo()
            audioInfo.rename(newName).should.be.true
            originalName = RENAME_AUDIO
            currentInspector = audioInfo
        })

        it('Rename an file', function() {
            galleryBrowser.selectFileByName(RENAME_FILE).should.be.true
            fileInfo = librisLibrary.getLibraryRightPane().getFileInfo()
            fileInfo.rename(newName).should.be.true
            originalName = RENAME_FILE
            currentInspector = fileInfo
        })

        afterEach(function() {
            console.log('Current Data Type: ', currentInspector.getType())
            galleryBrowser.restoreMediaName(currentInspector, originalName, newName)
            page.newSession()
        })
    })
})
