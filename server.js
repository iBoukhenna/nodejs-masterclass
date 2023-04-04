
var http = require('http')

let server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
    response.end('Hello')
}).listen(80)