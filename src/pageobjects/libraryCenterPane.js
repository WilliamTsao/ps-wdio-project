'use strict'
var Page = require('./page')
const CenterPaneUiMap = require('../uimap/libraryCenterPaneMap')
const uimap = new CenterPaneUiMap()
const Util = require('../util/util')
const util = new Util()

class LibraryCenterPane extends Page{
    isLoaded(){
        return super.isLoaded(uimap.isLoaded)
    }
    searchTumbnail(collectionOrGalleryName){
        browser.refresh()
        //util.waitForLoadingToComplete()
        this.isLoaded().should.be.true
        browser.click(uimap.footer.listView)
        console.log('items count: '+uimap.items.length)
        const res = uimap.items.find(function(ele){
            console.log('Search Thumbnail: '+collectionOrGalleryName+' : '+ uimap.itemName(ele))
            return uimap.itemName(ele) === collectionOrGalleryName
        })
        if(res){
            return true
        }else{
            return false
        }
    }
    selectTumbnail(collectionOrGalleryName){
        // browser.refresh()
        // util.waitForLoadingToComplete()
        this.isLoaded()
        browser.click(uimap.footer.listView)
        console.log('items count: '+uimap.items.length)
        const res = uimap.items.find(function(ele){
            console.log('Select Thumbnail: '+collectionOrGalleryName+' : '+ uimap.itemName(ele))
            return uimap.itemName(ele) === collectionOrGalleryName
        })
        if(res){
            res.click()
            return true
        }else{
            return false
        }
    }

    actionDropdown(action){
        browser.waitForVisible(uimap.actionDropdown)
        browser.waitForEnabled(uimap.actionDropdown)
        browser.click(uimap.actionDropdown)
        switch (action) {
        case 'delete':
            browser.click(uimap.delete)
            break
        case 'move':
            browser.click(uimap.move)
            break
        }
    }

}

module.exports = new LibraryCenterPane()
