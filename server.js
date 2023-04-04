
let http = require('http')
let fs = require('fs')

let server = http.createServer()
server.on('request', (request, response) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end("file not found")
        } else {
            response.writeHead(200, {'Content-type': 'text/html;'})
            response.end(data)
        }
    })
})
server.listen(80)