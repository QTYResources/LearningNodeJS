var inputChecker = require('inputcheck').inputChecker

// 测试新对象和事件处理
var ic = new inputChecker('Shelley', 'output')

ic.on('write', function (data) {
  this.writeStream.write(data, 'utf8')
})

ic.addListener('echo', function (data) {
  console.log(this.name + ' wrote ' + data)
})

ic.on('end', function () {
  process.exit()
})

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', function (input) {
  ic.check(input)
})