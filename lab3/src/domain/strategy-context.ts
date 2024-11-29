import {MarketData, TradingStrategy} from "./trading-strategy";
import {Transaction} from "../utils";

export class StrategyContext {
    private strategy: TradingStrategy;

    constructor(strategy: TradingStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: TradingStrategy) {
        this.strategy = strategy;
    }

    executeStrategy(transaction: Transaction, marketData: MarketData) {
        this.strategy.execute(transaction, marketData);
    }
}
