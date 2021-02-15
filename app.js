const http = require('http')
const fs = require('fs')
const port = process.env.port || 3000;

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Centent-Type': 'text/html' })
    fs.readFile('index.html', function(error, data) {
        if (error){
            res.writeHead(404)
            res.write('error file not found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
if (error) {
    console.log('Smething went Wrong', error)
} else {
    console.log('Server is listening on port ' + port)
}
})