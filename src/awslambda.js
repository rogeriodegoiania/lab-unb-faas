const crypto = require("crypto");

//
//TABELA DE CARACTERES
//
var tabelaCaracteres = [];
//0-9
for (var i = 48; i < 58; i++){
    tabelaCaracteres.push(String.fromCharCode(i));
}
//a-z
for (var i = 97; i < 123; i++){
    tabelaCaracteres.push(String.fromCharCode(i));
}
//A-Z
for (var i = 65; i < 91; i++){
    tabelaCaracteres.push(String.fromCharCode(i));
}
tabelaCaracteres.push("");

//FUNÇÃO PARA PROCESSAR
const processar = function(inicio, fim, textoEmbaralhado){
    if ((inicio === null) || (inicio === undefined)){
        inicio = 0;
    }
    if (fim){
        if (fim > tabelaCaracteres.length){
            fim = tabelaCaracteres.length;
        }
    }
    else{
        fim = tabelaCaracteres.length;
    }
    
    for (var i1 = inicio; i1 < fim; i1++){
        console.log(tabelaCaracteres[i1]);
        for (var i2 = 0; i2 < tabelaCaracteres.length; i2++){
            for (var i3 = 0; i3 < tabelaCaracteres.length; i3++){
                for (var i4 = 0; i4 < tabelaCaracteres.length; i4++){
                    var textoTentativa = tabelaCaracteres[i1] + tabelaCaracteres[i2] + tabelaCaracteres[i3] + tabelaCaracteres[i4];
                    var textoTentativaEmbaralhado = crypto.createHash("sha1").update(textoTentativa).digest("hex");
                    if (textoTentativaEmbaralhado === textoEmbaralhado){
                        return textoTentativa;
                    }
                    
                }
            }
        }
    }
    
    return "";
}

exports.handler = async (event) => {
    var inicio = 10;
    var fim = 11;
    var textoEmbaralhado = "f47a4df8d00232c3441720c1e912c181fd5ceda6";
    
    var resposta = processar(inicio,fim,textoEmbaralhado);

    return resposta;
};