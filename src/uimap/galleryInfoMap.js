'use strict'

class GalleryInfoMap {

    get inspector() { return '#GalleryInspector'}

    get trashCan() { return `${this.inspector} li.delete.f_right` }
    get removeFromCollection() { return `${this.trashCan} li:nth-child(1)` }
    get delete() {return `${this.trashCan} li:nth-child(2)` }

    get galleryName() {
        return {
            form: 'form.G_NAME',
            edit: 'form.G_NAME a.edit',
            input: 'form.G_NAME input[type="text"]',
            checkmark: 'form.G_NAME a.save',
            content: 'form.G_NAME div.ceShow'
        }
    }
    get deleteNotifier() { return 'body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.notifier' }
    get isLoaded() {
        return {
            GalleryTrashCan: this.trashCan,
            galleryName: this.galleryName.form
        }
    }
}

module.exports = GalleryInfoMap