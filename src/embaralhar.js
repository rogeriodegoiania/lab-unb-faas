var crypto = require("crypto");

var data = "asdfg";

var textoEmbaralhado = crypto.createHash("sha1").update(data).digest("hex");

console.log(textoEmbaralhado);