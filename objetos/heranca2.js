//Cadeia de prototipos (prototype chain)

const avo = {
    attri1: "A"
}

const pai = {
    __proto__: avo, attri2:"B"
}

const filho = {
    __proto__:pai, attri3:"C"
}

console.log(filho.attri1);