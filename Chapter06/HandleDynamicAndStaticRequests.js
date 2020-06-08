var connect = require('connect')
var http = require('http')
var fs = require('fs')
var crossroads = require('crossroads')
var httpProxy = require('http-proxy')
var favicon = require('serve-favicon')
var staticServe = require('serve-static')
var logger = require('morgan')

var proxy = httpProxy.createProxyServer({})

// 创建代理，监听请求
http.createServer(function (req, res) {
  if (req.url.match(/^\/node\//)) {
    proxy.web(req, res, { target: 'http://localhost:8000' })
  } else {
    proxy.web(req, res, { target: 'http://localhost:8124' })
  }
}).listen(9000)

// 对动态资源的请求添加路由
crossroads.addRoute('/node/{id}/', function (id) {
  console.log('accessed node ' + id)
})

// 动态文件服务器
http.createServer(function (req, res) {
  crossroads.parse(req.url)
  res.end('that\'s all!')
}).listen(8000)

// 静态文件服务器
http.createServer(connect()
    .use(favicon('./public_html/favicon.ico'))
    .use(logger('dev'))
    .use(staticServe('./public_html'))
).listen(8124)