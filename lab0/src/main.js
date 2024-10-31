"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
// Initialize managers
const productManager = new utils_1.ProductManager();
const serviceManager = new utils_1.ServiceManager();
// Add Products
const product1 = { id: 1, name: 'Laptop', description: 'High-end gaming laptop', price: 1500, category: 'Electronics' };
const product2 = { id: 2, name: 'Headphones', description: 'Noise-cancelling headphones', price: 200, category: 'Accessories' };
productManager.addProduct(product1);
productManager.addProduct(product2);
// Add Services
const service1 = { id: 1, name: 'Laptop Repair', description: 'Repair for laptops', hourlyRate: 50, duration: 2 };
const service2 = { id: 2, name: 'Consultation', description: 'Tech consultation', hourlyRate: 100, duration: 1 };
serviceManager.addService(service1);
serviceManager.addService(service2);
// Display Products and Services in table format
console.log("Products:");
console.table(productManager.listProducts());
console.log("Services:");
console.table(serviceManager.listServices());
