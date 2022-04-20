// this and bind

function Pessoa(){
    this.idade = 32;
    const self = this;
    setInterval(function() {
        //self.idade++
        this.idade++;
        console.log(this.idade);
    }.bind(this),2000);
}

new Pessoa;