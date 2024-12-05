// Importa o módulo express, que é um framework para construir aplicações web em Node.js
import express from "express";

// Importa o módulo dotenv para carregar variáveis de ambiente de um arquivo .env
import { config } from "dotenv";

// Importa as rotas definidas no arquivo index.routes.js
import rotas from "./routes/index.routes.js";

// Carrega as variáveis de ambiente do arquivo .env para process.env
config();

// Define a porta do servidor, usando a variável de ambiente PORT ou 4000 como padrão
const portaServidor = process.env.PORT || 4000;

// Cria uma instância do aplicativo express
const app = express();

// Adiciona um middleware para interpretar requisições com corpo em JSON
app.use(express.json());

// Adiciona as rotas importadas ao aplicativo express
app.use(rotas);

// Inicia o servidor na porta definida e exibe uma mensagem no console quando o servidor estiver rodando
app.listen(portaServidor, () => {
  console.log(`🎉 Servidor iniciado em http://localhost:${portaServidor} 🎉`);
});
