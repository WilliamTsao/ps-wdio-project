'use strict'
let Page = require('./page')
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

    setPermission(isEmbedded, permission) {
        let success = true
        if (!isEmbedded) {
            success = this.setRootPermission(permission)
        } else {
            this.setEmbedPermission(permission)
        }
        return success
    }

    setRootPermission(permission) {
        return browser.execute((select, permissionCode) => {
            let element = document.querySelector(select)
            element.value = permissionCode
            return element.value === permissionCode
        }, uimap.permissionSelect, uimap.permissionOptions(permission))
    }

    setEmbedPermission(permission) {
        if (permission === 'use different settings') {
            browser.click(uimap.embeddedPermission.nonInherited)
        } else {
            browser.click(uimap.embeddedPermission.inherited)
        }
    }
}

module.exports = new NewCollectionGalleryDialog()
