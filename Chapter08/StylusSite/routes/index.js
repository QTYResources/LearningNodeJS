var express = require('express')

var router = express.Router()

// in memory data store
var widgets = [
  {
    id: 1,
    name: 'The Great Widget',
    price: 1000.00,
    desc: 'A widget of great value'
  },
  {
    id: 2,
    name: 'Second Widget',
    price: 13.88,
    desc: 'This is the second widget from the Widget factory.'
  },
  {
    id: 3,
    name: 'Third Widget',
    price: 35.00,
    desc: 'Why stop with two?'
  },
  {
    id: 4,
    name: 'Baby Widget',
    price: 1.99,
    desc: 'A little widget, for cheap people.'
  },
  {
    id: 5,
    name: 'Cats and Dogs Widgets',
    price: 9.99,
    desc: 'Widgets for our best friends.'
  },
  {
    id: 6,
    name: 'The Ultimate Widget',
    price: 9999.99,
    desc: 'Because there has to be an ultimate. It\'s in the manual'
  }
]

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Widgets', widgets: widgets})
})

module.exports = router