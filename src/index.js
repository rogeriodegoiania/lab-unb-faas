const http = require('http');
const port = 8080;

var processar = require("../lib/processar");

const server = http.createServer(function(req, res) {
    resposta = processar(10,11,"f47a4df8d00232c3441720c1e912c181fd5ceda6");
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);
});

server.listen(port);
console.log("servidor online na porta " + port);