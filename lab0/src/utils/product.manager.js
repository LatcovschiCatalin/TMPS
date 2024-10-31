"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
class ProductManager {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
        console.log(`Product added: ${product.name}`);
    }
    removeProduct(id) {
        this.products = this.products.filter(product => product.id !== id);
        console.log(`Product with id ${id} removed`);
    }
    getProduct(id) {
        return this.products.find(product => product.id === id);
    }
    listProducts() {
        return this.products;
    }
}
exports.ProductManager = ProductManager;
