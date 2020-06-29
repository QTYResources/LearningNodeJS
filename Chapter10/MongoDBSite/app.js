/**
 * 测试用例：
 * curl --request GET http://localhost:8124/widgets
 * curl --request GET http://localhost:8124/widgets/new
 * curl --request POST http://localhost:8124/widgets/create --data 'widgetname=Smallwidget&widgetprice=100.00'
 * curl --request PUT http://localhost:8124/widgets/2 --data 'widgetname=Smallwidget&widgetprice=75.00'
 * curl --request DELETE http://localhost:8124/widgets/2
 */
var express = require('express')
var favicon = require('serve-favicon')
var logger = require('morgan')
var staticServe = require('serve-static')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var http = require('http')
var path = require('path')
var stylus = require('stylus')
var mongoose = require('mongoose')
var map = require('./mapRoute')

var app = express()

// MongoDB
mongoose.connect('mongodb://127.0.0.1/WidgetDB', {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('open', function () {
  console.log('Connected to Mongosse')
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon('./public/images/favicon.ico'))
app.use(logger('dev'))
app.use(stylus.middleware({
  src: path.join(__dirname, 'views/stylus'),
  dest: path.join(__dirname, 'public/stylesheets')
}))
app.use(staticServe('./public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

var prefixes = ['widgets']

// map route to controller
prefixes.forEach(function (prefix) {
  map.mapRoute(app, prefix)
})

app.use(function (req, res, next) {
  throw new Error(req.url + ' not found')
})
app.use(function (err, req, res, next) {
  console.log(err)
  res.send(err.message)
})

http.createServer(app).listen(8124)

console.log('Express server listening on port 8124')