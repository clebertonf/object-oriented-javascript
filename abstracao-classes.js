// São classes diversas, praticando os conceitos de Abstração e contrução de classes em si.
// Exemplos pequenos somente para praticar

// Produto de uma loja
class Product {
    constructor() {
        this.name = '';
        this.price = '';
    }

    sell(name, price) {
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

    cancel(name) {
        this.name = name;
        console.log(`Produto ${this.name} cancelado!`)
    }

}

const Product1 = new Product();

Product1.sell('Arroz', 15.99);
Product1.cancel('Arroz');

// carrinho de compras ecommerce

class ShoppingCart {
    constructor() {
        this.ProductName = '';
        this.listProducts = [];
        this.price = 0;
        this.totalPrice = 0;
    }

    pickProducts(name, price) {

        const Product = {
           ProductName: this.ProductName = name,
           ProductPrice: this.price = price,
        }


        this.listProducts.push(Product);

        return this.listProducts;
    };

    sumProducts() { 
       const total = this.listProducts.reduce((acc, curr) => acc + curr.ProductPrice, 0);
       return {
           total,
       }
    }
}

const ProductCart1 = new ShoppingCart();

console.log(ProductCart1.pickProducts('TV', 5000));
console.log(ProductCart1.pickProducts('SOM', 4000));
console.log(ProductCart1.pickProducts('Celular', 2000));

console.log(ProductCart1.sumProducts());

// Aluguel de carros

class rentCar {
    constructor(){
        this.model = '';
        this.priceDay = 0;
        this.numberDays = 0;
    }

    rent(model, price, days) {
        this.model = model;
        this.priceDay = price;
        this.numberDays = days;

        const totalPrice = {
            model: this.model,
            totalPrice: this.numberDays *this.priceDay,
        };

        return totalPrice;
    };
};

const rent1 = new rentCar();
const rent2 = new rentCar();

console.log(rent1.rent('Corola', 35, 5));
console.log(rent2.rent('Civic', 50, 12));
