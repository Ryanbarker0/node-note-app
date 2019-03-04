const fs = require('fs')

const dataBuffer = fs.readFileSync('notes.json')
const data = JSON.parse(dataBuffer)

const updateJsonInfo = (name, age) => {
    data.name = name
    data.age = age
}

updateJsonInfo('Ryan', 26)

fs.writeFileSync('notes.json', JSON.stringify(data))
