const cliente = {
    nome: 'Gustavo',
    idade: 20,
    cpf: '12345678',
    email: 'gustavo@email.com',
    fones: ['55912345678', '55987654321'],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'Filha',
        dataNasc: '20/03/2011'
    }]
}

cliente.dependentes.push({
    nome: 'Samia Maria',
    parentesco: 'filha',
    dataNasc: '04/01/2014'
});

//console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependentes => dependentes.dataNasc === '04/01/2014');

console.log(filhaMaisNova[0].nome);
