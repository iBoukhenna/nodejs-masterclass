
let express = require('express')
let app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', function (request, response) {
    response.render('pages/index', {test: 'Hello'})
})

app.listen(80)
