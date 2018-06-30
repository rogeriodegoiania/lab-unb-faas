const http = require('http');
const port = 8080;

var processar = require("../lib/processar");

const server = http.createServer(function(req, res) {
    resposta = processar(10,11,"ac49a76e49ee1d692d20af85b35b5b357d71c747");
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);
});

server.listen(port);
console.log("servidor online na porta " + port);