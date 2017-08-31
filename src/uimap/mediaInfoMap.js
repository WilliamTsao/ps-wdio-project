'use strict'

class MediaInfoMap {
    constructor(inspector) {
        this.inspector = inspector
    }

    get mediaName(){
        return {
            input: this.inspector + ' h1 form input[type="text"]',
            checkmark: this.inspector + ' h1 form a.save',
            content: this.inspector + ' h1 form .ceShow'
        }
    }

    get stars(){
        return [
            this.inspector + ' .psRateStarC div:nth-child(2)',
            this.inspector + ' .psRateStarC div:nth-child(3)',
            this.inspector + ' .psRateStarC div:nth-child(4)',
            this.inspector + ' .psRateStarC div:nth-child(5)',
            this.inspector + ' .psRateStarC div:nth-child(6)'
        ]
    }

    star(index){
        return this.stars[index-1]
    }

    get rejectRate(){
        return this.inspector + ' .psRateStarC div:nth-child(1)'
    }

    get isLoaded() {
        return {
            mediaName: this.mediaName.content
        }
    }
}

module.exports = MediaInfoMap