var util = require('util')
var fs = require('fs')

var writeStream = fs.createWriteStream('./log.txt', {
  'flags': 'a',
  'encoding': 'utf8',
  'mode': 0666
})

try {
  // get list of files
  fs.readdir('./data/', function (err, files) {
    // for each file
    files.forEach(function (name) {
      // modify contents
      fs.readFile('./data/' + name, 'utf8', function(err, data) {
        if (err) throw err
        var adjData = data.replace(/somecompany\.com/g, 'burningbird.net')
        // var adjData = data.replace(/burningbird\.net/g, 'somecompany.com')

        // write to file
        fs.writeFile('./data/' + name, adjData, function (err) {
          if (err) throw err

          // log write 
          writeStream.write('changed ' + name + '\n', 'utf8', function (err) {
            if (err) throw err
            console.log('finished ' + name)
          })
        })
      })
    })

    console.log('all finished')
  })
} catch (err) {
  console.error(util.inspect(err))
}