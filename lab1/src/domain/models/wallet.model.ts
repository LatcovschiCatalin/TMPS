export class Wallet {
    constructor(public id: string, public currencyType: string, public balance: number) {}

    static builder() {
        return new WalletBuilder();
    }

    toString(): string {
        return `Wallet ID: ${this.id}, Currency: ${this.currencyType}, Balance: ${this.balance}`;
    }
}

class WalletBuilder {
    private id = 'default-id';
    private currencyType = 'USD';
    private balance = 0;

    setId(id: string): this {
        this.id = id;
        return this;
    }

    setCurrencyType(currencyType: string): this {
        this.currencyType = currencyType;
        return this;
    }

    setBalance(balance: number): this {
        this.balance = balance;
        return this;
    }

    build(): Wallet {
        return new Wallet(this.id, this.currencyType, this.balance);
    }
}
