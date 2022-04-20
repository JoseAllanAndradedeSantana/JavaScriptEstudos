const notas = [7.7,6.5,7.9,9.0,5.2,9.1];

//sem callback
let notasBaixas = [];
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);

//com callback
notasBaixas = notas.filter(function (nota){
    return nota <= 8;
});

console.log(notasBaixas);