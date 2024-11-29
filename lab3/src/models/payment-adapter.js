"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdapter = void 0;
class PaymentAdapter {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    process(amount, currency) {
        this.paymentService.makePayment(currency, amount);
    }
}
exports.PaymentAdapter = PaymentAdapter;
