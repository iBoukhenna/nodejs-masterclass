
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

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(require('./middlewares/flash'))

// Routes
app.get('/', function (request, response) {
    let Message = require('./models/message')
    Message.all(function (messages) {
        response.render('pages/index', {messages: messages})
    })
})

app.post('/', (request, response) => {
    if (request.body.message === undefined || request.body.message === '') {
        request.flash('error', 'the message is empty')
        response.redirect('/')
    } else {
        let Message = require('./models/message')
        Message.create(request.body.message, function () {
            request.flash('success', 'done')
            response.redirect('/')
        })
    }
})

app.get('/message/:id', (request, response) => {
    console.log(process.env.NODE_ENV);
    let Message = require('./models/message')
    Message.find(request.params.id, function (message) {
        response.render('pages/show', {message: message})
    })
})

app.get('/comments', function (request, response) {
    let Message = require('./models/message')
    Message.list(function (messages) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(messages));
        response.end();
    })
})

app.get('/comments/:id', function (request, response) {
    let Message = require('./models/message')
    Message.find(request.params.id, function (message) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(message.row));
        response.end();
    })
})

app.post('/comments', (request, response) => {
    if (request.body.name === undefined || request.body.name === '') {
        request.flash('error', 'the message is empty')
        response.redirect('/')
    } else {
        let Message = require('./models/message')
        Message.save(request.body.name, request.body.content, function () {
            response.end();
        })
    }
})

app.put('/comments/:id', (request, response) => {
    if (request.body.name === undefined || request.body.name === '') {
        request.flash('error', 'the message is empty')
        response.redirect('/')
    } else {
        let Message = require('./models/message')
        Message.update(request.params.id, request.body.name, request.body.content, function () {
            response.end();
        })
    }
})

app.listen(80)
