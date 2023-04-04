
var http = require('http')

let server = http.createServer()
server.on('request', (request, response) => {
    console.log('Hello')
})
server.listen(80)