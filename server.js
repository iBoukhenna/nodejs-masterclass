const EventEmitter = require('events')
let myListner = new EventEmitter()
myListner.once('jump', function (a, b) {
    console.log('I jumped', a, b)
})

myListner.emit('jump', 10, 20)
myListner.emit('jump')
myListner.emit('jump', 12)
