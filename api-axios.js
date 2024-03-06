// import 
const http = require('http');
const axios = require ('axios');
const express = require('express');
const router = express.Router();

// Api's
const apiOne = "https://jsonplaceholder.typicode.com/posts";
const apiTwo = "https://jsonplaceholder.typicode.com/posts/1/comments";
const apiThree = "https://jsonplaceholder.typicode.com/albums";
const apiFour = "https://jsonplaceholder.typicode.com/photos";
const apiFive = "https://jsonplaceholder.typicode.com/todos";
const apiSix = "https://jsonplaceholder.typicode.com/users";

// Função para lidar com as requisições
const requestMain = (request, response) => {

    if (router.get('/posts') ) {
        // Fazendo uma requisição HTTP GET com API
    axios.get(apiOne)
    .then((apiResponse) => {
        // configurando o cabeçalho da resposta
        response.writeHead(200, {'Content-Type': 'text/plain'});

        //Exibindo os dados retornados na resposta 
        response.end(`Dados da primeira API: ${JSON.stringify(apiResponse.data)}`)
    })
    .catch((error) => {
        console.error('Erro ao acessar a API');
    })

    } 
    if (router.get('/comments')) {
        axios.get(apiTwo)
        .then((apiResponseTwo) => {
            response.writeHead(200, {'Content-Type': 'text/plain'});

            response.end(`Dados da segunda API: ${JSON.stringify(apiResponseTwo.data)}`)
        })
        .catch((error) => {
            console.error('Erro ao acessar a segunda API');
        })
    }

    if (router.get('/photos')) {
        axios.get(apiThree)
        .then((apiResponseThree) => {
            response.writeHead(200, {'Content-Type': 'text/plain'});

            response.end(`Dados da terceira API: ${JSON.stringify(apiResponseThree.data)}`)
        })
        .catch((error) => {
            console.error("Erro ao acessar a terceira API")
        })
    }

    if (router.get('/todos')) {
        axios.get(apiFour)
        .then((apiResponseFour) => {
            response.writeHead(200, {'Content-Type': 'text/plain'});

            response.end(`Dados da quarta API: ${JSON.stringify(apiResponseFour.data)}`)
        })
        .catch((error) => {
            console.error("Erro ao acessar a quarta API")
        })
    }

    if (router.get('/user')) {
        axios.get(apiFive)
        .then((apiResponseFive) => {
            response.writeHead(200, {'Content-Type': 'text/plain'});

            response.end(`Dados da quinta API: ${JSON.stringify(apiResponseFive.data)}`)
        })
        .catch((error) => {
            console.error("Erro ao acessar a quinta API")
        })
    }

    if (router.get('/albums')) {
        axios.get(apiSix)
        .then((apiResponseSix) => {
            response.writeHead(200, {'Content-Type': 'text/plain'});

            response.end(`Dados da sexta API: ${JSON.stringify(apiResponseSix.data)}`)
        })
        .catch((error) => {
            console.error("Erro ao acessar a sexta API")
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
