// 运行命令后直接输入要传输的数据回车即可
// 在启动程序并连接Socket后会打印出要传输的数据，
// 一条一条数据拷贝粘贴再回车即可
var net = require('net')
const { forEach } = require('async')

var client = new net.Socket()
client.setEncoding('utf8')

var datas = [
  {
    'member': 365,
    'first_name': 'Mark',
    'last_name': 'Twain',
    'score': 53455,
    'date': '12/10/2011'
  },
  {
    'member': 400,
    'first_name': 'Ada',
    'last_name': 'Lovelace',
    'score': 53455,
    'date': '10/10/1840'
  },
  {
    'member': 925,
    'first_name': 'Shelley',
    'last_name': 'Powers',
    'score': 10000,
    'date': '01/01/2012'
  },
  {
    'member': 234,
    'first_name': 'Abe',
    'last_name': 'Lincoln',
    'score': 20000,
    'date': '03/10/2012'
  },
  {
    'member': 965,
    'first_name': 'Grace',
    'last_name': 'Hopper',
    'score': 49555,
    'date': '03/24/1950'
  },
]

// connect to server
client.connect('8124', 'localhost', function () {
   console.log('connect to server')
   for(var i = 0; i < datas.length; i++) {
     var data = datas[i]
    //  setTimeout(function() {
    //   client.write(JSON.stringify(datas[i]))
    //  }, i * 1000)
    console.log(JSON.stringify(datas[i]))
   }
})

// prepare for input from terminal
process.stdin.resume()

// when receive data, send to server
process.stdin.on('data', function (data) {
   client.write(data)
})

// when receive data back, print to console 
client.on('data', function (dat) {
   console.log(data)
})

// when server closed
client.on('close', function () {
   console.log('connection is closed')
})