import { Product } from '../types';

export interface ProductService {
    addProduct(product: Product): void;
    removeProduct(id: number): void;
    getProduct(id: number): Product | undefined;
    listProducts(): Product[];
}
