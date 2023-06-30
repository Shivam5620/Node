const url = require('url')
const http = require('http')
const hostname = '127.0.0.1'
const port = 5000
const server = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var si = q.query;
    const result = parseInt(si.textnum1 * si.textnum2 * si.textnum3) / 100;
    res.write(`<h1>Result is ==>${result}`)
    res.end()
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})