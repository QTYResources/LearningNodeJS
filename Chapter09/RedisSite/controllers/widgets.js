var redis = require('redis')

// in memory data store
var widgets = [
  {
    id: 1,
    name: 'My Special Widget',
    price: 100.00,
    desc: 'A widget beyond price'
  }
]

// index listing of widgets at /widgets/
exports.index = function (req, res) {
  res.render('widgets/index', {title: 'Widgets', widgets: widgets})
}

// display new widget form
exports.new = function (req, res) {
  var filepath = require('path').normalize(__dirname + "/../public/widgets/new.html")
  res.sendFile(filepath)
}

// add a widget
exports.create = function (req, res) {
  var index = widgets.length + 1
  widgets[widgets.length] = {
    id: index,
    name: req.body.widgetname,
    price: parseFloat(req.body.widgetprice),
    desc: req.body.widgetdesc
  }
  console.log(widgets[index - 1])
  res.render('widgets/added', {title: 'Widget Added', widget:widgets[index - 1]})
}

// show a widget
exports.show = function (req, res) {
  var index = parseInt(req.params.id) - 1
  if (!widgets[index]) {
    res.send('There is no widget with id of ' + req.params.id)
  } else {
    res.render('widgets/show', {title: 'Show Widget', widget: widgets[index]})
  }
}

// delete a widget
exports.destroy = function (req, res) {
  var index = req.params.id - 1
  delete widgets[index]

  console.log('deleted ' + req.params.id)
  res.send('deleted ' + req.params.id)
}

// display eidt form 
exports.edit = function (req, res) {
  var index = parseInt(req.params.id) - 1
  res.render('widgets/edit', {title: 'Edit Widget', widget:widgets[index]})
}

// update a widget
exports.update = function (req, res) {
  var index = parseInt(req.params.id) - 1
  widgets[index] = {
    id: index + 1,
    name: req.body.widgetname,
    price: parseFloat(req.body.widgetprice),
    desc: req.body.widgetdesc
  }
  console.log(widgets[index])
  res.render('widgets/added', {title: 'Widget Edited', widget: widgets[index]})
}

// stats
exports.stats = function (req, res) {
  var client = redis.createClient()

  client.select(2)

  // Redis transaction to gather data
  client.multi()
        .smembers('ip')
        .hgetall('myurls')
        .exec(function (err, results) {
          var ips = results[0]
          var urls = results[1]
          res.render('widgets/stats', {title: 'Stats', ips: ips, urls: urls})
          client.quit()
        })
}