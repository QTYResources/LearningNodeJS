var redis = require('redis')
var http = require('http')

var messageServer = http.createServer()

// listen for incoming request
messageServer.on('request', function (req, res) {
  // first filter out icon request
  if (req.url === '/favicon.ico') {
    res.writeHead(200, { 'Content-Type': 'image/x-icon' })
    res.end()
    return
  }

  // create R
})