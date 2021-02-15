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

function css(request, response) {
    if (request.url === '/styles.css') {
      response.writeHead(200, {'Content-type' : 'text/css'});
      var fileContents = fs.readFileSync('./views/styles.css', {encoding: 'utf8'});
      response.write(fileContents);
    }
  }  

server.listen(port, function(error) {
if (error) {
    console.log('Smething went Wrong', error)
} else {
    console.log('Server is listening on port ' + port)
}
})