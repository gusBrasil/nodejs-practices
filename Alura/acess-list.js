const cliente = {
    nome: 'Gustavo',
    idade: 20,
    cpf: '12345678',
    email: 'gustavo@email.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email'];

chaves.forEach(info => console.log(cliente[info]));