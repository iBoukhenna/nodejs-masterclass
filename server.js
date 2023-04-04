
let http = require('http')
let fs = require('fs')
let url = require('url')

let server = http.createServer()
server.on('request', (request, response) => {
    let query = url.parse(request.url, true).query
    let name = (query.name === undefined) ? 'Anonyme' : query.name
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end("file not found")
        } else {
            response.writeHead(200, {'Content-type': 'text/html;'})
            data = data.replace('{{ name }}', name)
            response.end(data)
        }
    })
})
server.listen(80)