// import 
const http = require('http');
const axios = require ('axios');
const express = require('express');
const router = express.Router();

const apiOne = "https://jsonplaceholder.typicode.com/posts";
const apiTwo = "https://jsonplaceholder.typicode.com/posts/1/comments";

// Função para lidar com as requisições
const requestMain = (request, response) => {

    if (router.get('/') ) {

        // Fazendo uma requisição HTTP GET com API
    axios.get(apiOne)
    .then((apiResponse) => {
        // configurando o cabeçalho da resposta
        response.writeHead(200, {'Content-Type': 'text/plain'});

        //Exibindo os dados retornados na resposta 
        response.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
    })
    .catch((error) => {
        console.error('Erro ao acessar a API');
    })

    } 
    if (router.get('/Api')) {
        axios.get(apiTwo)
        .then((apiResponseTwo) => {
            response.writeHead(200, {'Content-Type': 'text/plain'});

            response.end(`Dados da segunda API: ${JSON.stringify(apiResponseTwo.data)}`)
        })
        .catch((error) => {
            console.error('Erro ao acessar a segunda API');
        })
    }
}

// Criando o servidor 
const server = http.createServer(requestMain);

// Definindo a porta 
const PORT = 3000;

// Iniciando o servidor e ouvindo a porta definida
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
