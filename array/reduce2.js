const alunos = [
    { nome: "Allan", nota:9.5, bolsista:true},
    { nome: "Jose", nota:7.5, bolsista:true},
    { nome: "Andrade", nota:8.5, bolsista:true},
    { nome: "Santana", nota:6.5, bolsista:false}
    ];

    //Desafio 1: todos os alunos são bolsista?

    const todosBolsista = (resultado,bolsista) => resultado && bolsista;
    console.log(alunos.map(aluno => aluno.bolsista).reduce(todosBolsista));

    //Desafio 2: Algum aluno é bolsista?
    const algumBolsista = (resultado,bolsista) => resultado || bolsista;
    console.log(alunos.map(aluno => aluno.bolsista));
    console.log(alunos.map(aluno => aluno.bolsista).reduce(algumBolsista));

