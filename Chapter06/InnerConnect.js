var http = require('http')
var path = require('path')
var connect = require('connect')
var logger = require('morgan')
var favicon = require('serve-favicon')

http.createServer(connect()
    .use(favicon(path.join('./public_html', 'favicon.ico')))
    .use(logger('dev'))
    .use(function (req, res) {
      res.end('Hello World\n')
    })
).listen(8124)