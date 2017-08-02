'use strict'
var Page = require('./page')
const UiMap = require('../uimap/loginMap')
const muHome = require('./muHome')


// make env.var
const validUsername = process.env.LIBRIS_USERNAME
const validPassword = process.env.LIBRIS_PASSWORD

const uimap = new UiMap()

class LoginPage extends Page {

    open() {
        super.open('login')
        var isLoginLoaded = this.isLoaded()
        console.log('isLoaded ' + isLoginLoaded)
        return isLoginLoaded
    }

    isLoaded() {
        return super.isLoaded(uimap.isLoaded)
    }


    submitValidLogin() {
        browser.setValue(uimap.username, validUsername)
        browser.setValue(uimap.password, validPassword)
        browser.click(uimap.submit)
        return muHome
    }
}

module.exports = new LoginPage()
