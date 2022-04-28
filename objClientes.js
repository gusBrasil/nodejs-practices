const prompt = require('prompt-sync')();

let clientes = [
    {
        nome: 'Carlos',
        ID: 970
    },
    {
        nome: 'Bruno',
        ID: 971
    }
]

function showInfo() {
    let x = prompt("Deseja visualizar as suas informações?(y/n) ");
    if(x = 'y') {
        console.log('Digite seu nome e seu ID');
        let promptNome = prompt('nome: ');
        let promptID = prompt('ID: ');
    } if (promptNome = clientes[0].nome && promptID) {

    }
}

showInfo();