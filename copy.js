let fs = require('fs')

let file = 'demo.mp4';
let read = fs.createReadStream(file)

read.on('data', (chunk) => {
    console.log('I read ' + chunk.length)
})

read.on('end', () => {
    console.log('I finished read')
})
