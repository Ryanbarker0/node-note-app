console.log('Starting App.js')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes')

// console.log(_.isString(true))
// console.log(_.isString('A name'))

var filteredArray = _.uniq(['Ryan', 1, 'Ryan', 1, 2, 3, 4])

console.log(filteredArray)

// var res = notes.addNote(5, 4)
// console.log(res)

// var user = os.userInfo()

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//     if (err) {
//         console.log('Unable to write to file')
//     }
// })