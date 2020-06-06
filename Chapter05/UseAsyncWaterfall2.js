var fs = require('fs')
var async = require('async')

var _dir = './data/'
var modified = []

var writeStream = fs.createWriteStream('./log.txt', {
  'flags': 'a',
  'encoding': 'utf8',
  'mode': 0666
})

try {
  async.waterfall([
    function readDir(callback) {
      fs.readdir(_dir, function (err, files) {
        callback(err, files)
      })
    },
    function loopFiles(files, callback) {
      async.forEachOf(files, function (value, key, callback) {
        async.waterfall([
          function checkFile(callback) {
            fs.stat(_dir + value, function(err, stats) {
              callback(err, stats, value)
            })
          },
          function readData(stats, file, callback) {
            if (stats.isFile()) {
              fs.readFile(_dir + file, 'utf8', function (err, data) {
                callback(err, file, data)
              })
            }
          },
          function modify(file, text, callback) {
            var adjdata = text.replace(/somecompany\.com/g, 'burningbird.net')
            // var adjdata = text.replace(/burningbird\.net/g, 'somecompany.com')
            callback(null, file, adjdata)
          },
          function writeData(file, text, callback) {
            fs.writeFile(_dir + file, text, function (err) {
              callback(err, file)
            })
          },
          function logChange(file, callback) {
            writeStream.write('changed ' + file + '\n', 'utf8', function (err) {
              callback(err, file)
              modified.push(file)
            })
          }
        ], function (err, result) {
          if (err) throw err
          console.log('modified ' + result)
          callback(err, modified)
        })
      }, function (err) {
        if (err) throw err
        callback(err, modified)
      })
    },
  ], function (err, result) {
    if (err) throw err
    console.log('modified ' + result)
  })
} catch (err) {
  console.log(err)
}