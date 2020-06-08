var express = require('express')
var http = require('http')
var favicon = require('serve-favicon')
var logger = require('morgan')
var bodyParser = require('body-parser')
var staticServe = require('serve-static')
var methodOverride = require('method-override')

var app = express()

app.use(favicon('./public_html/favicon.ico'))
app.use(logger('dev'))
app.use(staticServe('./public_html'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

//in memory data store
var widgets = [
  {
    id: 1, 
    name: 'My Special Widget',
    price: 100.00,
    descr: 'A widget beyond price'
  }
]

// index for /widgets/
app.get('/widgets', function (req, res) {
  res.send(widgets)
})

// show a specific widget
app.get('/widgets/:id', function(req, res) {
  var index = parseInt(req.params.id) - 1
  if (!widgets[index]) {
    res.send('There is no widget with id of ' + req.params.id)
  } else {
    res.send(widgets[index])
  }
})

// add a widget 
app.post('/widgets/add', function (req, res) {
  var index = widgets.length + 1
  widgets[widgets.length] = {
    id: index,
    name: req.body.widgetname,
    price: parseFloat(req.body.widgetprice),
    descr: req.body.widgetdesc
  }
  console.log(widgets[index - 1])
  res.send('Widget ' + req.body.widgetname + ' added with id ' + index)
})

// delete a widget
app.delete('/widgets/:id/delete', function (req, res) {
  var index = req.params.id - 1
  delete widgets[index]

  console.log('delted ' + req.params.id)
  res.send('deleted ' + req.params.id)
})

// update / edit a widget
app.put('/widgets/:id/update', function (req, res) {
  var index = parseInt(req.params.id) - 1
  widgets[index] = {
    id: index,
    name: req.body.widgetname,
    price: parseFloat(req.body.widgetprice),
    descr: req.body.widgetdesc
  }
  console.log(widgets[index])
  res.send('Updated ' + req.params.id)
})

http.createServer(app).listen(8124)

console.log('Express server listening on port 8124')