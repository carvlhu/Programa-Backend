/* Dependências */
const chalk = require('chalk');

const inquirer = require('inquirer');
//Montando Funções

//função principal que executa 
function main() {
    console.log("testando");
    console.log(chalk.bgBlue.white('Bem-vindo ao questionário'));

    //Perguntar ao usuário seu nome
    inquirer.prompt({
        name:'name',
        message: "Qual é seu nome ?"
    })
    //Promise - JavaScript
    .then((nomeResponder) => {
        //Pergunta ao usuário sua idade
        return inquirer.prompt({
            name: 'age',
            message: 'Quantos anos você tem ?'
        })
        .then((idadeResponder) => {

            // Imprimir mensagens na tela
            console.log(chalk.bgGreen.black(`Olá ${nomeResponder.name}! Você tem ${idadeResponder.age} anos!`))
        })
    })
}

main();