function criarProduto(nome,preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook",5.000));
console.log(criarProduto("Ipad",6.000));