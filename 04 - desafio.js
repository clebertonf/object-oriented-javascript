// gerar numeros aleatorios a partir de uma quantidade de numeros passada para o metodo 

class Dice {
    constructor(){
        this.QuantySides = 0;
    }

    generateNumber (quanty){
        this.QuantySides = quanty;
        const rands = Math.round(Math.random(1) * this.QuantySides);
        console.log(rands)
    };
};

const a = new Dice();

a.generateNumber(100);