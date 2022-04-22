const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.3
    }, {
        nome: 'Ana',
        nota: 8.5
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Allan',
        nota: 8.7
    }, {
        nome: 'Mari',
        nota: 8.9
    }]
}]

const getNotaAluno = aluno => aluno.nota;
const getNotaTurma = turma => turma.alunos.map(getNotaAluno);
console.log(getNotaAluno);
console.log(getNotaTurma);

const notas = escola.map(getNotaTurma);
console.log(notas);

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma);
console.log(notas2);