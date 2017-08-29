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
})
