class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}.`);
    }
}

const pessoa = new Pessoa("Jose Allan");
pessoa.falar();

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu Nome é ${nome}.`)
    }
}

const pessoa2 = criarPessoa("Jose Allan");
pessoa2.falar();