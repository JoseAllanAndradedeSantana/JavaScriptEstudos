function Pessoa(){
    this.idade = 32;

    setInterval(() => {
        this.idade++
        console.log(this.idade);
        console.log("SELECT * FROM VENDAS;");

    },1000);
}

new Pessoa;