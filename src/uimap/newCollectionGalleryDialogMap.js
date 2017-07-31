'use strict'

class NewCollectionGalleryDialogMap {

    get createDialog() {
        return '#Dialog_ClcGal_Create'
    }

    get nameInput() {
        return `${this.createDialog} input[type="Text"]`
    }

    get permissionSelect() {
        return `${this.createDialog} > form > fieldset.visibility > select`
    }

    get submit() {
        return `${this.createDialog} div button.submit.f_right`
    }

    get embeddedPermission() {
        return {
            inherited: `${this.createDialog} input[value="t"]`,
            nonInherited: `${this.createDialog} input[value="f"]`
        }
    }

    get isLoaded() {
        return {
            createDialog: this.createDialog,
            nameInput: this.nameInput,
            submit: this.submit
        }
    }

    // usage was commented out
    permissionOptions(perm) {
        switch (perm) {
            case 'Everyone':
                return 'PUB'
            case 'Those with permission':
                return 'ACS'
            case 'No one but me':
                return 'PRI'
        }
    }

}

module.exports = NewCollectionGalleryDialogMap