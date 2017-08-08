const Page = require('../src/pageobjects/page')
const page = new Page()
const Util = require('../src/util/util')
const util = new Util()
const LoginPage = require('../src/pageobjects/LoginPage')
const RETRY_Flaky = 5

describe('Library Actions: Gallery', function() {

    describe('Create Gallery', function() {
        this.retries(RETRY_Flaky)
        let galleryName, libraryRightPane, galleryInfo, libraryLeftPane

        beforeEach(function() {
            LoginPage.open().should.be.true
            const muHome = LoginPage.submitValidLogin()
            muHome.open().should.be.true
            const librisLibrary = muHome.getLibrisLibrary()
            librisLibrary.open().should.be.true
            libraryRightPane = librisLibrary.getLibraryRightPane()
            libraryLeftPane = librisLibrary.getLibraryLeftPane()
            galleryInfo = libraryRightPane.getGalleryInfo()
            galleryName = util.randomString()
        })

        it('with "no one but me" permission', function() {
            libraryLeftPane.createNewGallery(galleryName, false, 'No one but me').should.be.true
        })

        it('with "those with permission" permission', function() {
            libraryLeftPane.createNewGallery(galleryName, false, 'Those with permission').should.be.true
        })

        it('with "everyone" permission', function() {
            libraryLeftPane.createNewGallery(galleryName, false, 'Everyone').should.be.true
        })

        it('create nested collection with "inherited" permission', function() {
            libraryLeftPane.createNestecGallery(galleryName, 'inherited').should.be.true
        })

        it('create nested collection with NOT inherited permission', function() {
            libraryLeftPane.createNestecGallery(galleryName, 'use different settings').should.be.true
        })

        afterEach(function() {
            libraryLeftPane.selectGalleryByName(galleryName).should.be.true
            galleryInfo.delete(galleryName).should.be.true
            page.newSession()
        })
    })

    describe('Rename Gallery', function(){
        this.retries(RETRY_Flaky)
        let originalGalleryName, newGalleryName, galleryInfo, libraryLeftPane, libraryRightPane

        beforeEach(function() {
            LoginPage.open().should.be.true
            const muHome = LoginPage.submitValidLogin()
            muHome.open().should.be.true

            const librisLibrary = muHome.getLibrisLibrary()
            librisLibrary.open().should.be.true
            libraryLeftPane = librisLibrary.getLibraryLeftPane()
            libraryRightPane = librisLibrary.getLibraryRightPane()
            originalGalleryName = util.randomString()
            libraryLeftPane.selectRoot().should.be.true
            libraryLeftPane.createNewGallery(originalGalleryName).should.be.true
            newGalleryName = util.randomString()
        })
        it('should be able to rename gallery', function(){
            libraryLeftPane.selectGalleryByName(originalGalleryName).should.be.true
            galleryInfo = libraryRightPane.getGalleryInfo()
            galleryInfo.rename(originalGalleryName, newGalleryName).should.be.true
        })
        afterEach(function() {
            galleryInfo.delete(newGalleryName).should.be.true
            page.newSession()
        })
    })
})
