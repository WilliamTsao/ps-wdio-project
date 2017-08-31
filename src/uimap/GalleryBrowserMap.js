'use strict'

class GalleryBrowserMap{
    get browser(){return '#GalImgBrowser'}

    get viewBusy(){ return `${this.browser} .viewBusy`}

    itemNames(itemType){
        let selector = `${this.browser} #items `
        switch(itemType){
            case 'IMAGE': selector += '.IMAGE'
                break
            case 'VIDEO': selector += '.VIDEO'
                break
            case 'AUDIO': selector += '.AUDIO'
                break
            case 'DOC': selector += '.DOC'
                break
        }
        selector += ' .name'
        return selector
    }

    get isLoaded(){
        return {
            browser: this.browser
        }
    }

}

module.exports = GalleryBrowserMap
