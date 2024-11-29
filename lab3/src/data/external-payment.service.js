"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalPaymentService = void 0;
class ExternalPaymentService {
    makePayment(currency, amount) {
        console.log(`Making payment with ${amount} ${currency} through external service.`);
        // Simulate API call logic
        return true; // Assume the payment was successful
    }
}
exports.ExternalPaymentService = ExternalPaymentService;
