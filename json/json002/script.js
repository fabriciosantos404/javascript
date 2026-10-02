let jogador = {
    "nome": "Fabricio",
    "nivel": 23,
    "classe": ["Mago", "Bruxo", "Guerreiro"],
    "hobbies": ["Leitura", "Treinar", "Praticar magia"],
    "xp": 8 + " / 10"
}

let pessoaTexto = JSON.stringify(jogador);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);