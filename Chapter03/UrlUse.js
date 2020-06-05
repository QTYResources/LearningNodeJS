var url = require('url')
var querystring = require('querystring')

var urlObj = url.parse('http://examples.burningbird.net:8124/?file=main')

console.log(urlObj)

console.log(url.format(urlObj)) // 返回原始 URL

/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'examples.burningbird.net:8124',
  port: '8124',
  hostname: 'examples.burningbird.net',
  hash: null,
  search: '?file=main',
  query: 'file=main',
  pathname: '/',
  path: '/?file=main',
  href: 'http://examples.burningbird.net:8124/?file=main'
}
*/

var vals = querystring.parse('file=main&file=secondary&type=html')

console.log(vals)

/*
[Object: null prototype] {
  file: [ 'main', 'secondary' ],
  type: 'html'
}
*/