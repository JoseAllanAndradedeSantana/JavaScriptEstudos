let num = 1;
console.log(num);

let p = new Promise(function(resolve){
    resolve(7);
});

p.then(function(valor){
    console.log(valor);
})
console.log(p)
console.log(typeof Promise);