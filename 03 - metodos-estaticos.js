// com metodos estaticos não pode se estanciar a classe, apenas acessar metodos  diretamente

class Person {
    constructor(){
        this.nome = '';
    }

    static showPerson (nome) {
        this.nome = nome;
        console.log(`Ola eu sou ${this.nome}`)
    }
}

Person.showPerson('Cleberton');