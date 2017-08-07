'use strict'

class GalleryInfoMap {

    get inspectorName() { return '#GalleryInspector'}

    get trashCan() { return '#GalleryInspector li.delete.f_right button' }
    get removeFromCollection() { return '#GalleryInspector li.delete.f_right li:nth-child(1)' }
    get delete() {return '#GalleryInspector li.delete.f_right li:nth-child(2)' }

    get galleryName() {
        return {
            textarea: 'form.G_NAME',
            checkmark: 'form.G_NAME a.save',
            content: 'form.G_NAME div.ceShow'
        }
    }
    get deleteNotifier() { return 'body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.notifier' }
    get isLoaded() {
        return {
            GalleryTrashCan: this.trashCan,
            galleryName: this.galleryName.textarea
        }
    }
}

module.exports = GalleryInfoMap