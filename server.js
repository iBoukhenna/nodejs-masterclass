
var http = require('http')

let server = http.createServer()
server.on('request', (request, response) => {
    response.writeHead(200)
    response.end('Hello')
})
server.listen(80)