var repl = require('repl')
var context = repl.start('>> ', null, null, null, true).context

// 预加载模块
context.http = require('http')
context.util = require('util')
context.os = require('os')
