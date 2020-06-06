var fs = require('fs')

exports.read = test_and_load

function test_and_load(filename) {
  return new Promise(function (resolve, reject) {
    fs.stat(filename, function (err, stat) {
      if (err) {
        reject(err)
      } else {
        // Filter out non-files
        if (!stat.isFile()) {
          resolve()
          return
        }
        
        // Otherwise read the file in
        fs.readFile(filename, 'utf8', function (err, data) {
          if (err) {
            reject(err)
          } else {
            resolve(data)
          }
        })
      }
    })
  })
}