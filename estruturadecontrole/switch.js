const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log("Aprovado");
            break;
        case 8:
        case 7:
            console.log("Aprovadooo");
            break;
        case 6:
        case 5:
            console.log("Aprovadoooo");
            break;
        case 4:
        case 3:
        case 2:
            console.log("Aprov");
            break;
        default:
            console.log("teste"); 
    }
}

imprimirResultado(4);