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
    setPermission(isEmbedded, permission) {
        if (!isEmbedded) {
            var res = browser.execute((select, permissionCode) => {
                var sel = document.querySelector(select)
                sel.value = permissionCode
                return sel
            }, uimap.permissionSelect, uimap.permissionOptions(permission))
        } else {
            if (permission === 'use different settings') {
                browser.click(uimap.embeddedPermission.nonInherited)
            } else {
                browser.click(uimap.embeddedPermission.inherited)
            }
        }
    }
}

module.exports = new NewCollectionGalleryDialog()