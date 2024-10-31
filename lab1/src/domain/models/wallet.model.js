"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
class Wallet {
    constructor(id, currencyType, balance) {
        this.id = id;
        this.currencyType = currencyType;
        this.balance = balance;
    }
    static builder() {
        return new WalletBuilder();
    }
    toString() {
        return `Wallet ID: ${this.id}, Currency: ${this.currencyType}, Balance: ${this.balance}`;
    }
}
exports.Wallet = Wallet;
class WalletBuilder {
    constructor() {
        this.id = 'default-id';
        this.currencyType = 'USD';
        this.balance = 0;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setCurrencyType(currencyType) {
        this.currencyType = currencyType;
        return this;
    }
    setBalance(balance) {
        this.balance = balance;
        return this;
    }
    build() {
        return new Wallet(this.id, this.currencyType, this.balance);
    }
}
