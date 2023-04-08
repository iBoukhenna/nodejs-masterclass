
let express = require('express')
let app = express()

let bodyParser = require('body-parser')
let session = require('express-session')

// Template
app.set('view engine', 'ejs')

// Middleware
app.use('/assets', express.static('public'))

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(session({
    secret: 'azertyuiio',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))

app.use(require('./middlewares/flash'))

// Routes
app.get('/', function (request, response) {
    console.log(request.session)
    response.render('pages/index')
})

app.post('/', (request, response) => {
    if (request.body.message === undefined || request.body.message === '') {
        request.flash('error', 'the message is empty')
        response.redirect('/')
    }
})

app.listen(80)
