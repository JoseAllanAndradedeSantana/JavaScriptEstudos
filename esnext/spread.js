const funcionario = {nome:"Allan", salario:5000.88};
const newFuncionario = {funcao:"Desenvolvedor Pleno", ...funcionario};
console.log(funcionario);
console.log(newFuncionario);