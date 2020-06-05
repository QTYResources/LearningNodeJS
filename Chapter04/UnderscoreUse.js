var _ = require('underscore')

_.each(['apple', 'cherry'], function (fruit) { console.log(fruit) })

_.mixin({
  betterWithNode: function (str) {
    return str + ' is better with node'
  }
})

console.log(_.betterWithNode('chocolate'))