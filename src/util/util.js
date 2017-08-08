'use strict'


class Util {
    randomString(length = 10) {
        let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let result = ''
        for (let i = length; i > 0; --i) {
            result += chars[Math.round(Math.random() * (chars.length - 1))]
        }
        console.log(`Random String Created: ${result}`)
        return result
    }
    deleteAllCookies(){
        let cookies = browser.getCookie()
        cookies.forEach((cookie)=>{
            browser.deleteCookie(cookie.name)
        })
    }

}

module.exports = Util