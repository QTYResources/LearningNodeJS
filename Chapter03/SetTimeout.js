var http = require('http')
var fs = require('fs')

// timer to open file and read contents to HTTP response object
function openAndReadFile(filename, res) {
  console.log('opening ' + filename)
  // open and read in file contents
  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) {
      res.write('Could not find or open file for reading\n')
    } else {
      res.write(data)
    }
    // reponse is done
    res.end()
  })
}

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  setTimeout(openAndReadFile, 200, 'main.txt', res)
}).listen(8124)

console.log('Server running on 8124/')
