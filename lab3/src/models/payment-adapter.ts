import { ExternalPaymentService } from '../data';

export interface PaymentProcessor {
    process(amount: number, currency: string): void;
}

export class PaymentAdapter implements PaymentProcessor {
    constructor(private paymentService: ExternalPaymentService) {}

    process(amount: number, currency: string): void {
        this.paymentService.makePayment(currency, amount);
    }
}
