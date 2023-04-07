let fs = require('fs')

let file = 'demo.mp4';

fs.stat(file, (err, stat) => {
    let total = stat.size
    let progress = 0
    let read = fs.createReadStream(file)
    let write = fs.createWriteStream('copy.mp4')
    let write2 = fs.createWriteStream('copy2.mp4')

    read.on('data', (chunk) => {
        progress += chunk.length
        console.log('I read ' + Math.round(100*progress/total) + '%')
    })
    
    read.pipe(write)
    read.pipe(write2)

    write.on('finish', () => {
        console.log('the file is copied')
    })
    
})
