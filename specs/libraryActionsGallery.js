const Page = require('../src/pageobjects/page')
const page = new Page()
const Util = require('../src/util/util')
const util = new Util()
const LoginPage = require('../src/pageobjects/LoginPage')
const RETRY_Flaky = 5

describe('Library Actions: Gallery', function() {

    describe('Create Gallery', function() {
        this.retries(RETRY_Flaky)
        let muHome, librisLibrary, libraryLeftPane, galleryName, galleryInfo
        
        beforeEach(function() {
            LoginPage.open().should.be.true
            muHome = LoginPage.submitValidLogin()
            muHome.open().should.be.true
            librisLibrary = muHome.getLibrisLibrary()
            librisLibrary.open().should.be.true
            libraryLeftPane = librisLibrary.getLibraryLeftPane()
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
            galleryInfo = librisLibrary.getLibraryRightPane().getGalleryInfo()
            galleryInfo.delete(galleryName).should.be.true
            page.newSession()
        })
    })

    describe('Rename Gallery', function(){
        this.retries(RETRY_Flaky)
        let muHome, librisLibrary, libraryLeftPane, originalGalleryName, newGalleryName, galleryInfo

        beforeEach(function() {
            LoginPage.open().should.be.true
            muHome = LoginPage.submitValidLogin()
            muHome.open().should.be.true
            librisLibrary = muHome.getLibrisLibrary()
            librisLibrary.open().should.be.true
            libraryLeftPane = librisLibrary.getLibraryLeftPane()
            libraryLeftPane.selectRoot().should.be.true
            originalGalleryName = util.randomString()
            libraryLeftPane.createNewGallery(originalGalleryName).should.be.true
        })
        it('should be able to rename gallery', function(){
            libraryLeftPane.selectGalleryByName(originalGalleryName).should.be.true
            galleryInfo = librisLibrary.getLibraryRightPane().getGalleryInfo()
            newGalleryName = util.randomString()
            galleryInfo.rename(originalGalleryName, newGalleryName).should.be.true
        })
        afterEach(function() {
            galleryInfo.delete(newGalleryName).should.be.true
            page.newSession()
        })
    })

    describe('Set Gallery Description', function(){
        this.retries(RETRY_Flaky)
        let muHome, librisLibrary, libraryLeftPane, galleryInfo, description
        const EXISTING_GALLERY_NAME = 'setDescription'
        beforeEach(function(){
            LoginPage.open().should.be.true
            muHome = LoginPage.submitValidLogin()
            muHome.open().should.be.true
            librisLibrary = muHome.getLibrisLibrary()
            librisLibrary.open().should.be.true
        })
        it('should be able to set gallery description', function(){
            libraryLeftPane = librisLibrary.getLibraryLeftPane()
            libraryLeftPane.selectGalleryByName(EXISTING_GALLERY_NAME).should.be.true
            galleryInfo = librisLibrary.getLibraryRightPane().getGalleryInfo()
            description = util.randomString()
            galleryInfo.setDescription(description).should.be.true
        })
        afterEach(function(){
            page.newSession()
        })
    })
})
