const sequencia = {
    _valor: 1, //convencao
    get valor() {
        return this.valor++;
    },

    set valor(valor){
        this._valor = valor;
    }
}