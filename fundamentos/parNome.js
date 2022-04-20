const saudacao = "Ola"; //contexto léxico 'palavra'

function exec(){
    const saudacao = "Fala";
    return saudacao;
}

const cliente = {
    nome: "Allan",
    idade: 32,
    peso: 58,
    endereco: {
        logradouro: "Rua tal",
        numero: 123
    }
}

console.log(cliente);
console.log(saudacao);
console.log(exec());
