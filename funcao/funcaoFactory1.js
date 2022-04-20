//funcao que retorna um objeto

const produto = {
    nome: "Allan",
    preco: 100
}

function criarPessoa(){
    return {
        nome:"Allan",
        sobrenome: "Andrade"
    }
}

console.log(criarPessoa());
