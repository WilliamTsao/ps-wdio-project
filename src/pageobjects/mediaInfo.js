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
        browser.click(this.uimap.rejectRate)
        return this.noStarSelected() && this.rejectSeleted()
    }

    numStarsSelected(){
        let stars = this.uimap.stars
        let numStarOn = stars.filter(function(ele){
            return $(ele).getAttribute('class').split(' ').includes('starOn')
        }).length
        console.log(`Number of Stars with class starOn: ${numStarOn}`)
        return numStarOn
    }

    noStarSelected(){
        let correct = true
        if(this.numStarsSelected() !== 0){
            console.log('Number of stars selected is NOT zero')
            correct = false
        }
        return correct
    }

    rejectSeleted(){
        let correct = true
        if(!$(this.uimap.rejectRate).getAttribute('class').split(' ').includes('negOn')){
            console.log('Reject rating icon is NOT selected')
            correct = false
        }
        return correct
    }

    rename(newName){
        $(this.uimap.mediaName.content).click()
        browser.waitUntil(()=>{
            return this.inputAndCheckmarkVisible()
        })
        browser.setValue(this.uimap.mediaName.input, newName)
        browser.click(this.uimap.mediaName.checkmark)
    }

    inputAndCheckmarkVisible(){
        let inputIsVisible = $(this.uimap.mediaName.input).isVisible()
        console.log('input is visible: ', inputIsVisible)
        let checkmarkIsVisible = $(this.uimap.mediaName.checkmark).isVisible()
        console.log('checkmark is visible: ', checkmarkIsVisible)
        return inputIsVisible && checkmarkIsVisible
    }
}
module.exports = MediaInfo