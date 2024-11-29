import {Observer, Subject} from "./observable";

export class ExchangePlatform2 implements Subject {
    private observers: Observer[] = [];
    private price: number = 0;

    attach(observer: Observer): void {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
        }
    }

    detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    setPrice(price: number): void {
        this.price = price;
        this.notify();
    }

    getPrice(): number {
        return this.price;
    }
}
