import {CryptoAsset, Wallet} from '../models';

export class Transaction {
    constructor(
        public from: Wallet,
        public to: Wallet,
        public asset: CryptoAsset,
        public amount: number
    ) {}

    reset(from: Wallet, to: Wallet, asset: CryptoAsset, amount: number): void {
        this.from = from;
        this.to = to;
        this.asset = asset;
        this.amount = amount;
    }

    displayTransactionDetails(): void {
        console.log(`Transaction from ${this.from.id} to ${this.to.id} - Amount: ${this.amount} ${this.asset.name}`);
    }
}
