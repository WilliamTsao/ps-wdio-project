'use strict'
var Page = require('./page')
const UiMap = require('../uimap/loginMap')
const MUHome = require('./MUHome')


// make env.var
var validUsername = 'tsao+wdio@photoshelter.com'
var validPassword = 'testingPassword'

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
        return MUHome
    }
}

module.exports = new LoginPage()