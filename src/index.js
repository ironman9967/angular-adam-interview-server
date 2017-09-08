
const io = require('socket.io')
const uuidv4 = require('uuid/v4')

const server = new io()

const messages = [
  'this is a test entry',
  'hello, world!',
  'another message',
  'yo'
]

const port = 9000

let rnd = Math.random()

server.on('connection', (socket) => {
  socket.logEmitter = setInterval(() => {
    rnd = Math.random()
    socket.emit('message', {
      id: uuidv4(),
      message: messages[Math.floor(rnd * 4)]
    })
  }, rnd * 3 * 1000)
  socket.on('remove', msg => {
    console.log(msg.id, 'removed')
  })
})

server.on('disconnect', (socket) => {
  if (socket.logEmitter) {
    clearInterval(socket.logEmitter)
  }
})

server.listen(port)

console.log('server up on', port)
