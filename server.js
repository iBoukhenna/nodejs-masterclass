
let express = require('express')
let app = express()

let bodyParser = require('body-parser')

// Template
app.set('view engine', 'ejs')

// Middleware
app.use('/assets', express.static('public'))

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


// Routes
app.get('/', function (request, response) {
    response.render('pages/index', {test: 'Hello'})
})

app.post('/', (request, response) => {
    if (request.body.message === undefined || request.body.message === '') {
        response.render('pages/index', {error: 'the message is empty'})
    }
})

app.listen(80)
