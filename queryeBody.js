// importando os modulos necessários
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // querbra a URL em partes (rota e query) e trasforma em objeto
  const urlCmpleta = url.parse(req.url, true);

  const rota = urlCmpleta.pathname; // rota
  const query = urlCmpleta.query; // query

  res.setHeader('Content-Type', 'application/JSON');
  if (rota === "/teste" && req.method === "GET") {
    res.end(JSON.stringify({
      tipo: 'query',
      dado: query
    }));
    return;
  }

  // metodo POST com body
  if (rota === "/dados" && req.method === "POST") {
    let body = '';
    req.on('data', parte =>{
      body += parte;
    });

    req.on('end', () => {
      const dados = JSON.parse(body);

      res.end(JSON.stringify({
        tipo: 'body',
        dado: dados
      }));
    });
    return;
  }
  res.end(JSON.stringify({
    mensagem: 'Rota nao encontrada'
  }));
});

server.listen(3000, () =>{
  console.log('Servidor rodando em http://localhost:3000');
});
