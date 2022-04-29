const cliente = {
    nome: 'Gustavo',
    idade: 20,
    cpf: '12345678',
    email: 'gustavo@email.com',
    fones: ['55912345678', '55987654321'],
    dependentes: [
        {
            nome: 'Sara Silva',
            parentesco: 'Filha',
            dataNasc: '20/03/2011' },
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014' }
    ],
    saldo: 100,

    depositar: function(valor){
        this.saldo += valor
    }
}

for (let info in cliente) {
    
}
