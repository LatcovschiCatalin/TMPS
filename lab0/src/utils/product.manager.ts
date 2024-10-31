import { Product } from '../types';
import { ProductService } from '../services';

export class ProductManager implements ProductService {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
        console.log(`Product added: ${product.name}`);
    }

    removeProduct(id: number): void {
        this.products = this.products.filter(product => product.id !== id);
        console.log(`Product with id ${id} removed`);
    }

    getProduct(id: number): Product | undefined {
        return this.products.find(product => product.id === id);
    }

    listProducts(): Product[] {
        return this.products;
    }
}
