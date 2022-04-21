const quaseArray = {
    0:'Allan',
    1:'Andrade',
    2:'Jose'
}

Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
});

const meuArray = ['Allan','Jose','Andrade'];
console.log(quaseArray.toString(), meuArray);