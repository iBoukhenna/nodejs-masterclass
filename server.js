
let app = require('express')()

app.get('/', function (request, response) {
    response.send('Hello you are in root')
})

app.get('/demo', (request, response) => {
    response.send('Hello')
})

app.listen(80)
