'use strict'

class CollectionInfoMap {
    get trashCan() { return '#ciSingle > div.infoSection.ci_all.first > div:nth-child(4) > ul > li.delete.f_right > tripod-button > button' }
    get description() {
        return {
            tab: '#ciSingle > div.infoSection:nth-child(4)',
            textarea: 'form.C_DESCRIPTION',
            checkmark: 'form.C_DESCRIPTION a.save',
            content: 'form.C_DESCRIPTION div.ceShow'
        }
    }
    get collectionName() {
        return {
            textarea: 'form.C_NAME',
            checkmark: 'form.C_NAME a.save',
            content: 'form.C_NAME div.ceShow'
        }
    }
    get deleteNotifier() { return 'body > div.ui-dialog.ui-widget.ui-widget-content.ui-corner-all.notifier' }
    get isLoaded() {
        return {
            trashCan: this.trashCan,
            descriptionTab: this.description.tab,
            collectionName: this.collectionName.textarea
        }
    }
}

module.exports = CollectionInfoMap