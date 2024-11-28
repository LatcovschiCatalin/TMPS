import { TransactionImplementation } from './transaction-processor';
import {ExternalPaymentService} from "../data";

export class CryptoTransaction implements TransactionImplementation {
    private paymentService: ExternalPaymentService;

    constructor() {
        this.paymentService = new ExternalPaymentService();
    }

    execute(): void {
        const currency = 'BTC';
        const amount = 100;
        if (this.paymentService.makePayment(currency, amount)) {
            console.log("Crypto transaction processed successfully.");
        } else {
            console.log("Failed to process crypto transaction.");
        }
    }
}

export class FiatTransaction implements TransactionImplementation {
    execute(): void {
        console.log("Processing fiat transaction.");
    }
}
