require('dotenv').config({path: 'variaveis.env'}); // lendo o variaveis.env
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));

server.use('/api', routes); // todo os endereços vão ter  o prefixo "/api"

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em: htpps://localhost:${process.env.PORT}`);
})



