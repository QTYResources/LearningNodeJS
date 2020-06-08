var express = require('express')
var http = require('http')
var favicon = require('serve-favicon')
var logger = require('morgan')
var staticServe = require('serve-static')
var bodyParser = require('body-parser')

var app = express()

app.use(favicon('./public_html/favicon.ico'))
app.use(logger('dev'))
app.use(staticServe('./public_html'))
app.use(bodyParser.urlencoded({ extended: false }))

// in memory data store
var widgets = [
  {
    id: 1,
    name: 'My Special Widget',
    price: 100.00,
    descr: 'A widget beyond price'
  }
]

// add widget
app.post('/widgets/add', function (req, res) {
  var index = widgets.length + 1
  widgets[widgets.length] = {
    id: index,
    name: req.body.widgetname,
    price: parseFloat(req.body.widgetprice),
    descr: req.body.widgetdesc
  }
  console.log('added ' + widgets[index - 1])
  res.send('Widget ' + req.body.widgetname + ' added with id ' + index)
})

// show widget
app.get('/widgets/:id', function (req, res) {
  var index = parseInt(req.params.id) - 1
  if (!widgets[index]) {
    res.send('There is no widget with id of ' + req.params.id)
  } else {
    res.send(widgets[index])
  }
})

http.createServer(app).listen(8124)

console.log('Express server listening on port 8124')