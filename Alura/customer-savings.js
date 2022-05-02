function cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup
}

const ju = new clientePoupanca('Ju', 123456, 'ju@email.com', 1000, 5000);
console.log(ju);

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

ju.depositarPoup(30);
console.log(ju.saldoPoup);
