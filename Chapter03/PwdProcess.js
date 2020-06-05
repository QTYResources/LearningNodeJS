var spawn = require('child-process').spawn

var pwd = spawn('pwd')

pwd.stdout.on('data', function (data) {
  console.log('stdout: ' + data)
})

pwd.stderr.on('data', function (data) {
  console.log('stderr: ' + data)
})

pwd.on('exit', function (code) {
  console.log('child process exited with code ' + code)
})