function falarDepois(segundos,frase){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(frase)
        },segundos * 1000)
    })
}

falarDepois(3,"Teste").then(frase => console.log(frase));