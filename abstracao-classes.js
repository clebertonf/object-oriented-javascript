// São classes diversas, praticando os conceitos de Abstração e contrução de classes em si.
// Exemplos pequenos somente para praticar

// Produto de uma loja
// class Product {
//     constructor() {
//         this.name = '';
//         this.price = '';
//     }

//     sell(name, price) {
//         this.name = name;
//         this.price = price;

//         console.log(
//             `
//         ==== Ǹota Fiscal === 
//           Produto: ${this.name}
//           Preço: ${this.price}
//         =====================
//         `);
//     }

//     cancel(name) {
//         this.name = name;
//         console.log(`Produto ${this.name} cancelado!`)
//     }

// }

// const Product1 = new Product();

// Product1.sell('Arroz', 15.99);
// Product1.cancel('Arroz');

// carrinho de compras ecommerce

// class ShoppingCart {
//     constructor() {
//         this.ProductName = '';
//         this.listProducts = [];
//         this.price = 0;
//         this.totalPrice = 0;
//     }

//     pickProducts(name, price) {

//         const Product = {
//            ProductName: this.ProductName = name,
//            ProductPrice: this.price = price,
//         }


//         this.listProducts.push(Product);

//         return this.listProducts;
//     };

//     sumProducts() { 
//        const total = this.listProducts.reduce((acc, curr) => acc + curr.ProductPrice, 0);
//        return {
//            total,
//        }
//     }
// }

// const ProductCart1 = new ShoppingCart();

// console.log(ProductCart1.pickProducts('TV', 5000));
// console.log(ProductCart1.pickProducts('SOM', 4000));
// console.log(ProductCart1.pickProducts('Celular', 2000));

// console.log(ProductCart1.sumProducts());
