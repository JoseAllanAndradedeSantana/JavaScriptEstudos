class Lancamento {
    constructor(nome ="Generico",valor = 0){
        this.nome = nome;
        this.valor =  valor;
    }
}

class CicloFinanceiro {
    constructor(mes,ano){
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(lanc => this.lancamentos.push(lanc));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(lanc => {
            valorConsolidado += lanc.valor;
        });
        return valorConsolidado;
    }
}

const salario = new Lancamento("Salario", 4500);
const contaLuz = new Lancamento("Luz",-200);
const contas = new CicloFinanceiro(5,2022);
contas.addLancamentos(salario,contaLuz);
console.log(contas.sumario());