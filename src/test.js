
const io = require('socket.io-client')

const socket = io('http://localhost:3000')

socket.on('connect', () => console.log('connected'))

socket.on('disconnect', () => console.log('disconnected'))

socket.on('msg', console.log)
