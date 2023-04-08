
let app = require('express')()

app.get('/', function (request, response) {
    response.send('Hello')
})

app.listen(80)
