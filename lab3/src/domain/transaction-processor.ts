export interface TransactionImplementation {
    execute(): void;
}

export abstract class TransactionProcessor {
    constructor(protected implementation: TransactionImplementation) {}

    abstract process(): void;
}

class CryptoTransaction implements TransactionImplementation {
    execute(): void {
        console.log("Processing crypto transaction.");
    }
}

class FiatTransaction implements TransactionImplementation {
    execute(): void {
        console.log("Processing fiat transaction.");
    }
}

export class Transaction extends TransactionProcessor {
    process(): void {
        this.implementation.execute();
    }
}
