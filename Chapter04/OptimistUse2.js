#!/usr/local/bin/node
var argv = require('optimist').argv

console.log(argv.one + ' ' + argv.two)

// ./OptimistUse2.js -one="My" --two="Name"