import { Service } from '../types';

export interface ServiceService {
    addService(service: Service): void;
    removeService(id: number): void;
    getService(id: number): Service | undefined;
    listServices(): Service[];
}
