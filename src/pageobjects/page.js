'use strict'

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
        console.log('Opening to: ' + path)
        browser.url('/' + path)
    }

    isLoaded(essentials, timeout = 5000, pollInterval = 500) {

        for (const key in essentials) {
            let loaded = true
            try {
                browser.waitUntil(() => {
                    return $(essentials[key]).isVisible()
                }, timeout, `${key} is still not visible after ${timeout}s`, pollInterval)
            } catch (e) {
                loaded = false
            }
            return loaded
        }
    }

    newSession() {
        browser.reload()
    }
}

module.exports = Page