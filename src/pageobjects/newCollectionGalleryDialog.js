'use strict'
var Page = require('./page')
const NewCollectionGalleryDialogMap = require('../uimap/newCollectionGalleryDialogMap')
const uimap = new NewCollectionGalleryDialogMap()

class NewCollectionGalleryDialog extends Page {

    isLoaded() {
        return super.isLoaded(uimap.isLoaded)
    }

    newCollectionGallery(collectionGalleryName, isEmbedded = false, collectionGalleryPermission) {
        console.log('Setting name to: ' + collectionGalleryName)
        console.log('With permission: ' + collectionGalleryPermission)
        console.log('isEmbedded: ' + isEmbedded)
        browser.setValue(uimap.nameInput, collectionGalleryName)
        if (collectionGalleryPermission) {
            this.setPermission(isEmbedded, collectionGalleryPermission)
        }
        browser.click(uimap.submit)
    }

    // Problem here is it doesn't return anything
    // I can't track it
    // tracking with var success
    setPermission(isEmbedded, permission) {
        var success = true
        if (!isEmbedded) {
            success = browser.execute((select, permissionCode) => {
                var element = document.querySelector(select)
                element.value = permissionCode
                return element.value === permissionCode
            }, uimap.permissionSelect, uimap.permissionOptions(permission))
        } else {
            if (permission === 'use different settings') {
                browser.click(uimap.embeddedPermission.nonInherited)
            } else {
                browser.click(uimap.embeddedPermission.inherited)
            }
        }
        return success
    }
}

module.exports = new NewCollectionGalleryDialog()
