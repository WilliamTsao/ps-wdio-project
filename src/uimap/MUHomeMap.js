'use strict'

class MUHomeMap {

    get title() { return 'Libris Home | PhotoShelter' }

    get footer() {return '#footer'}
    get leftPane() {return '.pane-left'}
    get psMain() {return '.ps-main'}

    get isLoaded() {
        return {
            psMain: this.psMain,
            leftPane: this.leftPane,
            footer: this.footer
        }
    }
}

module.exports = MUHomeMap
