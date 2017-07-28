'use strict'

class LibraryCenterPaneMap {

    get items() {
        return $$('.collection-browser #list #items .item-holder')
    }
    get actionDropdown() {
        return '#menu-clc > li:nth-child(1)'
    }
    get delete() {
        return '#menu-clc > li:nth-child(1) > ul > li:nth-child(5)'
    }
    get move() {
        return '#menu-clc > li:nth-child(1) > ul > li:nth-child(2)'
    }
    get footer() {
        return {
            listView: '#cbItemDisplay > tripod-button:nth-child(1) > button'
        }
    }
    get isLoaded() {
        return {
            items: '.collection-browser #list #items'
        }
    }

    itemName(item) {
        return item.$('.shadow-holder .item .metadata .name').getAttribute('title')
    }

    get hideLeftPane() {
        return '#autopane-pane-1-collapse'
    }

    get hideRightPane() {
        return '#autopane-pane-3-collapse'
    }
}

module.exports = LibraryCenterPaneMap