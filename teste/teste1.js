var processar = require("../lib/processar");

var tempoInicio = new Date().getTime();
resposta = processar(10,11,"ac49a76e49ee1d692d20af85b35b5b357d71c747");
console.log("Processado em " + (new Date().getTime() - tempoInicio) + "ms. Resposta => ", resposta);