var url = require('url');
const http = require('http')
const hostname = '127.0.0.1'
const port = 4000
const server = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var obj = q.query
    var res1 = parseInt(obj.txtnum1) + parseInt(obj.txtnum2)
    res.write(`<h1>Result is ${res1}</h1>`)
    res.end()
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})