const carrinho = [
    '{"nome":"Borracha","preco":5.00}',
    '{"nome":"Caderno","preco":15.00}',
    '{"nome":"Kit Lapis","preco":45.00}',
    '{"nome":"Caneta","preco":7.00}'
];

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(resultado);