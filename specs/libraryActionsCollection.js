const Page = require('../src/pageobjects/page')
const page = new Page()
const Util = require('../src/util/util')
const util = new Util()
const LoginPage = require('../src/pageobjects/LoginPage')
const RETRY_FLAKY = 5


describe.skip('Create Collection', function() {
    let collectionName, libraryRightPane, collectionInfo, libraryLeftPane

    this.retries(RETRY_FLAKY)

    beforeEach(function() {
        LoginPage.open().should.be.true
        const muHome = LoginPage.submitValidLogin()
        muHome.open().should.be.true
        const librisLibrary = muHome.getLibrisLibrary()
        librisLibrary.open().should.be.true
        libraryRightPane = librisLibrary.getLibraryRightPane()
        libraryLeftPane = librisLibrary.getLibraryLeftPane()
        collectionInfo = libraryRightPane.getCollectionInfo()
        collectionName = util.randomString()
    })

    it('with "no one but me" permission', function() {
        libraryLeftPane.createNewCollection(collectionName, false, 'No one but me').should.be.true
    })

    it('with "those with permission" permission', function() {
        libraryLeftPane.createNewCollection(collectionName, false, 'Those with permission').should.be.true
    })

    it('with "everyone" permission', function() {
        libraryLeftPane.createNewCollection(collectionName, false, 'Everyone').should.be.true
    })

    it('create nested collection with "inherited" permission', function() {
        libraryLeftPane.createNestecCollection(collectionName, 'inherited').should.be.true
    })

    it('create nested collection with NOT inherited permission', function() {
        libraryLeftPane.createNestecCollection(collectionName, 'use different settings').should.be.true
    })

    afterEach(function() {
        libraryLeftPane.selectCollectionByName(collectionName).should.be.true
        collectionInfo.delete(collectionName).should.be.true
        page.newSession()
    })
})