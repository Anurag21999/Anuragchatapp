const express = require('express')
const socket = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
SERVER_PORT= process.env.PORT||4848
const io = socket(server)

io.on('connection', (socket) => {
console.log(socket.id)
    socket.on("send_chat", (data) => {
        io.emit("recieve_chat", data)
    })
    socket.on("user_name",(data)=>{
        io.emit("recieve_username",data)
    })
})

app.use('/', express.static(__dirname + '/public'))

server.listen(SERVER_PORT, () => {
    console.log("Server started on http://localhost:4848")
})