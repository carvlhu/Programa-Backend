/* Dependências */
const chalk = require('chalk');
const inquirer = require('inquirer');
//Montando Funções

// Função para somar dois números
function multiplicarNumeros (numero1, numero2) {
    return numero1 * numero2;
}

function divisaoNumeros (numero1, numero2) {
    return numero1 / numero2;
}

function subtracaoNumeros (numero1, numero2) {
    return numero1 - numero2;
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
        const resultado = multiplicarNumeros(n1, n2);
        const resultadoTwo = divisaoNumeros(n1, n2);
        const resultadoThree = subtracaoNumeros (n1, n2);

        // Imprimir
        //console.log(chalk.green(`A multiplicação entre os números ${n1} e ${n2} é igual á ${resultado}`));
        //console.log(chalk.green(`A divisão entre os números ${n1} e ${n2} é igual á ${resultadoTwo}`));
        console.log(chalk.green(`A subtração entre os números ${n1} e ${n2} é igual á ${resultadoThree}`));
        
    })
}

main();