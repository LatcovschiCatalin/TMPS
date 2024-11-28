"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.TransactionProcessor = void 0;
class TransactionProcessor {
    constructor(implementation) {
        this.implementation = implementation;
    }
}
exports.TransactionProcessor = TransactionProcessor;
class CryptoTransaction {
    execute() {
        console.log("Processing crypto transaction.");
    }
}
class FiatTransaction {
    execute() {
        console.log("Processing fiat transaction.");
    }
}
class Transaction extends TransactionProcessor {
    process() {
        this.implementation.execute();
    }
}
exports.Transaction = Transaction;
