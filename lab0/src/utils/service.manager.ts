import { Service } from '../types';
import { ServiceService } from '../services';

export class ServiceManager implements ServiceService {
    private services: Service[] = [];

    addService(service: Service): void {
        this.services.push(service);
        console.log(`Service added: ${service.name}`);
    }

    removeService(id: number): void {
        this.services = this.services.filter(service => service.id !== id);
        console.log(`Service with id ${id} removed`);
    }

    getService(id: number): Service | undefined {
        return this.services.find(service => service.id === id);
    }

    listServices(): Service[] {
        return this.services;
    }
}
