var http = require('http')
var path = require('path')
var fs = require('fs')

var base = '../public_html'

http.createServer(function (req, res) {
  pathname = base + req.url;
  console.log(pathname)

  fs.exists(pathname, function (exists) {
    if (!exists) {
      res.writeHead(404)
      res.write('Bad request 404\n')
      res.end()
    } else {
      res.setHeader('Content-Type', 'text/html')

      // Status code: 200 -- 找到文件，无错误
      res.statusCode = 200

      // 创建读取流，传输内容
      var file = fs.createReadStream(pathname)
      file.on('open', function () {
        file.pipe(res)
      })
      file.on('error', function (err) {
        console.log(err)
      })
    }
  })
}).listen(8124)

console.log('Server running at 8124/')