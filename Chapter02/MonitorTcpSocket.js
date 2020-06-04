var repl = require('repl')
var net = require('net')

// 设置 ignoreUndefined 为 true，启动 REPL
repl.start('node via stdin> ', null, null, null, true)
net.createServer(function (socket) {
  repl.start('node via TCP socket> ', socket)
}).listen(8124)