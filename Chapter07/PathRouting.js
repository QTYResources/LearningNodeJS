var express = require('express')
var http = require('http')

var app = express()

app.get(/^\/node?(?:\/(\d+)(?:\.\.(\d+))?)?/, function (req, res ) {
  console.log(req.params)
  res.send(req.params)
})

app.get('/content/*', function (req, res) {
  res.send(req.params)
})

app.get('/products/:id/:operation?', function (req, res) {
  console.log(req)
  res.send(req.params.operation + ' ' + req.params.id)
})

http.createServer(app).listen(8124)

console.log('Express server listening on port 8124')