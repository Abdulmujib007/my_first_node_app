const express = require('express')

const server = express()

const notes = 'i want to sleep,i want to eat,i want to make money,i want to rest,i want to busy very beautiful cars'.split(',')

server.get('/',(req,res) => {
    res.send('<h1>Hello party peeps</h1>')
})
server.get('/api/notes',(req,res) => {
    res.send({
        notes,
        total:notes.length
    })
})

server.get('/api/notes/:index', (req,res) => {
    const index = Number(req.params.index)
    res.send(notes[index])
})
const PORT = 3001
server.listen(PORT,() => {
    console.log(`server is running on http/localhost:${PORT}`)
})