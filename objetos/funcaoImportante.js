const pessoa = {
    nome: "Allan",
    idade:32,
    peso:58
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}:${valor}`)
});
