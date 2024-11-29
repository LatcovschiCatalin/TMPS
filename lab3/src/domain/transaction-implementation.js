"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiatTransaction = exports.CryptoTransaction = void 0;
const data_1 = require("../data");
class CryptoTransaction {
    constructor() {
        this.paymentService = new data_1.ExternalPaymentService();
    }
    execute() {
        const currency = 'BTC';
        const amount = 100;
        if (this.paymentService.makePayment(currency, amount)) {
            console.log("Crypto transaction processed successfully.");
        }
        else {
            console.log("Failed to process crypto transaction.");
        }
    }
}
exports.CryptoTransaction = CryptoTransaction;
class FiatTransaction {
    execute() {
        console.log("Processing fiat transaction.");
    }
}
exports.FiatTransaction = FiatTransaction;
