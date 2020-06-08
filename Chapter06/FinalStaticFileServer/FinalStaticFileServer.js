var http = require('http')
var url = require('url')
var fs = require('fs')
var mime = require('mime')

var base = '../public_html'

http.createServer(function (req, res) {
  pathname = base + req.url
  console.log(pathname)

  fs.stat(pathname, function (err, stats) {
    if (err) {
      res.writeHead(404)
      res.write('Bad request 404\n')
      res.end()
    } else if (stats.isFile()) {
      // 类型
      var type = mime.getType(pathname)
      console.log(type)
      res.setHeader('content-Type', type)

      // 200 status - 找到文件，无错误
      res.statusCode = 200

      // 创建文件流读取
      var file = fs.createReadStream(pathname)
      file.on('open', function () {
        file.pipe(res)
      })
      file.on('error', function (err) {
        console.log(err)
      })
    } else {
      res.writeHead(403)
      res.write('Directory access is forbidden')
      res.end()
    }
  })
}).listen(8124)
console.log('Server running at 8124/')