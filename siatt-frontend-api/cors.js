const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000/*', // Permite solicitações de qualquer origem (substitua isso pelo seu domínio real em produção)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Habilita o uso de cookies e autenticação
};

module.exports = cors(corsOptions);
