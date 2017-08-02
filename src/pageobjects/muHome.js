'use srict'
let Page = require('./page')
const UiMap = require('../uimap/MUHomeMap')
const uimap = new UiMap()
const LibrisLibrary = require('./librisLibrary')

class MUHome extends Page {

    open() {
        let isMuLoaded = this.isLoaded() && this.getMuPageTitle()
        console.log('isLoaded ' + isMuLoaded)
        return isMuLoaded
    }
    isLoaded(){
        return super.isLoaded(uimap.isLoaded)
    }

    getMuPageTitle(){
        let pageTitle = browser.getTitle()
        let isOpen = pageTitle === uimap.title
        console.log('MUHomePage Title: ' + pageTitle)
        console.log('MUHome isOpen ' + isOpen)
        return isOpen
    }

    getLibrisLibrary(){
        return LibrisLibrary
    }

}
module.exports = new MUHome()
