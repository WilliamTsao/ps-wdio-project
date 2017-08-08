'use strict'

class GalleryInfoMap {

    get inspector() { return '#GalleryInspector'}

    get trashCan() { return `${this.inspector} li.delete.f_right` }
    get removeFromCollection() { return `${this.trashCan} li:nth-child(1)` }
    get delete() {return `${this.trashCan} li:nth-child(2)` }

    get galleryName() {
        return {
            form: 'form.G_NAME',
            input: 'form.G_NAME input[type="text"]',
            checkmark: 'form.G_NAME a.save',
            content: 'form.G_NAME div.ceShow'
        }
    }

    get description() {
        return {
            tab: `${this.inspector} > div.content.info > div:nth-child(5)`,
            form: 'form.G_DESCRIPTION',
            input: 'form.G_DESCRIPTION textarea[name="G_DESCRIPTION"]',
            checkmark: 'form.G_DESCRIPTION a.save',
            content: 'form.G_DESCRIPTION div.ceShow'
        }
    }

    get deleteNotifier() { return 'body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.notifier' }
    get isLoaded() {
        return {
            GalleryTrashCan: this.trashCan,
            galleryName: this.galleryName.form,
            descriptionTab: this.description.tab
        }
    }
}

module.exports = GalleryInfoMap