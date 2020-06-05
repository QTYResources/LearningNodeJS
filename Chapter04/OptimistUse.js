#!/usr/local/bin/node
var argv = require('optimist').argv
console.log(argv.o + " " + argv.t)

// ./OptimistUse.js -o 1 -t 2