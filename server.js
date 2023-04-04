const EventEmitter = require('events')

let http = require('http')

let App = {
    start: function (port) {
        let myEmitter = new EventEmitter()
        let server = http.createServer((request, response) => {
            response.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
            if (request.url === '/') {
                myEmitter.emit('root', response)
            }
            response.end()
        }).listen(port)
        return myEmitter
    }
}

let app = App.start(80)
app.on('root', function (response) {
    response.write('I\'m in root')
})
