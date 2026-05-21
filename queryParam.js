const http = require('http');
const url = require('url');
// o modulo url ajuda a separar:
// pathname -> a rota
// query -> os parametros da url

const server = http.createServer((req, res) => {

  // estamos aqui quenrendo/separando a URL que chega para o servidor, assim, teremos ela como texto
  const urlCompleta = url.parse(req.url, true);

  // mostra no console tudo que o Node cosegui entender da URL
  console.log(urlCompleta);

  // mensagem exibida no navegador
  res.end('veja o console')
});

// porta de acesso ao servidor
server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

// RESUMA:
// Pathname -> rota
// Query -> Dados
// Search -> busca

// url antes da busca: http://www.sp.senac.br/
//
