let http = require("http");

let server = http.createServer(function(req,res,next) {
    res.end("Hello World")
});

server.listen(3000)