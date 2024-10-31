"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(from, to, asset, amount) {
        this.from = from;
        this.to = to;
        this.asset = asset;
        this.amount = amount;
    }
    reset(from, to, asset, amount) {
        this.from = from;
        this.to = to;
        this.asset = asset;
        this.amount = amount;
    }
    displayTransactionDetails() {
        console.log(`Transaction from ${this.from.id} to ${this.to.id} - Amount: ${this.amount} ${this.asset.name}`);
    }
}
exports.Transaction = Transaction;
