function tratarError(erro){
    throw new Error("Suporte Tecnico");
}

function imprimirNome(obj){
    try {
        console.log(obj.name.toUpperCase());
    } catch (error) {
        tratarError(error);
    }
    
}
const obj = {nome: "Allan"};
imprimirNome(obj);
