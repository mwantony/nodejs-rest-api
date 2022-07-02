const fs = require("fs");
const path = require('path')


module.exports = (caminho, nomeDoArquivo, callBackImagemCriada) => {
  const tiposValidos = ['jpg', 'png', 'jpeg']
  const tipo = path.extname(caminho)
  const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

  if(!tipoEhValido) {
    const erro = "Tipo é inválido"
    console.log('Erro! Tipo inválido')
    callBackImagemCriada(erro)
    return
  } 

  const novoCaminho = `./assets/img/${nomeDoArquivo}${tipo}`
  fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(novoCaminho))
    .on("finish", () => {
      callBackImagemCriada(false, novoCaminho)
    });
};
