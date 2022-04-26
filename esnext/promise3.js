function gerarNumeros(min, max){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1;
        const numeroAleatorio = parseInt(Math.random() * fator) + min;
        resolve(numeroAleatorio);
    })
}

gerarNumeros(1,60).then(numero => console.log(numero))