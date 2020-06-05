var spawn = require('child-process').spawn
var find = spawn('find', ['.', '-ls'])
var grep = spawn('grep', ['test'])

grep.stdout.setEncoding('utf8')

// direct results of find to grep
find.stdout.on('data', function (data) {
  grep.stdin.write(data)
})

// now run grep and output results
grep.stdout.on('data', function (data) {
  console.log(data)
})

// error handling for both
find.stderr.on('data', function (data) {
  console.log('grep stderr: ' + data)
})

grep.stderr.on('data', function (data) {
  console.log('grep stderr: ' + data)
})