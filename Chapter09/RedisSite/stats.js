var redis = require('redis')
const { json } = require('body-parser')

module.exports = function getStats() {
  return function getStats(req, res, next) {
    // create Redis Client
    var client = redis.createClient()

    client.on('error', function (err) {
      console.log('Error ' + err)
    })

    // set database to 2
    client.select(2)

    // add IP to set
    client.sadd('ip', req.socket.remoteAddress)

    // increment resource count
    client.hincrby('myurls', req.url, 1)

    client.quit()

    next()
  }
}