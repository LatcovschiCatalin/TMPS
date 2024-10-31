"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceManager = void 0;
class ServiceManager {
    constructor() {
        this.services = [];
    }
    addService(service) {
        this.services.push(service);
        console.log(`Service added: ${service.name}`);
    }
    removeService(id) {
        this.services = this.services.filter(service => service.id !== id);
        console.log(`Service with id ${id} removed`);
    }
    getService(id) {
        return this.services.find(service => service.id === id);
    }
    listServices() {
        return this.services;
    }
}
exports.ServiceManager = ServiceManager;
