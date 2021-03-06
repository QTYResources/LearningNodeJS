var http = require('http')
var connect = require('connect')
var serveStatic = require('serve-static')
var logger = require('morgan')
var path = require('path')

http.createServer(connect()
    .use(logger('dev'))
    .use(serveStatic(path.join(__dirname, 'public_html')))
).listen(8124)