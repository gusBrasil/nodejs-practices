const livros = require('./listaLivros');

let maisBarato = 0;

function livroBarato() {
    for (let atual = 0; atual < livros.length; atual++) {
        if (livros[atual].preco < livros[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    console.log(`o livro mais barato custa ${livros[maisBarato].preco} e seu título é ${livros[maisBarato].titulo}`);
}

livroBarato();