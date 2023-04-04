
let http = require('http')
let url = require('url')

let server = http.createServer()
server.on('request', (request, response) => {
    response.writeHead(200)
    let query = url.parse(request.url, true).query
    if (query.name === undefined) {
        response.write('Hello Anonyme')
    } else {
        response.write('Hello ' + query.name)
    }
    response.end()
})
server.listen(80)