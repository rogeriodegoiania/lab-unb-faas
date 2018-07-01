var crypto = require("crypto");

//var data = "asdfg";
//var data = "azzzz";
//var data = "aaaaa";
var data = "azzz";

var textoEmbaralhado = crypto.createHash("sha1").update(data).digest("hex");

console.log(textoEmbaralhado);