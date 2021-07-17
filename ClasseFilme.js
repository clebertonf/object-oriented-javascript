class Filme {
    constructor() {
        this.reproduce = false;
        this.pause = false;
        this.close = false;
    }

    play(){
        this.reproduce = true;
        console.log(`Reproduzindo... ${this.reproduce}`);
    }

    pause(){
        this.pause = true;
        console.log('Pausando...');
    }

    close(){

        this.close = true;
        console.log('Fechando...');
    }
}

const filme1 = new Filme();
console.log(filme1.reproduce)
filme1.play()
