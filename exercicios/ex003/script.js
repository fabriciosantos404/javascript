class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

}

let endereco = new Endereco("Rua das Gaivotas", "Terrário", "São Joaquim", "SC");

console.log(endereco);

endereco.novaRua = "Rua dos Pardais";

console.log(endereco);