
const io = require('socket.io-client')

const socket = io('http://localhost:9000')

socket.on('connect', () => console.log('connected'))

socket.on('disconnect', () => console.log('disconnected'))

socket.on('message', console.log)
