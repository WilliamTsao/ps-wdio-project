'use srict'
var Page = require('./page')
const UiMap = require('../uimap/MUHomeMap')
const uiMap = new UiMap()
const LibrisLibrary = require('./librisLibrary')

class MUHome extends Page {

    open() {
        var pageTitle = browser.getTitle()
        var isOpen = pageTitle === uiMap.title
        console.log('MUHomePage Title: ' + pageTitle)
        console.log('MUHome isOpen ' + isOpen)
        return isOpen
    }

    getLibrisLibrary(){
        return LibrisLibrary
    }

}
module.exports = new MUHome()
