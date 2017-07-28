'use strict'
var Page = require('./page')
const LeftPane = require('./libraryLeftPane')
const RightPane = require('./libraryRightPane')
const CenterPane = require('./libraryCenterPane')
const LibrisNav = require('./librisNav')
const LibraryDialog = require('./libraryDialog')


class Libris extends Page{

    open(){
        super.open('mu/libris/images/')
    }

    isLoaded(){
        return LeftPane.isLoaded() && RightPane.isLoaded() && CenterPane.isLoaded() && LibrisNav.isLoaded()
    }

    getLibraryLeftPane(){
        return LeftPane
    }
    
    getLibraryRightPane(){
        return RightPane
    }
    
    getLibraryCenterPane(){
        return CenterPane
    }
    
    getLibraryDialog(){
        return LibraryDialog
    }
    
}

module.exports = new Libris()