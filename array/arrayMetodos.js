const pilotos = ['Jose','Allan','Andrade','Santana'];
pilotos.pop(); //remove o ultimo elemento do array
pilotos.push("Isaac");//add o elemento no array
pilotos.shift(); //remove o primeiro elemento do array
pilotos.unshift("Mariane");//add o elemento no primeiro index
pilotos.splice(2,0,"Manuella");//add  elemento
pilotos.splice(3,1)//remove elemento

const algunsPilotos = pilotos.slice(2); //novo array
const algunsPilotos2 = pilotos.slice(1,3); //novo array
