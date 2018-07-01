const crypto = require("crypto");
const tabelaCaracteres = require("./tabela"); //63 caracteres

module.exports = function(inicio, fim, textoEmbaralhado){
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
            for (var i3 = 0; i3 < tabelaCaracteres.length; i3++){5
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