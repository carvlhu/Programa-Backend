// Importando a Biblioteca Axios
const axios = require('axios');

// URL API 
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Requisição HTTP GET API usando o axios 
axios.get(apiUrl)
    .then((response) => {
        // Exiba os dados retornados no console
        console.log("Dados da Api", response.data);
    })
    .catch((error) => {
        // Em caso de erro, exiba o erro no console
        console.error('Erro ao acessar a API: ', error)
    })