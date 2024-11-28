export class ExternalPaymentService {
    makePayment(currency: string, amount: number): boolean {
        console.log(`Making payment with ${amount} ${currency} through external service.`);
        // Simulate API call logic
        return true; // Assume the payment was successful
    }
}
