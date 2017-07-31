'use strict'

const LIBRIS_LIBRARY_ROOT_SELECTOR = '#ctRootHidden ul'

class Util {



    get loadingMessage() { return '.psBusy' }


    openAll(level = $(LIBRIS_LIBRARY_ROOT_SELECTOR)) {
        // console.log(`ul: ${level.getAttribute('data-id')}`)
        level.$$('li').forEach((ele) => {
            // console.log(`li: ${ele.getAttribute('data-id')}`)
            ele.click()
        })
        const ul = level.$$('ul')
        for (var i = 0; i < ul.length; i++) {
            this.openAll(ul[i])
        }
    }

    randomString(length = 10) {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var result = ''
        for (var i = length; i > 0; --i) {
            result += chars[Math.round(Math.random() * (chars.length - 1))]
        }
        return result
    }

    //waitForElementToDisappear(){}

    waitForLoadingToComplete() {
        browser.pause(1000)
        try {
            browser.waitForVisible(this.loadingMessage, 5000, true)
            // browser.waitUntil(()=>{
            //     return browser.getCssProperty(this.loadingMessage, 'display').value === 'none'
            // }, 5000, 'expected page to be loaded after 5s')
        } catch (e) {
            console.log(e)
        }
        // often found that things are not truly loaded when the loading message goes away
        browser.pause(500)
    }

    customWaitUntilVisible(selector, timeourErrorMessage, untilTimeout = 10000, pollInterval = 500, visibleTimeout = 5000, isReverse = false) {
        //let isVisible = true
        try {
            browser.waitUntil(() => {
                return browser.waitForVisible(selector, visibleTimeout, isReverse) //waitForVisible uses WaitUntil which is wrong
            }, untilTimeout, timeourErrorMessage, pollInterval)
        } catch (e) {
            console.log('Cannot Wait no More: ' + e)
        }
    }

    //cutomWaitUntilClickable(){}

}

module.exports = Util