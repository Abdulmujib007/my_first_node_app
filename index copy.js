const http = require('http')

const server  = http.createServer((request,response) => {
    response.writeHead(200,{'content-type':'text/html'})
    response.end("<h1>Hey,it's me again</h1>")
})
const PORT = 3001

server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})