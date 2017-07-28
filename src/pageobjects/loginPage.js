'use strict'
var Page = require('./page')
const UiMap = require('../uimap/loginMap')

var validUsername = 'tsao+wdio@photoshelter.com'
var validPassword = 'testingPassword'

const uimap = new UiMap()

class LoginPage extends Page {

    open() {
        super.open('login')
    }

    isLoaded() {
        return super.isLoaded(uimap.isLoaded)
    }

    validLogin() {
        console.log('validLogin Here I am')
        let browserName = browser.desiredCapabilities.browserName
        console.log(browserName)
        browser.setValue(uimap.username, validUsername)
        browser.setValue(uimap.password, validPassword)
        browser.click(uimap.submit)
        browser.waitUntil(function() {
            return !browser.getUrl().match(/^https:\/\/www\.photoshelter\.com\/login/)
        }, 5000, 'Login Failed')
        return browser.getUrl()
    }

    invalidLogin() {

        browser.click(uimap.username)
        browser.keys(validUsername)
        browser.click(uimap.password)
        browser.keys('wrong_password')

        browser.click(uimap.submit)
        return $(uimap.errMsg).getText()
    }
    logout() {
        super.open('logout')
    }
}

module.exports = new LoginPage()