let _ = require('lodash')

console.log(_.map([1, 2, 3], function(n) {
    return n*3;
}))

let app = require('./app').start(80)

app.on('root', function (response) {
    response.write('I\'m in root')
})
