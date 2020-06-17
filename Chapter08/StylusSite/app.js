var http = require('http')
var express = require('express')
var logger = require('morgan')
var favicon = require('serve-favicon')
var staticServe = require('serve-static')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var path = require('path')
var stylus = require('stylus')
var indexRouter = require('./routes/index')

var app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(favicon(__dirname + '/public/images/favicon.ico'))
app.use(logger('dev'))
app.use(stylus.middleware(path.join(__dirname, 'public/stylesheets')))
app.use(staticServe(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.get('/', indexRouter)

app.use(function (req, res, next) {
  throw new Error(req.url + ' not fount')
})

app.use(function (err, req, res, next) {
  console.log(err)
  res.send(err.message)
})

http.createServer(app).listen(8124)

console.log('Express server listening on port 8124')