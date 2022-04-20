


function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0;

    //metodo publico 
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        }else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }
}

const fox = new Carro();
fox.acelerar();
fox.acelerar();
console.log(fox.getVelocidadeAtual() +" KM/h");