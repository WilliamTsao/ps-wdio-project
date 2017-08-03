const Page = require('../src/pageobjects/page')
const page = new Page()
const Util = require('../src/util/util')
const util = new Util()
const LoginPage = require('../src/pageobjects/LoginPage')
//const retryFlaky = 5


describe('Create Gallery', function() {
    let galleryName, libraryRightPane, galleryInfo, libraryLeftPane

    //this.retries(retryFlaky);

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
    //
    // it('with "those with permission" permission', function() {
    //     libraryLeftPane.createNewGallery(galleryName, false, 'Those with permission').should.be.true
    // })
    //
    // it('with "everyone" permission', function() {
    //     libraryLeftPane.createNewGallery(galleryName, false, 'Everyone').should.be.true
    // })
    //
    // it('create nested collection with "inherited" permission', function() {
    //     libraryLeftPane.createNewGallery(galleryName, 'inherited').should.be.true
    // })
    //
    // it('create nested collection with NOT inherited permission', function() {
    //     libraryLeftPane.createNewGallery(galleryName, 'use different settings').should.be.true
    // })
    //
    afterEach(function() {
        libraryLeftPane.selectCollectionOrGalleryByName(galleryName, false).should.be.true
        galleryInfo.delete(galleryName).should.be.true
        page.newSession()
    })
})
