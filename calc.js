/* Dependências */
const chalk = require('chalk');
const inquirer = require('inquirer');
//Montando Funções

// Função para somar dois números
function somarNumeros (numero1, numero2) {
    return numero1 + numero2;
}

function main() {
    console.log(chalk.bgWhite.black('Olá, seja bem vindo'));

    // perguntar ao usuário dois números
    inquirer.prompt([
        {
            name: "n1",
            message: "Digite o primeiro número ?"
        },
        {
            name: "n2",
            message: "Digite o segundo número ?"
        }
    ])
    // Promise - JavaScript
    .then((resposta) => {
        // Converter números para valores númericos
        const n1 = Number(resposta.n1);
        const n2 = Number(resposta.n2);

        // Calcular soma
        const resultado = somarNumeros(n1, n2);

        // Imprimir
        console.log(chalk.green(`A soma de ${n1} e ${n2} é igual á ${resultado}`))
    })
}

main();