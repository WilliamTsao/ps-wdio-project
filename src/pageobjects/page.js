'use strict'
const Util = require('../util/util')
const util = new Util()

class Page {
    constructor() {
        this.title = 'My page'
        browser.on('error', function(e) {
            // will be executed everytime an error occurred
            // e.g. when element couldn't be found
            console.log(e.body.value.class) // -> "org.openqa.selenium.NoSuchElementException"
            console.log(e.body.value.message) // -> "no such element ..."
        })
    }

    open(path = '') {
        console.log('Opening path to: ' + path)
        browser.url('/' + path)
    }

    isLoaded(essentials, timeout = 20000, pollInterval = 500) {
        let loaded = true
        for (const key in essentials) {

            try {
                browser.waitUntil(() => {
                    console.log('isLoaded waiting for key: ' + key)
                    return $(essentials[key]).isVisible()
                }, timeout, `${key} is still not visible after ${timeout}s`, pollInterval)
            } catch (e) {
                console.log('ERROR: ' + e)
                loaded = false
            }
        }
        return loaded
    }

    newSession() {
        this.open('logout')
        util.deleteAllCookies()
    }
}

module.exports = Page
