//Função sem retorno
function imprimirSoma(num1, num2){
    console.log(num1+num2);
}

imprimirSoma(5,5);

// Funçao com retorno
function soma(a,b){
    return a + b;
}
console.log(soma(5,5));

//Função armazenar em uma variavel
const imprimir = function (a,b){
    return a + b;
}
console.log(imprimir(6,7));

//Função arrow
const somar = (a,b) => {
    console.log(a+b);
}
somar(1,1);

//retorno implicito
const sub = (a,b) => a - b;