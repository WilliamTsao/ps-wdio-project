const Page = require('../src/pageobjects/page')
const page = new Page()
const Util = require('../src/util/utilities')
const util = new Util()
const LoginPage = require('../src/pageobjects/LoginPage')
const Libris = require('../src/pageobjects/LibrisPage')
const retryFlaky = 5


describe('Create Collection', function() {
    var collectionName
    const LibraryRightPane = Libris.getLibraryRightPane()
    const collectionInfo = LibraryRightPane.getCollectionInfo()
    const LibraryLeftPane = Libris.getLibraryLeftPane()

    this.retries(retryFlaky);

    beforeEach(function() {
        LoginPage.open()
        LoginPage.isLoaded().should.be.true
        LoginPage.validLogin()
        Libris.open()
        Libris.isLoaded().should.be.true
        collectionName = util.randomString()
    })
    it('with "no one but me" permission', function() {
        LibraryLeftPane.newCollection(collectionName, false, 'No one but me')
        LibraryLeftPane.visibleInLeftpane(collectionName).should.be.true
    })
    it('with "those with permission" permission', function() {
        LibraryLeftPane.newCollection(collectionName, false, 'Those with permission')
        LibraryLeftPane.visibleInLeftpane(collectionName).should.be.true
    })
    it('with "everyone" permission', function() {
        LibraryLeftPane.newCollection(collectionName, false, 'Everyone')
        LibraryLeftPane.visibleInLeftpane(collectionName).should.be.true
    })

    it('create nested collection with "inherited" permission', function() {
        LibraryLeftPane.selectCollectionOrGalleryByName('parent').should.be.true
        collectionInfo.isLoaded('parent').should.be.true
        LibraryLeftPane.newCollection(collectionName, true, 'inherited')
        LibraryLeftPane.visibleInLeftpane(collectionName).should.be.true
    })

    it('create nested collection with NOT inherited permission', function() {
        LibraryLeftPane.selectCollectionOrGalleryByName('parent').should.be.true
        collectionInfo.isLoaded('parent').should.be.true
        LibraryLeftPane.newCollection(collectionName, true, 'use different settings')
        LibraryLeftPane.visibleInLeftpane(collectionName).should.be.true
    })

    afterEach(function() {
        LibraryLeftPane.selectCollectionOrGalleryByName(collectionName).should.be.true
        collectionInfo.isLoaded(collectionName).should.be.true
        collectionInfo.delete()
        collectionInfo.waitForDelete()
        page.newSession()
    })
})