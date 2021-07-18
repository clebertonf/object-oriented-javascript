class Computer {
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco
    };

    getComputer(){
        console.log(`${this.nome} ${this.preco}`);
    };
};

class ComputerGame extends Computer {

    // sobreescrever metodos do pai
    getComputer(nome, preco, placa){
        console.log(`${nome} ${preco} ${placa}`);
    };

    // novos metodos
    getComputerGame(nome, preco) {
        console.log(`${nome} ${preco}`);
    }
};

const pc1 = new ComputerGame('Asus', 3500);
pc1.getComputer();

const pc2 = new ComputerGame();
pc2.getComputerGame('INTEL', 5000);

const pc3 = new ComputerGame();
pc3.getComputer('AMD', 6000, 'GTX');