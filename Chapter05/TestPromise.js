var File = require('./UsePromise.js')

File.read('dsf.txt').then(function(data) {
  console.log("data: " + data)
}).catch(function (err) {
  console.log("error: " + err)
})
