import {Transaction} from "../utils";

export class MarketData {
    private price: number;

    constructor(price: number) {
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(newPrice: number): void {
        this.price = newPrice;
    }
}



export interface TradingStrategy {
    execute(transaction: Transaction, marketData: MarketData): void;
}

export class ConservativeStrategy implements TradingStrategy {
    execute(transaction: Transaction, marketData: MarketData): void {
        console.log("Executing conservative trading strategy.");
    }
}

export class AggressiveStrategy implements TradingStrategy {
    execute(transaction: Transaction, marketData: MarketData): void {
        console.log("Executing aggressive trading strategy.");
    }
}
