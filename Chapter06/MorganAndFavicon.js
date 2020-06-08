var connect = require('connect')
var logger = require('morgan')
var favicon = require('serve-favicon')
var http = require('http')
var path = require('path')

var app = connect()
    .use(favicon(path.join('./public_html', 'favicon.ico')))
    .use(logger('dev'))
    .use(function (req, res) {
      res.end('Hello World\n')
    })

http.createServer(app).listen(8124)