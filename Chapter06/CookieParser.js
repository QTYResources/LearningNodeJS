/**
 * 测试网址： http://localhost:8124/cookie.html
 */
var connect = require('connect')
var http = require('http')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var staticServe = require('serve-static')

var app = connect()
    .use(logger('dev'))
    .use(cookieParser())
    .use(function (req, res, next) {
      console.log('tracking ' + req.cookies.username)
      next()
    })
    .use(staticServe('./public_html'))

http.createServer(app).listen(8124)
console.log('Server listening on port 8124')