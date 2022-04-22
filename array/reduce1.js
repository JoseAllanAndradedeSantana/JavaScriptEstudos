const alunos = [
{ nome: "Allan", nota:9.5, bolsista:true},
{ nome: "Jose", nota:7.5, bolsista:true},
{ nome: "Andrade", nota:8.5, bolsista:true},
{ nome: "Santana", nota:6.5, bolsista:false}
];

console.log(alunos.map(aluno => aluno.nota));
const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador,atual){
    console.log(acumulador, atual);
    return acumulador += atual;
});

console.log(resultado);