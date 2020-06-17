var http = require('http')
var ejs = require('ejs')
var fs = require('fs')

// 创建 HTTP 服务器
http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type':'text/html'})
  
  // 加载数据
  var names = ['Joe', 'Mary', 'Sue', 'Mark']
  var title = 'Testing EJS'

  // 生成或者处理错误信息
  // ejs.renderFile(__dirname + '/public_html/ejs-example.ejs', {title: 'testing', names:names}, function (err, result) {
  //   if (!err) {
  //     res.end(result)
  //   } else {
  //     res.end('An error occurred accessing page')
  //     console.log(err)
  //   }
  // })

  var str = fs.readFileSync(__dirname + '/public_html/ejs-example.ejs', 'utf8')
  var html = ejs.render(str, {names: names, title: title})
  res.end(html)
}).listen(8124)
console.log('Server running on 8124/')