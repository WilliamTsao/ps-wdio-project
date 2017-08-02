'use strict'

class GalleryInfoMap {

    get inspectorName() { return '#GalleryInspector'}

    get trashCan() { return `${this.inspectorName} li.delete.f_right button` }

    get description() {
        return {
            tab: `${this.inspectorName} > div.content.info > div:nth-child(5)`,
            textarea: 'form.G_DESCRIPTION',
            checkmark: 'form.G_DESCRIPTION a.save',
            content: 'form.G_DESCRIPTION div.ceShow'
        }
    }
    //
    // get gallerynName() {
    //     return {
    //         textarea: 'form.C_NAME',
    //         checkmark: 'form.C_NAME a.save',
    //         content: 'form.C_NAME div.ceShow'
    //     }
    // }
    // get deleteNotifier() { return 'body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.notifier' }
    // get isLoaded() {
    //     return {
    //         trashCan: this.trashCan,
    //         descriptionTab: this.description.tab,
    //         collectionName: this.collectionName.textarea
    //     }
    // }
}

module.exports = GalleryInfoMap