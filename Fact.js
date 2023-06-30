var url = require('url');
const http = require('http')
const hostname = '127.0.0.1'
const port = 4000
const server = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var obj = q.query
    var num=parseInt(obj.textnum)
    var fact=1
    for(var i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    res.write(`<h1>Result is ${fact}</h1>`)
    res.end()
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})