const Util = require('../src/util/util')
const util = new Util()
const LoginPage = require('../src/pageobjects/LoginPage')
const Libris = require('../src/pageobjects/LibrisPage')
const retryFlaky = 5


describe('Create Collection', function() {
    var collectionName
    const LibraryRightPane = Libris.getLibraryRightPane()
    const collectionInfo = LibraryRightPane.getCollectionInfo()
    const LibraryLeftPane = Libris.getLibraryLeftPane()

    //this.retries(retryFlaky);

    beforeEach(function() {
        LoginPage.open().should.be.true
        const muHome = LoginPage.submitValidLogin()
        muHome.open().should.be.true
        librisLibrary = muHome.getLibrisLibrary()
        librisLibrary.open().should.be.true
        collectionName = util.randomString()
    })

    it('with "no one but me" permission', function() {
        LibraryLeftPane.createNewCollection(collectionName, false, 'No one but me').should.be.true
    })

    it('with "those with permission" permission', function() {
        LibraryLeftPane.createNewCollection(collectionName, false, 'Those with permission').should.be.true
    })

    it('with "everyone" permission', function() {
        LibraryLeftPane.createNewCollection(collectionName, false, 'Everyone').should.be.true
    })

    it('create nested collection with "inherited" permission', function() {
        //LibraryLeftPane.createNestecCollection('parent', collectionName, true, 'inherited').should.be.true
        LibraryLeftPane.selectParent().should.be.true
        collectionInfo.isLoaded('parent').should.be.true
        LibraryLeftPane.createNewCollection(collectionName, true, 'inherited').should.be.true
    })

    it('create nested collection with NOT inherited permission', function() {
        LibraryLeftPane.selectParent().should.be.true
        collectionInfo.isLoaded('parent').should.be.true
        LibraryLeftPane.createNewCollection(collectionName, true, 'use different settings').should.be.true
    })

    afterEach(function() {
        LibraryLeftPane.selectCollectionOrGalleryByName(collectionName).should.be.true
        collectionInfo.isLoaded(collectionName).should.be.true
        collectionInfo.delete()
        collectionInfo.waitForDelete()
        page.newSession()
    })
})