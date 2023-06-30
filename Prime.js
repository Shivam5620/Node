var url = require('url');
const http = require('http')
const hostname = '127.0.0.1'
const port = 1000;
const server = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var obj = q.query
    var num = parseInt(obj.txtnum)
    var s = ""
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            s = "not prime"
            break
        }
    }
    if (num === i) {
        s = "Prime"
    }
    res.write(`<h1>Result is==>${s}</h1>`)
    res.end()
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})