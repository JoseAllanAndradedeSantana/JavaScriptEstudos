//Recurso do ES2015

const pessoa = {
    nome: "Allan",
    idade: 32,
    endereco: {
        logradouro: "Rua tal",
        numero:123
    }
}
const {endereco:{logradouro: l}} = pessoa;
const { nome: n, idade: i} = pessoa;
console.log(n, i, l);

const [a] = [10];
console.log(a);

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
const obj = {min:50, max:60};
console.log(rand(obj));

function rand2([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}