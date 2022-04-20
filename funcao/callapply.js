function getPreco(imposto = 0,moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`

}

const produto = {
    nome:"Iphone",
    preco:5.000,
    desc:0.10,
    getPreco
}

const carro = {
    preco:34.000,
    desc: 0.20
}

console.log(produto.getPreco());
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));