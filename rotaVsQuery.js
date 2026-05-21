const http = require('http');
const url = require('url');
// o modulo url ajuda a separar:
// pathname -> a rota
// query -> os parametros da URL

// criando o servidor
const server = http.createServer((req, res) => {
  // converte a URL (texto) em um objeto com informaçoes organizadas
  const urlCompleta = url.parse(req.url, true);

  // separaçao dos principais dados da requisição
  const rota = urlCompleta.pathname; // rota
  const query = urlCompleta.query; // parametros da URL

  // retorna os dados da query recebidos na URL
  if (rota === "/teste" && req.method === "GET") {
    res.end(JSON.stringify({
      mensagem: "Deu Certo",
      dadosRecebidos: query
    }));
    return;
  }
  // caso a rota nao seja localizada
  res.end('Rota nao encontrada');
});
server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
