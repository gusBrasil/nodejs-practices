const prompt = require('prompt-sync')();

let clientes = [
    carlos = {
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
    if(x == 'y') {
        console.log('Digite seu nome e seu ID');
    }

    const promptNome = prompt('nome: ');
    const promptID = prompt('ID: ');

     if (promptNome == clientes[0].nome && promptID == clientes[0].ID) {
        console.log(clientes[0]);
    }
}

showInfo();