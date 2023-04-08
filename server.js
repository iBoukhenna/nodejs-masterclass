
let app = require('express')()

app.set('view engine', 'ejs')

app.get('/', function (request, response) {
    response.render('pages/index', {test: 'Hello'})
})

app.listen(80)
