
let app = require('./app').start(80)

app.on('root', function (response) {
    response.write('I\'m in root')
})
