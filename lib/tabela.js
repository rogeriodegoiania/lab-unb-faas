var tabela = [];

//0-9
for (var i = 48; i < 58; i++){
    tabela.push(String.fromCharCode(i));
}

//a-z
for (var i = 97; i < 123; i++){
    tabela.push(String.fromCharCode(i));
}

//A-Z
for (var i = 65; i < 91; i++){
    tabela.push(String.fromCharCode(i));
}

tabela.push("");

module.exports = tabela;