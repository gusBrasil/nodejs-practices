class Cliente {
    constructor (nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}

const gustavo = new Cliente('Gustavo', 'gustavo@email.com', 123654789, 100);

gustavo.exibirSaldo();

console.log(gustavo);
