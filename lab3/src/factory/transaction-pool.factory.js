"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionPool = void 0;
const utils_1 = require("../utils");
class TransactionPool {
    static acquireTransaction(from, to, asset, amount) {
        if (this.availableTransactions.length === 0) {
            return new utils_1.Transaction(from, to, asset, amount);
        }
        const transaction = this.availableTransactions.pop();
        transaction.reset(from, to, asset, amount);
        return transaction;
    }
    static releaseTransaction(transaction) {
        this.availableTransactions.push(transaction);
    }
}
exports.TransactionPool = TransactionPool;
TransactionPool.availableTransactions = [];
