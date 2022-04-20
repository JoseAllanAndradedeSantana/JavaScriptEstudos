const notas = [6.7,7.5,8.0];
for (let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome:"Allan",
    sobreNome:"Andrade",
    idade:32,
    peso:58
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}

const nums = [1,2,3,4,5,6,7,8,9,10];
for (x in nums){
    if(x == 5){
        break;
    }
    console.log(`${x} = ${nums[x]}`);
}

for (x in nums){
    if(x == 5){
        continue;
    }
    console.log(`${x} = ${nums[x]}`);
}