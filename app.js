console.log('Starting App.js')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

var res = notes.addNote()
console.log(res)

// var user = os.userInfo()

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//     if (err) {
//         console.log('Unable to write to file')
//     }
// })