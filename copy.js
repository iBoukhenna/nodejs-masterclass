let fs = require('fs')

fs.readFile('demo.mp4', (err, data) => {
    if (err) throw err
    fs.writeFile('copy.mp4', data, (err) => {
        if (err) throw err
        console.log('the file was successfully copied')
    })
})