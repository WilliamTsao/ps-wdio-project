'use strict'

class LibraryLeftPaneMap{

    get libraryRoot(){return '#ctRootHidden > a'}
    get newCollection(){return '#CollectionTree > div.ctToolbar.ps-tools > tripod-button:nth-child(1) > button'}
    get newGallery(){return '#CollectionTree > div.ctToolbar.ps-tools > tripod-button:nth-child(2) > button'}
    get topLevelListItems(){return '#ctRootHidden ul li'}

    get isLoaded(){
        return {
            libraryRoot: this.libraryRoot,
            newCollectionBtn: this.newCollection,
            newGalleryBtn: this.newGallery,
            topLevelListItems: this.topLevelListItems
        }
    }

}

module.exports = LibraryLeftPaneMap
