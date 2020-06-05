var colors = require('colors')

console.log('This Node kicks it! '.rainbow.underline)

console.log('rainbow'.rainbow, 'zebra'.zebra)

colors.setTheme({
  mod1_warn: 'cyan',
  md1_error: 'red',
  md2_note: 'yellow'
})

console.log('This is a helpfuul message'.md2_note)
console.log('This is a bad message'.md1_error)