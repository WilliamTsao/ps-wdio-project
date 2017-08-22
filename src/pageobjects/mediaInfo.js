'use strict'
const MediaInfoUiMap = require('../uimap/mediaInfoMap')

class MediaInfo{
    constructor(inspector) {
        this.inspector = inspector
        this.uimap = new MediaInfoUiMap(inspector)
    }

    getName(){
        return $(this.uimap.mediaName.content).getText()
    }

    rate(index){
        console.log(`Selecting ${index} star`)
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
        let numStarOn = stars.filter(function(ele){
            return $(ele).getAttribute('class').split(' ').includes('starOn')
        }).length
        console.log(`Number of Stars with class starOn: ${numStarOn}`)
        return numStarOn
    }

    isRejectSeleted(){
        return $(this.uimap.rejectRate).getAttribute('class').split(' ').includes('negOn')
    }

}
module.exports = MediaInfo