var http = require('http')
var fs = require('fs')
var connect = require('connect')
var logger = require('morgan')
var staticServe = require('serve-static')
var path = require('path')

var writeStream = fs.createWriteStream('./log.txt', {
  'flags': 'a',
  'encoding': 'utf8',
  'mode': 0666
})

http.createServer(connect()
    .use(logger('dev', {stream: writeStream}))
    .use(staticServe(path.join(__dirname, 'public_html')))
).listen(8124)