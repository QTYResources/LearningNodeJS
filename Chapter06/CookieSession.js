var http = require('http')
var connect = require('connect')
var cookieSession = require('cookie-session')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var staticServe = require('serve-static')

// 清除 session 数据
function clearSession(req, res, next) {
  if ('/clear' == req.url) {
    req.session = null
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  } else {
    next()
  }
}

// 跟踪用户
function trackUser(req, res, next) {
  res.session.ct = req.session.ct || 0
  req.session.username = req.session.username || req.cookies.username
  console.log(req.cookies.username + ' requested ' + req.session.ct++ + ' resoureces this session')
  next()
}

// cookie 和 session
var app = connect()
    .use(logger('dev'))
    .use(cookieParser('mumble'))
    .use(cookieSession({
      name: 'session',
      keys: ['tracking']
    }))
    .use(clearSession)
    .use(trackUser)

// 静态服务器
app.use(staticServe('./public_html'))
// 启动服务器开始监听
http.createServer(app).listen(8124)
console.log('Server listening on port 8124')
