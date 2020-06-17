var express = require('express')
var http = require('http')
var favicon = require('serve-favicon')
var logger = require('morgan')
var staticServe = require('serve-static')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var path = require('path')

var indexRouter = require('./routes/index')

var app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
app.use(logger('dev'))
app.use(staticServe(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.get('/', indexRouter)

http.createServer(app).listen(8124)

console.log('Express server listening on port 8124')