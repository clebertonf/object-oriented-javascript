class createFile {
   create(fileName) {
        console.log(`Arquivo ${fileName} criado com sucesso!`);
   }
};

class readFile {
    read(file){
        console.log(`Lendo arquivo ${file} ....`);
    }
};


class fileHandler {
    constructor() {
        this.create = new createFile();
        this.read = new readFile();
    }
}

const file1 = new fileHandler();

file1.create.create('desafio.js')
file1.read.read('desafio2.cs');