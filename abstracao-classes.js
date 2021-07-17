// São classes diversas, praticando os conceitos de Abstração e contrução de classes em si.
// Exemplos pequenos somente para praticar

// Produto de uma loja
class Product {
    constructor(){
        this.name = '';
        this.price = '';
    }

    sell(name, price){
        this.name = name;
        this.price = price;

        console.log(
        `
        ==== Ǹota Fiscal === 
          Produto: ${this.name}
          Preço: ${this.price}
        =====================
        `);
    }

    cancel(name){
        this.name = name;
        console.log(`Produto ${this.name} cancelado!`)
    }

}

const Product1 = new Product();

Product1.sell('Arroz', 15.99);
Product1.cancel('Arroz');

// carrinho de compras ecommerce
