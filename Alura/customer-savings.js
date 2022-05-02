function cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

const Gustavo = new cliente('Gustavo', 123123123, "gustavo@gustavo.com", 100);

console.log(Gustavo);
 