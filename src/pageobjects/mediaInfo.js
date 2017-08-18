'use strict'
const MediaInfoUiMap = require('../uimap/mediaInfoMap')

class MediaInfo{
    constructor(inspector) {
        this.inspector = inspector
        this.uimap = new MediaInfoUiMap(inspector)
    }

    getName(){
        return this.uimap.mediaName.content
    }

    rate(index){
        browser.click(this.uimap.star(index))
        return this.numStarsSelected() === index
    }

    rejectRate(){
        let success = true
        browser.click(this.uimap.rejectRate)
        if(!this.numStarsSelected() === 0){
            console.log('Number of stars selected is NOT zero')
            success = false
        }
        if(!this.isRejectSeleted()){
            console.log('Reject rating is NOT selected')
            success = false
        }
        return success
    }

    numStarsSelected(){
        let stars = this.uimap.stars
        return stars.fileter(function(ele){
            return $(ele).getAttribute('class').split(' ').includes('starOn')
        }).length
    }

    isRejectSeleted(){
        return this.uimap.rejectRate.getAttribute('class').split(' ').include('negOn')
    }

}
module.exports = MediaInfo